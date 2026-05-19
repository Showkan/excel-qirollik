import { useState } from 'react';
import { useApp } from '../../context/AppContext';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const { login } = useApp();
  const [loginStr, setLoginStr] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError('');
    setLoading(true);
    
    const result = await login(loginStr.trim(), password.trim());
    
    setLoading(false);
    
    if (!result.success) {
      setError(result.error || 'Xatolik yuz berdi');
    } else {
      onClose();
      setLoginStr('');
      setPassword('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className={`fixed inset-0 bg-black/75 z-[800] flex items-center justify-center p-5 backdrop-blur-lg transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className={`bg-[var(--bg2)] border border-[var(--bdr2)] rounded-3xl p-11 w-full max-w-[400px] relative transition-transform duration-300 shadow-[0_40px_80px_rgba(0,0,0,0.5)] ${isOpen ? 'translate-y-0' : 'translate-y-4'}`}>
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--acc)] to-transparent rounded-t-3xl" />
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-[var(--bdr)] border-none text-[var(--txt3)] cursor-pointer text-base flex items-center justify-center transition-all hover:bg-[var(--bdr2)] hover:text-[var(--txt)]"
        >
          ✕
        </button>
        
        <div className="text-[2rem] mb-2">👑</div>
        <div className="font-syne text-[1.5rem] font-extrabold mb-1.5">Tizimga kirish</div>
        <div className="text-[0.85rem] text-[var(--txt3)] mb-7">Login va parolingizni kiriting</div>
        
        <label className="block text-[0.78rem] font-semibold text-[var(--txt3)] mb-1.5 mt-4 tracking-wider uppercase">
          Login
        </label>
        <input 
          type="text"
          value={loginStr}
          onChange={(e) => setLoginStr(e.target.value)}
          placeholder="loginIngiz"
          className="w-full px-4 py-3 bg-[var(--bg3)] border border-[var(--bdr2)] rounded-xl text-[var(--txt)] text-[0.92rem] transition-colors focus:border-[var(--acc)] outline-none"
        />
        
        <label className="block text-[0.78rem] font-semibold text-[var(--txt3)] mb-1.5 mt-4 tracking-wider uppercase">
          Parol
        </label>
        <input 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="••••••••"
          className="w-full px-4 py-3 bg-[var(--bg3)] border border-[var(--bdr2)] rounded-xl text-[var(--txt)] text-[0.92rem] transition-colors focus:border-[var(--acc)] outline-none"
        />
        
        <button 
          onClick={handleLogin}
          disabled={loading}
          className="w-full py-3.5 mt-6 bg-gradient-to-br from-[var(--acc)] to-[var(--acc2)] text-white border-none rounded-xl text-[0.95rem] font-bold cursor-pointer transition-all shadow-[0_8px_24px_rgba(108,92,231,0.3)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(108,92,231,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Yuklanmoqda...' : 'Kirish →'}
        </button>
        
        {error && (
          <div className="text-[0.8rem] text-[#ff7675] mt-2.5 text-center p-2 bg-[rgba(255,118,117,0.1)] rounded-lg">
            {error}
          </div>
        )}
        
        <div className="mt-5 p-3.5 bg-[var(--bg3)] border border-[var(--bdr)] rounded-xl text-[0.8rem] text-[var(--txt3)] text-center leading-relaxed">
          Login yo'qmi? <a href="https://t.me/tr_power" target="_blank" className="text-[var(--acc3)] hover:underline">@tr_power</a> ga yozing.
        </div>
      </div>
    </div>
  );
}
