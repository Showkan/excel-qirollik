import { useApp } from '../../context/AppContext';
import { roleName } from '../../lib/utils';

export default function AppHeader() {
  const { currentUser, timerDisplay, logout, isLightMode, toggleTheme } = useApp();

  if (!currentUser) return null;

  return (
    <header className="h-15 bg-[var(--bg2)] border-b border-[var(--bdr)] text-[var(--txt)] flex items-center justify-between px-6 sticky top-0 z-[100]">
      <div className="flex items-center gap-2.5 font-bold text-base font-syne">
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[var(--acc)] to-[var(--acc3)] flex items-center justify-center text-[14px]">
          👑
        </div>
        Excel Qirolligi
      </div>
      
      <div className="flex items-center gap-3.5">
        <div className="font-mono font-bold bg-[rgba(0,184,148,0.1)] text-[var(--green2)] px-3.5 py-1.5 rounded-lg text-[0.85rem] border border-[rgba(0,184,148,0.25)]">
          {timerDisplay}
        </div>
        
        <button 
          onClick={toggleTheme}
          className="bg-transparent border border-[var(--bdr2)] text-[var(--txt)] px-2.5 py-1.5 rounded-lg cursor-pointer text-[0.9rem]"
        >
          {isLightMode ? '🌙' : '☀️'}
        </button>
        
        <div className="text-[0.82rem] text-[var(--txt2)]">
          {currentUser.name} ({roleName(currentUser.role)})
        </div>
        
        <button 
          onClick={logout}
          className="bg-[rgba(225,112,85,0.1)] text-[#ff7675] border border-[rgba(225,112,85,0.25)] px-4 py-2 rounded-lg font-semibold text-[0.8rem] cursor-pointer transition-all hover:bg-[#e17055] hover:text-white"
        >
          Chiqish
        </button>
      </div>
    </header>
  );
}
