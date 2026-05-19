export default function Courses() {
  return (
    <section id="courses" className="bg-[var(--bg2)]">
      <div className="max-w-[1160px] mx-auto px-6 md:px-12 py-24">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 font-mono text-[0.72rem] text-[var(--acc3)] tracking-wider uppercase mb-4">
            <span className="opacity-50">//</span> Kurslar
          </div>
          <h2 className="font-syne text-[2.2rem] md:text-[2.6rem] font-extrabold tracking-tight leading-tight mb-4">
            Boshlang'ichdan<br />avtomatlashtirishgacha
          </h2>
          <p className="text-[var(--txt2)] text-[0.95rem] leading-relaxed max-w-[480px] mb-15">
            Ikkala kurs ham real loyiha asosida — siz o'rganasiz, keyin ishda qo'llaysiz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-[1]">
          {/* Foundation Course */}
          <div className="reveal bg-[var(--bg3)] border border-[var(--bdr)] rounded-3xl p-10 relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--bdr3)]" style={{ transitionDelay: '0.1s' }}>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[0.73rem] font-bold mb-6 bg-[rgba(0,184,148,0.12)] text-[var(--green2)] border border-[rgba(0,184,148,0.2)]">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--green)]" />
              Boshlang'ich
            </div>
            <h3 className="font-syne text-[1.55rem] font-extrabold leading-tight mb-3.5 tracking-tight">
              Excel Foundation + Intermediate
            </h3>
            <p className="text-[var(--txt2)] text-[0.9rem] leading-relaxed mb-6">
              Excelning asosiy interfeysi, formulalar, jadvallar, grafiklar va mini dashboard yaratishgacha — 4 haftalik sayohat.
            </p>
            <div className="flex gap-5 mb-7">
              <div className="flex items-center gap-2 text-[0.82rem] text-[var(--txt3)]">📅 4 hafta</div>
              <div className="flex items-center gap-2 text-[0.82rem] text-[var(--txt3)]">📖 8 dars</div>
            </div>
            <div className="border-t border-[var(--bdr)] pt-6 flex flex-col gap-2.5">
              {[
                'Interfeys va asosiy formulalar (SUM, AVG, MIN, MAX)',
                'IF mantiqiy formulalar va COUNTIF / SUMIF',
                'VLOOKUP / XLOOKUP — jadvallar bilan ishlash',
                'Pivot Table va mini Dashboard',
              ].map((topic, i) => (
                <div key={i} className="flex items-center gap-3 text-[0.85rem] text-[var(--txt2)]">
                  <div className="w-[18px] h-[18px] rounded flex items-center justify-center text-[10px] bg-[rgba(0,184,148,0.1)] text-[var(--green)] border border-[rgba(0,184,148,0.2)]">
                    ✓
                  </div>
                  {topic}
                </div>
              ))}
            </div>
          </div>

          {/* PRO Course */}
          <div className="reveal bg-[var(--bg3)] border border-[rgba(108,92,231,0.25)] rounded-3xl p-10 relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--bdr3)]" style={{ transitionDelay: '0.2s' }}>
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--acc)] to-transparent" />
            
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[0.73rem] font-bold mb-6 bg-[rgba(108,92,231,0.12)] text-[var(--acc3)] border border-[rgba(108,92,231,0.2)]">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--acc)]" />
              Professional
            </div>
            <h3 className="font-syne text-[1.55rem] font-extrabold leading-tight mb-3.5 tracking-tight">
              Excel PRO + Automation
            </h3>
            <p className="text-[var(--txt2)] text-[0.9rem] leading-relaxed mb-6">
              Murakkab formulalar, VBA makroslar, ChatGPT integratsiya va to'liq avtomatik hisobotlar — 6 haftalik PRO sayohat.
            </p>
            <div className="flex gap-5 mb-7">
              <div className="flex items-center gap-2 text-[0.82rem] text-[var(--txt3)]">📅 6 hafta</div>
              <div className="flex items-center gap-2 text-[0.82rem] text-[var(--txt3)]">📖 12 dars</div>
            </div>
            <div className="border-t border-[var(--bdr)] pt-6 flex flex-col gap-2.5">
              {[
                'Murakkab formulalar: Nested IF, AND, OR, SUMIFS',
                'Real loyiha — zakaz tizimi va data cleaning',
                'ChatGPT + Excel: AI yordamida formula yozish',
                'VBA makroslar va tugma orqali hisobot',
              ].map((topic, i) => (
                <div key={i} className="flex items-center gap-3 text-[0.85rem] text-[var(--txt2)]">
                  <div className="w-[18px] h-[18px] rounded flex items-center justify-center text-[10px] bg-[rgba(108,92,231,0.1)] text-[var(--acc3)] border border-[rgba(108,92,231,0.2)]">
                    ✦
                  </div>
                  {topic}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
