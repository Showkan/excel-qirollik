interface CTAProps {
  onLoginClick: () => void;
}

export default function CTA({ onLoginClick }: CTAProps) {
  return (
    <section id="contact">
      <div className="max-w-[1160px] mx-auto px-6 md:px-12 py-24">
        <div className="reveal bg-[var(--bg2)] border border-[var(--bdr)] rounded-3xl py-18 px-10 md:px-18 text-center relative overflow-hidden">
          <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(108,92,231,0.12),transparent_65%)]" />
          
          <div className="inline-flex items-center gap-2 font-mono text-[0.72rem] text-[var(--acc3)] tracking-wider uppercase mb-5 justify-center relative z-[1]">
            <span className="opacity-50">//</span> Qo'shiling
          </div>
          
          <h2 className="font-syne text-[2rem] md:text-[2.8rem] font-extrabold tracking-tight mb-4 relative z-[1]">
            Qirollikka tayyor<br />bo'ldingizmi? 👑
          </h2>
          
          <p className="text-[var(--txt2)] text-base mb-9 max-w-[480px] mx-auto leading-relaxed relative z-[1]">
            Login olish uchun Telegram orqali bog'laning. Tez javob — tez boshlash!
          </p>
          
          <div className="flex justify-center gap-4 flex-wrap relative z-[1]">
            <a 
              href="https://t.me/tr_power" 
              target="_blank"
              className="flex items-center gap-3 px-6 py-3.5 bg-[var(--bg3)] border border-[var(--bdr2)] rounded-xl min-w-[200px] cursor-pointer transition-all hover:border-[var(--bdr3)] hover:bg-[var(--glow2)] hover:-translate-y-0.5"
            >
              <div className="w-[38px] h-[38px] rounded-lg bg-[var(--glow2)] border border-[var(--bdr3)] flex items-center justify-center text-[18px]">
                ✈️
              </div>
              <div className="text-left">
                <p className="text-[0.85rem] font-bold text-[var(--txt)]">Telegram</p>
                <span className="text-[0.73rem] text-[var(--txt3)]">@tr_power — tez javob</span>
              </div>
            </a>
            
            <button 
              onClick={onLoginClick}
              className="flex items-center gap-3 px-6 py-3.5 bg-[var(--bg3)] border border-[var(--bdr2)] rounded-xl min-w-[200px] cursor-pointer transition-all hover:border-[var(--bdr3)] hover:bg-[var(--glow2)] hover:-translate-y-0.5"
            >
              <div className="w-[38px] h-[38px] rounded-lg bg-[var(--glow2)] border border-[var(--bdr3)] flex items-center justify-center text-[18px]">
                🔑
              </div>
              <div className="text-left">
                <p className="text-[0.85rem] font-bold text-[var(--txt)]">Kirish</p>
                <span className="text-[0.73rem] text-[var(--txt3)]">Login bor bo'lsa kirish</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
