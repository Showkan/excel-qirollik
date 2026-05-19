import { useApp } from '../../context/AppContext';

interface SidebarProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

export default function Sidebar({ currentTab, onTabChange }: SidebarProps) {
  const { currentUser } = useApp();

  if (!currentUser) return null;

  const isSoldier = currentUser.role === 'soldier';

  const tabs = isSoldier
    ? [
        { id: 'dashboard', icon: '🏠', label: 'Dashboard' },
        { id: 'lessons', icon: '📖', label: 'Darslar' },
        { id: 'profile', icon: '👤', label: 'Profil' },
      ]
    : [
        { id: 'dashboard', icon: '🏠', label: 'Dashboard' },
        { id: 'lessons', icon: '📖', label: 'Darslar' },
        { id: 'groups', icon: '📂', label: 'Guruhlar' },
        { id: 'students', icon: '👥', label: "O'quvchilar" },
        { id: 'stats', icon: '📊', label: 'Statistika' },
        { id: 'profile', icon: '👤', label: 'Profil' },
      ];

  return (
    <aside className="bg-[var(--bg2)] border-r border-[var(--bdr)] p-4 overflow-y-auto md:block aside-scroll">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`w-full text-left border-none bg-transparent px-3.5 py-3 rounded-xl font-semibold cursor-pointer flex items-center gap-2.5 mb-1 transition-all text-[0.9rem] ${
            currentTab === tab.id
              ? 'bg-[var(--glow)] text-[var(--acc3)]'
              : 'text-[var(--txt2)] hover:bg-[var(--bg3)] hover:text-[var(--txt)]'
          }`}
        >
          {tab.icon} {tab.label}
        </button>
      ))}
    </aside>
  );
}
