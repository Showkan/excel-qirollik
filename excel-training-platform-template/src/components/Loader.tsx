export default function Loader() {
  return (
    <div className="fixed inset-0 bg-[var(--bg)] z-[9998] flex items-center justify-center">
      <div className="text-center">
        <div className="text-[2.5rem] animate-crown-pop">👑</div>
        <div className="w-40 h-0.5 bg-[var(--bdr2)] rounded mt-4 mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[var(--acc)] to-[var(--acc3)] rounded animate-load" />
        </div>
      </div>
    </div>
  );
}
