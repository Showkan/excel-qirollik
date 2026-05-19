interface HeroProps {
  onLoginClick: () => void;
}

export default function Hero({ onLoginClick }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-12 pt-20 pb-15 relative overflow-hidden">
      {/* Orbs */}
      <div className="orb w-[500px] h-[500px] -top-20 -right-15 absolute bg-[radial-gradient(circle,rgba(108,92,231,0.18),transparent_70%)]" />
      <div className="orb w-[400px] h-[400px] -bottom-30 -left-15 absolute bg-[radial-gradient(circle,rgba(0,184,148,0.08),transparent_70%)]" style={{ animationDelay: '-3s' }} />
      <div className="orb w-[300px] h-[300px] top-[30%] left-[30%] absolute bg-[radial-gradient(circle,rgba(108,92,231,0.06),transparent_70%)]" style={{ animationDelay: '-5s' }} />
      
      {/* Dots */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:32px_32px] [mask-image:radial-gradient(ellipse_70%_80%_at_50%_50%,black_20%,transparent_100%)]" />
      
      <div className="max-w-[1160px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-[2]">
        <div>
          <div className="animate-slide-up inline-flex items-center gap-2 px-3.5 py-1.5 pr-3.5 pl-2 bg-[rgba(108,92,231,0.1)] border border-[rgba(108,92,231,0.2)] rounded-full mb-7 text-[0.78rem] text-[var(--acc3)] font-medium" style={{ animationDelay: '0.1s' }}>
            <div className="w-5 h-5 rounded-full bg-[var(--acc)] flex items-center justify-center text-[10px]">✦</div>
            Uzbekistondagi eng professional Excel kursi
          </div>
          
          <h1 className="animate-slide-up font-syne text-[2.6rem] md:text-[3.8rem] font-extrabold leading-[1.1] tracking-tight mb-5" style={{ animationDelay: '0.2s' }}>
            Excelni <span className="text-gradient">PRO</span>
            <br />
            darajaga <span className="text-outline">o'rgan</span>
          </h1>
          
          <p className="animate-slide-up text-base text-[var(--txt2)] leading-relaxed max-w-[460px] mb-10" style={{ animationDelay: '0.3s' }}>
            Real loyihalar, amaliy darslar va professional nazorat tizimi bilan. Har bir dars — yangi bosqich. Har bir formula — yangi kuch.
          </p>
          
          <div className="animate-slide-up flex gap-3 flex-wrap" style={{ animationDelay: '0.4s' }}>
            <button 
              onClick={onLoginClick}
              className="px-7 py-3.5 bg-gradient-to-br from-[var(--acc)] to-[var(--acc2)] text-white border-none rounded-xl text-[0.9rem] font-bold cursor-pointer transition-all inline-flex items-center gap-2 shadow-[0_8px_32px_rgba(108,92,231,0.35)] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(108,92,231,0.45)]"
            >
              Boshlash
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <a href="#courses" className="px-7 py-3.5 bg-transparent text-[var(--txt2)] border border-[var(--bdr2)] rounded-xl text-[0.9rem] font-medium cursor-pointer transition-all inline-flex items-center gap-2 hover:border-[rgba(162,155,254,0.4)] hover:text-[var(--txt)]">
              Kurslarni ko'rish
            </a>
          </div>
          
          <div className="animate-slide-up flex gap-0 mt-13 pt-9 border-t border-[var(--bdr)]" style={{ animationDelay: '0.5s' }}>
            <div className="pr-8 mr-8 border-r border-[var(--bdr)]">
              <div className="font-syne text-[2rem] font-extrabold bg-gradient-to-br from-[var(--txt)] to-[var(--txt2)] bg-clip-text text-transparent">20+</div>
              <div className="text-[0.78rem] text-[var(--txt3)] mt-0.5 tracking-wider uppercase">Darslar</div>
            </div>
            <div className="pr-8 mr-8 border-r border-[var(--bdr)]">
              <div className="font-syne text-[2rem] font-extrabold bg-gradient-to-br from-[var(--txt)] to-[var(--txt2)] bg-clip-text text-transparent">2</div>
              <div className="text-[0.78rem] text-[var(--txt3)] mt-0.5 tracking-wider uppercase">Kurs darajasi</div>
            </div>
            <div>
              <div className="font-syne text-[2rem] font-extrabold bg-gradient-to-br from-[var(--txt)] to-[var(--txt2)] bg-clip-text text-transparent">100%</div>
              <div className="text-[0.78rem] text-[var(--txt3)] mt-0.5 tracking-wider uppercase">Amaliy</div>
            </div>
          </div>
        </div>
        
        {/* Hero Visual - Hidden on mobile */}
        <div className="hidden lg:block animate-slide-up relative" style={{ animationDelay: '0.3s' }}>
          <div className="bg-[var(--bg3)] border border-[var(--bdr2)] rounded-2xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.04)] relative">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--acc)] to-transparent opacity-60" />
            
            <div className="p-3 bg-[var(--bg4)] flex items-center gap-3 border-b border-[var(--bdr)]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="font-mono text-[0.72rem] text-[var(--txt3)] ml-2">Hisobot_2024.xlsx</div>
            </div>
            
            <div className="p-5">
              <div className="flex gap-0.5 mb-3">
                <div className="px-3.5 py-1.5 rounded-t-md font-mono text-[0.7rem] bg-[#1a6b3c] text-[#d2edde] border border-[#2d8a55] border-b-0 cursor-pointer">Sotuv</div>
                <div className="px-3.5 py-1.5 rounded-t-md font-mono text-[0.7rem] bg-[var(--bg4)] text-[var(--txt3)] border border-[var(--bdr)] border-b-0 cursor-pointer">Xarajat</div>
                <div className="px-3.5 py-1.5 rounded-t-md font-mono text-[0.7rem] bg-[var(--bg4)] text-[var(--txt3)] border border-[var(--bdr)] border-b-0 cursor-pointer">Dashboard</div>
              </div>
              
              <div className="border border-[#2d3a2e] rounded-tr-lg rounded-b-lg overflow-hidden">
                <div className="grid grid-cols-[32px_repeat(5,1fr)] bg-[#1a2b1e] border-b border-[#2d3a2e]">
                  <div className="font-mono text-[0.65rem] text-[#6a9a76] p-1.5 text-center border-r border-[#2d3a2e]"></div>
                  <div className="font-mono text-[0.65rem] text-[#6a9a76] p-1.5 text-center border-r border-[#2d3a2e]">A</div>
                  <div className="font-mono text-[0.65rem] text-[#6a9a76] p-1.5 text-center border-r border-[#2d3a2e]">B</div>
                  <div className="font-mono text-[0.65rem] text-[#6a9a76] p-1.5 text-center border-r border-[#2d3a2e]">C</div>
                  <div className="font-mono text-[0.65rem] text-[#6a9a76] p-1.5 text-center border-r border-[#2d3a2e]">D</div>
                  <div className="font-mono text-[0.65rem] text-[#6a9a76] p-1.5 text-center">E</div>
                </div>
                
                {[
                  ['1', 'Ism', 'Kirim', 'Chiqim', 'Bonus', 'Jami'],
                  ['2', 'Sherzod', '10 000', '3 400', '200', '6 800'],
                  ['3', 'Madina', '15 000', '4 200', '350', '11 150'],
                  ['4', 'Aziza', '8 000', '5 100', '150', '3 050'],
                  ['5', 'Ali', '12 000', '2 800', '180', '9 380'],
                ].map((row, ri) => (
                  <div key={ri} className={`grid grid-cols-[32px_repeat(5,1fr)] ${ri < 4 ? 'border-b border-[rgba(45,58,46,0.5)]' : ''}`}>
                    <div className="font-mono text-[0.65rem] text-[#4a7056] p-2 text-center bg-[#1a2b1e] border-r border-[#2d3a2e]">{row[0]}</div>
                    {ri === 0 ? (
                      <>
                        <div className="font-mono text-[0.72rem] p-2 border-r border-[rgba(45,58,46,0.4)] text-[#d2edde] font-medium bg-[#0f2218]">{row[1]}</div>
                        <div className="font-mono text-[0.72rem] p-2 border-r border-[rgba(45,58,46,0.4)] text-[#d2edde] font-medium bg-[#0f2218]">{row[2]}</div>
                        <div className="font-mono text-[0.72rem] p-2 border-r border-[rgba(45,58,46,0.4)] text-[#d2edde] font-medium bg-[#0f2218]">{row[3]}</div>
                        <div className="font-mono text-[0.72rem] p-2 border-r border-[rgba(45,58,46,0.4)] text-[#d2edde] font-medium bg-[#0f2218]">{row[4]}</div>
                        <div className="font-mono text-[0.72rem] p-2 text-[#d2edde] font-medium bg-[#0f2218]">{row[5]}</div>
                      </>
                    ) : (
                      <>
                        <div className="font-mono text-[0.72rem] p-2 border-r border-[rgba(45,58,46,0.4)] text-[var(--txt)]">{row[1]}</div>
                        <div className="font-mono text-[0.72rem] p-2 border-r border-[rgba(45,58,46,0.4)] text-[#34d399]">{row[2]}</div>
                        <div className="font-mono text-[0.72rem] p-2 border-r border-[rgba(45,58,46,0.4)] text-[#ff7675]">{row[3]}</div>
                        <div className="font-mono text-[0.72rem] p-2 border-r border-[rgba(45,58,46,0.4)] text-[#fdcb6e]">{row[4]}</div>
                        <div className="font-mono text-[0.72rem] p-2 text-[#74b9ff]">{row[5]}</div>
                      </>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="flex items-center gap-2.5 p-2 px-3 bg-[var(--bg4)] border-t border-[var(--bdr)] mt-3 rounded-lg">
                <div className="font-mono text-[0.7rem] text-[#1a6b3c] bg-[rgba(210,237,222,0.1)] px-2.5 py-0.5 rounded border border-[rgba(45,138,85,0.25)]">E2</div>
                <div className="font-mono text-[0.72rem] text-[#6c5ce7] italic">fx</div>
                <div className="font-mono text-[0.72rem] text-[var(--acc3)]">=SUM(B2,D2)-C2</div>
              </div>
            </div>
          </div>
          
          {/* Floating cards */}
          <div className="animate-float1 absolute -bottom-4 -right-6 bg-[var(--bg2)] border border-[var(--bdr2)] rounded-xl p-3.5 px-4 flex items-center gap-3 shadow-[0_24px_48px_rgba(0,0,0,0.4)]">
            <div className="w-[34px] h-[34px] rounded-lg bg-[rgba(0,184,148,0.15)] flex items-center justify-center text-base">⏱️</div>
            <div>
              <p className="text-[0.82rem] font-bold text-[var(--txt)]">Bugungi vaqt</p>
              <span className="text-[0.7rem] text-[var(--txt3)]">2 soat 14 daqiqa</span>
            </div>
          </div>
          
          <div className="animate-float2 absolute top-6 -left-7 bg-[var(--bg2)] border border-[var(--bdr2)] rounded-xl p-3 px-3.5 flex items-center gap-2.5 shadow-[0_16px_32px_rgba(0,0,0,0.3)]">
            <div className="w-[34px] h-[34px] rounded-lg bg-[rgba(108,92,231,0.2)] flex items-center justify-center text-base">⚡</div>
            <div>
              <p className="text-[0.82rem] font-bold text-[var(--txt)]">VBA avtomatik</p>
              <span className="text-[0.7rem] text-[var(--txt3)]">12-dars tayyor</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
