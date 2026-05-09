import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import PageHero from '../components/shared/PageHero';
import AccordionFAQ from '../components/shared/AccordionFAQ';
import CTABanner from '../components/shared/CTABanner';

const faqGeneral = [
  { q: 'Createnova는 정확히 무엇입니까?', a: 'Createnova는 귀하의 랩탑에서 문서를 전처리한 뒤 Claude AI로 분석하여, 즉시 보고 가능한 .pptx 파일을 생성하는 프라이빗 인텔리전스 시스템입니다. 원본 파일은 업로드되지 않으며, 파이썬이 추출한 텍스트만 분석에 사용됩니다.' },
  { q: 'ChatGPT나 Claude 웹과 무엇이 다릅니까?', a: '핵심 차이는 3가지입니다: ① 원본 파일 비전송(파이썬이 텍스트만 추출하여 API로 전송), ② 문서 누적 기억(대화가 초기화되지 않음), ③ .pptx 다이렉트 출력(별도 정리 작업 불필요).' },
  { q: '어떤 파일 포맷을 지원합니까?', a: 'PDF, DOCX, PPTX, XLSX, TXT, CSV를 지원합니다. 한 번에 최대 20개 파일을 투입할 수 있습니다.' },
  { q: '한국어 문서만 분석할 수 있습니까?', a: '아닙니다. 한국어, 영어, 일본어, 중국어 문서를 분석할 수 있습니다. 출력 언어는 프롬프트 설정으로 지정하실 수 있습니다.' },
  { q: 'GPU가 필요합니까?', a: '필요하지 않습니다. CPU만으로 작동하도록 최적화되어 있으며, 일반 업무용 노트북에서 원활하게 구동됩니다.' },
];

const faqPurchase = [
  { q: '구독 모델입니까?', a: '아닙니다. 1회 결제 영구 라이선스입니다. 추가 비용이 발생하지 않습니다.' },
  { q: '여러 기기에서 사용할 수 있습니까?', a: '1인 사용자 기준 최대 2대의 기기에 설치하실 수 있습니다.' },
  { q: '법인 라이선스가 있습니까?', a: '5라이선스 이상 구매 시 법인 할인을 제공합니다. mindpackai.help@gmail.com로 문의하여 주십시오.' },
  { q: '결제 후 어떻게 받습니까?', a: '결제 완료 즉시 등록하신 이메일로 다운로드 링크가 발송됩니다.' },
];

const faqSecurity = [
  { q: '원본 파일이 외부로 전송됩니까?', a: '아닙니다. 원본 파일(PDF, PPTX 등)은 귀하의 기기를 벗어나지 않습니다. 파이썬이 로컬에서 텍스트만 추출하고, 추출된 텍스트만 Claude API로 전송됩니다. Mindpack AI 자체 서버에는 어떤 데이터도 전송되지 않습니다.' },
  { q: '사내 AI 서버(Azure OpenAI, AWS Bedrock 등)에 연결할 수 있습니까?', a: '네. 설정에서 API 엔드포인트만 귀사의 사내 AI 서버 주소로 변경하면 즉시 연동됩니다. 이 경우 추출된 텍스트도 사내망을 벗어나지 않아 가장 엄격한 보안 환경에서도 사용할 수 있습니다.' },
  { q: '사내 보안 감사를 통과할 수 있습니까?', a: '원본 파일이 외부 전송되지 않으므로 DLP 정책 관점에서 유리합니다. 보안 검토용 기술 문서는 mindpackai.help@gmail.com로 요청하실 수 있습니다.' },
];

const faqSupport = [
  { q: '기술 지원은 어떻게 받습니까?', a: 'Premium 구매자는 전용 지원 채널(이메일 우선 응답)을 이용하실 수 있습니다. Basic 구매자는 일반 이메일 지원을 제공합니다.' },
  { q: '앱이 작동하지 않으면 어떻게 합니까?', a: 'mindpackai.help@gmail.com로 문의하시면 24시간 이내에 기술 지원을 제공합니다. 해결 불가 시 100% 환불 보증이 적용됩니다.' },
];

const sections = [
  { title: '제품 일반', items: faqGeneral },
  { title: '구매 및 라이선스', items: faqPurchase },
  { title: '보안', items: faqSecurity },
  { title: '기술 지원', items: faqSupport },
];

export default function FAQPage() {
  return (
    <div>
      <PageHero
        eyebrow="FAQ"
        headline={'자주 묻는 질문'}
        subCopy="궁금한 점이 해결되지 않으면 mindpackai.help@gmail.com로 문의하여 주십시오."
      />

      <section className="w-full py-4 pb-24">
        <div className="section-container max-w-3xl flex flex-col gap-14">
          {sections.map(sec => (
            <div key={sec.title}>
              <h2 className="text-ivory font-bold text-[16px] mb-5 pb-3 border-b border-white/[0.06]">{sec.title}</h2>
              <AccordionFAQ items={sec.items} />
            </div>
          ))}
        </div>
      </section>

      <section className="w-full py-10">
        <div className="section-container max-w-3xl text-center">
          <p className="text-ash text-[14px] mb-4">원하시는 답변을 찾지 못하셨습니까?</p>
          <a
            href="mailto:mindpackai.help@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent/[0.08] border border-accent/20 text-accent-bright text-[13px] font-semibold hover:bg-accent/[0.15] transition-all duration-300"
          >
            <Icon icon="solar:letter-bold-duotone" className="w-4 h-4" />
            mindpackai.help@gmail.com 문의하기
          </a>
        </div>
      </section>
    </div>
  );
}
