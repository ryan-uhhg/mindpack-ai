import { useState } from 'react';
import { Icon } from '@iconify/react';

export default function MailingForm({ compact = false }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setErrorMsg('올바른 이메일 주소를 입력해 주세요.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setEmail('');
      } else {
        setErrorMsg(data.error || '오류가 발생했습니다. 다시 시도해 주세요.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className={`flex items-center gap-3 ${compact ? 'py-2' : 'py-4'}`}>
        <div className="w-8 h-8 rounded-full bg-emerald-accent/10 border border-emerald-accent/20 flex items-center justify-center shrink-0">
          <Icon icon="solar:check-circle-bold-duotone" className="w-4 h-4 text-emerald-accent" />
        </div>
        <div>
          <p className="text-emerald-accent text-[13px] font-semibold">구독 완료!</p>
          <p className="text-text-tertiary text-[11px]">프레임워크 패키지를 이메일로 발송해 드렸습니다.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? '' : 'w-full max-w-md'}>
      <div className={`flex ${compact ? 'flex-row gap-2' : 'flex-col sm:flex-row gap-3'}`}>
        <input
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setStatus('idle'); }}
          placeholder="your@email.com"
          className={`
            flex-1 bg-bg-soft border border-border-mid rounded-xl
            text-text-secondary placeholder:text-text-tertiary/40 text-[13px]
            focus:outline-none focus:border-accent/40 focus:bg-bg-card
            transition-all duration-200
            ${compact ? 'px-3 py-2' : 'px-4 py-3'}
          `}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className={`
            shrink-0 rounded-xl font-semibold text-[13px] transition-all duration-200
            bg-accent/90 hover:bg-accent text-white
            disabled:opacity-50 disabled:cursor-not-allowed
            ${compact ? 'px-4 py-2' : 'px-6 py-3'}
          `}
        >
          {status === 'loading' ? (
            <Icon icon="solar:refresh-bold-duotone" className="w-4 h-4 animate-spin" />
          ) : '무료로 받기'}
        </button>
      </div>
      {status === 'error' && (
        <p className="mt-2 text-red-400/80 text-[11px]">{errorMsg}</p>
      )}
      {!compact && (
        <p className="mt-2.5 text-text-tertiary/50 text-[11px]">
          스팸 없음. 언제든 구독 취소 가능.
        </p>
      )}
    </form>
  );
}
