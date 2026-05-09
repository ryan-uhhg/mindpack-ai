// Netlify Function: EmailOctopus 구독 프록시
// API 키는 Netlify 환경변수에서만 읽음 → 브라우저에 절대 노출되지 않음

const LIST_ID = '844faab4-4ba2-11f1-b5b9-b585d5cbec3d';
const EO_API_URL = `https://emailoctopus.com/api/1.6/lists/${LIST_ID}/contacts`;

export default async (req) => {
  // CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: corsHeaders(),
    });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: corsHeaders(),
    });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: corsHeaders(),
    });
  }

  const { email } = body;
  if (!email || !email.includes('@')) {
    return new Response(JSON.stringify({ error: '올바른 이메일 주소를 입력해 주세요.' }), {
      status: 400,
      headers: corsHeaders(),
    });
  }

  const apiKey = process.env.EMAILOCTOPUS_API_KEY;
  if (!apiKey) {
    console.error('EMAILOCTOPUS_API_KEY 환경변수가 설정되지 않았습니다.');
    return new Response(JSON.stringify({ error: '서버 설정 오류입니다. 관리자에게 문의하세요.' }), {
      status: 500,
      headers: corsHeaders(),
    });
  }

  try {
    const res = await fetch(EO_API_URL, {
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

    const data = await res.json();

    if (res.ok) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: corsHeaders(),
      });
    }

    // 이미 구독된 이메일 처리
    if (data.error?.code === 'MEMBER_EXISTS_WITH_EMAIL_ADDRESS') {
      return new Response(JSON.stringify({ success: true, already: true }), {
        status: 200,
        headers: corsHeaders(),
      });
    }

    return new Response(JSON.stringify({ error: data.error?.message || '오류가 발생했습니다.' }), {
      status: res.status,
      headers: corsHeaders(),
    });
  } catch (err) {
    console.error('EmailOctopus API 호출 실패:', err);
    return new Response(JSON.stringify({ error: '네트워크 오류가 발생했습니다.' }), {
      status: 500,
      headers: corsHeaders(),
    });
  }
};

function corsHeaders() {
  return {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'https://mindpackai.netlify.app',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

export const config = { path: '/api/subscribe' };
