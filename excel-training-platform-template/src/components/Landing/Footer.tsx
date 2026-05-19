export default function Footer() {
  return (
    <footer className="border-t border-[var(--bdr)] px-6 md:px-12 py-10 flex justify-between items-center flex-wrap gap-4">
      <div className="font-syne text-[0.95rem] font-extrabold text-[var(--txt2)] flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[var(--acc)] to-[var(--acc3)] flex items-center justify-center text-[14px]">
          👑
        </div>
        Excel Qirolligi
      </div>
      <div className="text-[0.8rem] text-[var(--txt3)]">
        2024 · Barcha huquqlar himoyalangan · <a href="https://t.me/tr_power" className="text-[var(--acc3)] hover:underline">@tr_power</a>
      </div>
    </footer>
  );
}
