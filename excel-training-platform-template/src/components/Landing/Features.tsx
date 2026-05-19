export default function Features() {
  const features = [
    {
      num: '01',
      icon: '📊',
      title: 'Amaliy darslar',
      desc: 'Har bir darsda haqiqiy Excel jadvallar, formulalar va vizual misollar bilan ishlaysiz.',
      chips: ['SUM', 'IF', 'VLOOKUP', 'Pivot'],
      wide: false,
    },
    {
      num: '02',
      icon: '⏱️',
      title: 'Real-time vaqt nazorati',
      desc: 'Har bir sessiyadagi vaqtingiz avtomatik hisoblanadi. O\'qituvchi qaysi kunda qancha vaqt sarflaganingizni ko\'radi.',
      chips: [],
      wide: true,
    },
    {
      num: '03',
      icon: '🛡️',
      title: 'Guruh tizimi',
      desc: 'Qomondonlar guruhlarni boshqaradi va statistikani real vaqtda kuzatadi.',
      chips: [],
      wide: false,
    },
    {
      num: '04',
      icon: '🤖',
      title: 'ChatGPT integratsiya',
      desc: 'AI yordamida formulalar yozishni, xatolarni topishni va VBA kodini tuzishni o\'rganasiz.',
      chips: [],
      wide: false,
    },
    {
      num: '05',
      icon: '📈',
      title: 'Boshlang\'ichdan avtomatlashtirishgacha',
      desc: 'Interfeys va asosiy formulalardan boshlab VBA makroslargacha — to\'liq yo\'l xaritasi.',
      chips: ['Interfeys', 'Formulalar', 'Dashboard', 'VBA', 'Automation'],
      wide: true,
    },
  ];

  return (
    <section id="features">
      <div className="max-w-[1160px] mx-auto px-6 md:px-12 py-24">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 font-mono text-[0.72rem] text-[var(--acc3)] tracking-wider uppercase mb-4">
            <span className="opacity-50">//</span> Nima uchun biz
          </div>
          <h2 className="font-syne text-[2.2rem] md:text-[2.6rem] font-extrabold tracking-tight leading-tight mb-4">
            Professional muhit,<br />real natija
          </h2>
          <p className="text-[var(--txt2)] text-[0.95rem] leading-relaxed max-w-[480px] mb-15">
            Har bir dars real Excel fayliga asoslangan — nazariya emas, amaliyot.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <div 
              key={i}
              className={`reveal bg-[var(--bg2)] border border-[var(--bdr)] rounded-2xl p-8 relative overflow-hidden transition-all duration-300 hover:border-[var(--bdr3)] hover:-translate-y-1 ${f.wide ? 'md:col-span-2' : ''}`}
              style={{ transitionDelay: `${(i + 1) * 0.1}s` }}
            >
              <div className="font-mono text-[0.7rem] text-[var(--txt3)] mb-5 tracking-wider">{f.num}</div>
              <div className="w-12 h-12 rounded-xl bg-[var(--glow2)] border border-[var(--bdr3)] flex items-center justify-center text-[22px] mb-5">
                {f.icon}
              </div>
              <h3 className="font-syne text-[1.1rem] font-bold mb-2.5">{f.title}</h3>
              <p className="text-[0.88rem] text-[var(--txt2)] leading-relaxed">{f.desc}</p>
              
              {f.chips.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-5">
                  {f.chips.map((chip, ci) => (
                    <span key={ci} className="px-3 py-1.5 rounded-full text-[0.75rem] font-medium border border-[var(--bdr2)] text-[var(--txt2)]">
                      {chip}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
