import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import AppHeader from './AppHeader';
import Sidebar from './Sidebar';
import SoldierDashboard from './SoldierDashboard';
import AdminDashboard from './AdminDashboard';
import LessonsView from './LessonsView';
import ProfileView from './ProfileView';
import AIChat from './AIChat';

export default function DashboardApp() {
  const { currentUser } = useApp();
  const [currentTab, setCurrentTab] = useState('dashboard');
  const [lessonNav, setLessonNav] = useState<{ course: string | null; idx: number }>({ course: null, idx: -1 });

  if (!currentUser) return null;

  const isSoldier = currentUser.role === 'soldier';

  const handleNavigateToLesson = (course: string, idx: number) => {
    setLessonNav({ course, idx });
    setCurrentTab('lessons');
  };

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
    if (tab !== 'lessons') {
      setLessonNav({ course: null, idx: -1 });
    }
  };

  const renderContent = () => {
    switch (currentTab) {
      case 'dashboard':
        return isSoldier ? (
          <SoldierDashboard onNavigateToLesson={handleNavigateToLesson} />
        ) : (
          <AdminDashboard />
        );
      case 'lessons':
        return <LessonsView initialCourse={lessonNav.course} initialLesson={lessonNav.idx} />;
      case 'profile':
        return <ProfileView />;
      case 'groups':
        return (
          <div className="p-7">
            <div className="text-[1.8rem] font-extrabold font-syne mb-4">Guruhlar</div>
            <div className="bg-[var(--bg2)] border border-[var(--bdr)] rounded-xl p-10 text-center text-[var(--txt3)]">
              Guruhlar boshqaruvi (demo versiya)
            </div>
          </div>
        );
      case 'students':
        return (
          <div className="p-7">
            <div className="text-[1.8rem] font-extrabold font-syne mb-4">O'quvchilar</div>
            <div className="bg-[var(--bg2)] border border-[var(--bdr)] rounded-xl p-10 text-center text-[var(--txt3)]">
              O'quvchilar boshqaruvi (demo versiya)
            </div>
          </div>
        );
      case 'stats':
        return (
          <div className="p-7">
            <div className="text-[1.8rem] font-extrabold font-syne mb-4">Statistika</div>
            <div className="bg-[var(--bg2)] border border-[var(--bdr)] rounded-xl p-10 text-center text-[var(--txt3)]">
              Statistika (demo versiya)
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <AppHeader />
      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] min-h-[calc(100vh-60px)]">
        <Sidebar currentTab={currentTab} onTabChange={handleTabChange} />
        <main className="overflow-y-auto">
          {renderContent()}
        </main>
      </div>
      <AIChat />
    </div>
  );
}
