import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { db } from '../lib/firebase';
import { doc, setDoc, getDocs, collection, deleteDoc, getDoc } from 'firebase/firestore';
import type { User, Group, Session, Stuck, DB, QuizState } from '../lib/types';
import { encPass, decPass, today, nowHM, pad } from '../lib/utils';


interface AppContextType {
  isLoading: boolean;
  isLightMode: boolean;
  toggleTheme: () => void;
  currentUser: User | null;
  database: DB;
  login: (loginStr: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  timerDisplay: string;
  
  // Progress
  progress: Record<string, boolean>;
  isLessonDone: (course: string, idx: number) => boolean;
  markLessonDone: (course: string, idx: number) => void;
  getDoneCount: (course: string) => number;
  
  // Quiz
  quizStates: Record<string, QuizState>;
  setQuizState: (key: string, state: QuizState) => void;
  resetQuizState: (key: string) => void;
  
  // User management
  saveUser: (user: User) => Promise<void>;
  deleteUser: (id: number) => Promise<void>;
  
  // Group management
  saveGroup: (group: Group) => Promise<void>;
  deleteGroup: (id: number) => Promise<void>;
  
  // Notifications
  showNotif: (msg: string, type?: 'ok' | 'err') => void;
  
  // Stuck logging
  logStuck: (title: string, idx: number, course: string) => Promise<void>;
  
  // Refresh data
  refreshData: () => Promise<void>;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isLightMode, setIsLightMode] = useState(() => localStorage.getItem('theme') === 'light');
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [database, setDatabase] = useState<DB>({ groups: [], users: [], sessions: [], stucks: [] });
  const [progress, setProgress] = useState<Record<string, boolean>>({});
  const [quizStates, setQuizStates] = useState<Record<string, QuizState>>({});
  const [timerDisplay, setTimerDisplay] = useState('00:00:00');
  const [timerStart, setTimerStart] = useState<number | null>(null);
  const [notification, setNotification] = useState<{ msg: string; type: 'ok' | 'err'; show: boolean }>({ msg: '', type: 'ok', show: false });

  // Theme toggle
  const toggleTheme = useCallback(() => {
    setIsLightMode(prev => {
      const next = !prev;
      localStorage.setItem('theme', next ? 'light' : 'dark');
      if (next) {
        document.body.classList.add('light-mode');
      } else {
        document.body.classList.remove('light-mode');
      }
      return next;
    });
  }, []);

  // Initialize theme
  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-mode');
    }
  }, []);

  // Timer
  useEffect(() => {
    if (!timerStart) return;
    const interval = setInterval(() => {
      const d = Math.floor((Date.now() - timerStart) / 1000);
      const h = Math.floor(d / 3600);
      const m = Math.floor((d % 3600) / 60);
      const s = d % 60;
      setTimerDisplay(`${pad(h)}:${pad(m)}:${pad(s)}`);
    }, 1000);
    return () => clearInterval(interval);
  }, [timerStart]);

  // Load database
  const loadDatabase = async (): Promise<DB> => {
    const dbData: DB = { groups: [], users: [], sessions: [], stucks: [] };
    try {
      const usersSnap = await getDocs(collection(db, "users"));
      usersSnap.forEach(d => dbData.users.push(d.data() as User));
      
      const groupsSnap = await getDocs(collection(db, "groups"));
      groupsSnap.forEach(d => dbData.groups.push(d.data() as Group));
      
      const sessionsSnap = await getDocs(collection(db, "sessions"));
      sessionsSnap.forEach(d => dbData.sessions.push(d.data() as Session));
      
      try {
        const stucksSnap = await getDocs(collection(db, "stucks"));
        stucksSnap.forEach(d => dbData.stucks.push(d.data() as Stuck));
      } catch {}

      // Create king user if no users exist
      if (dbData.users.length === 0) {
        const kingUser: User = {
          id: 1,
          name: 'Showkan',
          login: 'showkan',
          pass: encPass('Urinboyev1'),
          role: 'king',
          gId: null,
          days: 9999,
          access: 'all',
          cat: '2024-01-01',
          ls: '-',
          activeToken: ''
        };
        await setDoc(doc(db, "users", "1"), kingUser);
        dbData.users.push(kingUser);
      }
    } catch (e) {
      console.error('Firebase error:', e);
    }
    return dbData;
  };

  // Load progress from Firebase
  const loadProgress = async (userId: number) => {
    try {
      const docRef = doc(db, "progress", String(userId));
      const snap = await getDoc(docRef);
      if (snap.exists()) {
        setProgress(snap.data().lessons || {});
      } else {
        setProgress({});
      }
    } catch (e) {
      console.error('Progress load error:', e);
      setProgress({});
    }
  };

  // Save progress to Firebase
  const saveProgress = async (userId: number, progressData: Record<string, boolean>) => {
    try {
      await setDoc(doc(db, "progress", String(userId)), {
        uid: userId,
        lessons: progressData,
        updatedAt: Date.now()
      });
    } catch (e) {
      console.error('Progress save error:', e);
    }
  };

  // Progress functions
  const isLessonDone = useCallback((course: string, idx: number) => {
    return !!progress[`${course}_${idx}`];
  }, [progress]);

  const markLessonDone = useCallback((course: string, idx: number) => {
    const key = `${course}_${idx}`;
    const newProgress = { ...progress, [key]: true };
    setProgress(newProgress);
    if (currentUser) {
      saveProgress(currentUser.id, newProgress);
    }
  }, [progress, currentUser]);

  const getDoneCount = useCallback((course: string) => {
    return Object.keys(progress).filter(k => k.startsWith(`${course}_`) && progress[k]).length;
  }, [progress]);

  // Quiz functions
  const setQuizState = useCallback((key: string, state: QuizState) => {
    setQuizStates(prev => ({ ...prev, [key]: state }));
  }, []);

  const resetQuizState = useCallback((key: string) => {
    setQuizStates(prev => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }, []);

  // Notification
  const showNotif = useCallback((msg: string, type: 'ok' | 'err' = 'ok') => {
    setNotification({ msg, type, show: true });
    setTimeout(() => setNotification(prev => ({ ...prev, show: false })), 3500);
  }, []);

  // Login
  const login = async (loginStr: string, password: string): Promise<{ success: boolean; error?: string }> => {
    const user = database.users.find(u => u.login === loginStr && decPass(u.pass) === password);
    if (!user) {
      return { success: false, error: 'Login yoki parol xato!' };
    }
    
    if (user.role !== 'king') {
      const daysLeft = (() => {
        const c = new Date(user.cat + 'T00:00:00');
        const e = new Date(c.getTime() + user.days * 86400000);
        const d = Math.ceil((e.getTime() - new Date().getTime()) / 86400000);
        return d > 0 ? d : 0;
      })();
      if (daysLeft === 0) {
        return { success: false, error: 'Muddat tugagan!' };
      }
    }

    const newToken = Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    user.activeToken = newToken;
    user.ls = today();
    
    await setDoc(doc(db, "users", String(user.id)), user);
    localStorage.setItem('myToken', newToken);
    localStorage.setItem('myUserId', String(user.id));
    
    await loadProgress(user.id);
    setCurrentUser(user);
    setTimerStart(Date.now());
    
    // Store session start
    sessionStorage.setItem('session', JSON.stringify({
      uid: user.id,
      gid: user.gId,
      date: today(),
      lt: nowHM(),
      ms: Date.now()
    }));
    
    return { success: true };
  };

  // Logout
  const logout = async () => {
    // Save session
    const sessionData = sessionStorage.getItem('session');
    if (sessionData && currentUser) {
      try {
        const s = JSON.parse(sessionData);
        const min = Math.max(1, Math.round((Date.now() - s.ms) / 60000));
        const newSession: Session = {
          id: Date.now(),
          uid: s.uid,
          gid: s.gid,
          date: s.date,
          lt: s.lt,
          ot: nowHM(),
          min
        };
        await setDoc(doc(db, "sessions", String(newSession.id)), newSession);
        
        // Update user's last seen
        currentUser.ls = s.date;
        await setDoc(doc(db, "users", String(currentUser.id)), currentUser);
      } catch (e) {
        console.error('Session save error:', e);
      }
    }
    
    sessionStorage.removeItem('session');
    localStorage.removeItem('myToken');
    localStorage.removeItem('myUserId');
    setCurrentUser(null);
    setTimerStart(null);
    setProgress({});
    setQuizStates({});
  };

  // User management
  const saveUser = async (user: User) => {
    await setDoc(doc(db, "users", String(user.id)), user);
    setDatabase(prev => {
      const existing = prev.users.findIndex(u => u.id === user.id);
      if (existing >= 0) {
        const users = [...prev.users];
        users[existing] = user;
        return { ...prev, users };
      }
      return { ...prev, users: [...prev.users, user] };
    });
  };

  const deleteUser = async (id: number) => {
    await deleteDoc(doc(db, "users", String(id)));
    setDatabase(prev => ({
      ...prev,
      users: prev.users.filter(u => u.id !== id),
      sessions: prev.sessions.filter(s => s.uid !== id)
    }));
  };

  // Group management
  const saveGroup = async (group: Group) => {
    await setDoc(doc(db, "groups", String(group.id)), group);
    setDatabase(prev => {
      const existing = prev.groups.findIndex(g => g.id === group.id);
      if (existing >= 0) {
        const groups = [...prev.groups];
        groups[existing] = group;
        return { ...prev, groups };
      }
      return { ...prev, groups: [...prev.groups, group] };
    });
  };

  const deleteGroup = async (id: number) => {
    await deleteDoc(doc(db, "groups", String(id)));
    setDatabase(prev => ({
      ...prev,
      groups: prev.groups.filter(g => g.id !== id)
    }));
  };

  // Log stuck
  const logStuck = async (title: string, idx: number, course: string) => {
    if (!currentUser) return;
    try {
      const stuck: Stuck = {
        uid: currentUser.id,
        uName: currentUser.name,
        course,
        idx,
        title,
        date: today(),
        ts: Date.now()
      };
      await setDoc(doc(db, "stucks", String(stuck.ts)), stuck);
      setDatabase(prev => ({ ...prev, stucks: [...prev.stucks, stuck] }));
    } catch (e) {
      console.error('Stuck log error:', e);
    }
  };

  // Refresh data
  const refreshData = async () => {
    const data = await loadDatabase();
    setDatabase(data);
  };

  // Initialize app
  useEffect(() => {
    const init = async () => {
      const data = await loadDatabase();
      setDatabase(data);

      // Check for saved session
      const savedToken = localStorage.getItem('myToken');
      const savedUserId = localStorage.getItem('myUserId');

      if (savedToken && savedUserId) {
        const uid = Number(savedUserId);
        const user = data.users.find(u => u.id === uid && u.activeToken === savedToken);
        
        if (user) {
          const daysLeft = user.role === 'king' ? 9999 : (() => {
            const c = new Date(user.cat + 'T00:00:00');
            const e = new Date(c.getTime() + user.days * 86400000);
            const d = Math.ceil((e.getTime() - new Date().getTime()) / 86400000);
            return d > 0 ? d : 0;
          })();
          
          if (daysLeft > 0) {
            await loadProgress(user.id);
            setCurrentUser(user);
            setTimerStart(Date.now());
            
            sessionStorage.setItem('session', JSON.stringify({
              uid: user.id,
              gid: user.gId,
              date: today(),
              lt: nowHM(),
              ms: Date.now()
            }));
          } else {
            localStorage.removeItem('myToken');
            localStorage.removeItem('myUserId');
          }
        } else {
          localStorage.removeItem('myToken');
          localStorage.removeItem('myUserId');
        }
      }

      setIsLoading(false);
    };

    init();
  }, []);

  return (
    <AppContext.Provider value={{
      isLoading,
      isLightMode,
      toggleTheme,
      currentUser,
      database,
      login,
      logout,
      timerDisplay,
      progress,
      isLessonDone,
      markLessonDone,
      getDoneCount,
      quizStates,
      setQuizState,
      resetQuizState,
      saveUser,
      deleteUser,
      saveGroup,
      deleteGroup,
      showNotif,
      logStuck,
      refreshData
    }}>
      {children}
      
      {/* Notification */}
      <div className={`notif ${notification.type} ${notification.show ? 'show' : ''}`}>
        {notification.type === 'ok' ? '✅' : '❌'} {notification.msg}
      </div>
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}
