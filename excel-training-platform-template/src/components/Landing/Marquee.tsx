export default function Marquee() {
  const items = [
    { icon: '📊', text: 'SUM · AVERAGE · MIN · MAX' },
    { icon: '🔍', text: 'VLOOKUP · XLOOKUP · INDEX' },
    { icon: '🧮', text: 'IF · AND · OR · IFERROR' },
    { icon: '🔄', text: 'SUMIFS · COUNTIFS' },
    { icon: '📈', text: 'Pivot Table · Dashboard' },
    { icon: '⚙️', text: 'VBA · Makroslar · Automation' },
    { icon: '🤖', text: 'ChatGPT + Excel' },
    { icon: '🗂️', text: 'UNIQUE · SORT · FILTER' },
  ];

  return (
    <div className="py-5 border-t border-b border-[var(--bdr)] overflow-hidden bg-[var(--bg2)] relative">
      <div className="absolute top-0 bottom-0 left-0 w-30 z-[2] bg-gradient-to-r from-[var(--bg2)] to-transparent" />
      <div className="absolute top-0 bottom-0 right-0 w-30 z-[2] bg-gradient-to-l from-[var(--bg2)] to-transparent" />
      
      <div className="flex gap-0 animate-marquee w-max">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-2.5 px-7 font-mono text-[0.78rem] text-[var(--txt3)] whitespace-nowrap border-r border-[var(--bdr)]">
            <span className="text-[var(--acc3)] text-[0.9rem]">{item.icon}</span>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}
