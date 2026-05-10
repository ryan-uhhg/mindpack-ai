import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 미들웨어
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json());

// 헬스 체크
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// EmailOctopus 구독
const LIST_ID = '844faab4-4ba2-11f1-b5b9-b585d5cbec3d';
const EO_API_URL = `https://emailoctopus.com/api/1.6/lists/${LIST_ID}/contacts`;

app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: '올바른 이메일 주소를 입력해 주세요.' });
  }

  const apiKey = process.env.EMAILOCTOPUS_API_KEY;
  if (!apiKey) {
    console.error('EMAILOCTOPUS_API_KEY 환경변수가 설정되지 않았습니다.');
    return res.status(500).json({ error: '서버 설정 오류입니다.' });
  }

  try {
    const response = await fetch(EO_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: apiKey,
        email_address: email,
        fields: { Source: 'landing-free-plan' },
        tags: ['earlybird', 'landing'],
        status: 'SUBSCRIBED',
      }),
    });

    const data = await response.json();

    if (response.ok) {
      return res.json({ success: true });
    }

    // 이미 구독된 이메일 처리
    if (data.error?.code === 'MEMBER_EXISTS_WITH_EMAIL_ADDRESS') {
      return res.json({ success: true, already: true });
    }

    return res.status(response.status).json({ error: data.error?.message || '오류가 발생했습니다.' });
  } catch (err) {
    console.error('EmailOctopus API 호출 실패:', err);
    return res.status(500).json({ error: '네트워크 오류가 발생했습니다.' });
  }
});

// 정적 파일 제공 (React 빌드 결과)
app.use(express.static(path.join(__dirname, 'dist')));

// React Router 대응 (모든 경로를 index.html로)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// 에러 핸들링
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: '서버 오류가 발생했습니다.' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
