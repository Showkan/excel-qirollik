import { useApp } from '../../context/AppContext';
import { formatTime, today, formatDateISO, hasAccess } from '../../lib/utils';
import { foundationLessons, proLessons } from '../../lib/lessonsData';

interface SoldierDashboardProps {
  onNavigateToLesson: (course: string, idx: number) => void;
}

export default function SoldierDashboard({ onNavigateToLesson }: SoldierDashboardProps) {
  const { currentUser, database, getDoneCount, isLessonDone } = useApp();

  if (!currentUser) return null;

  const fdone = getDoneCount('f');
  const pdone = getDoneCount('p');
  const ftotal = foundationLessons.length;
  const ptotal = proLessons.length;
  const totalDone = fdone + pdone;

  // Calculate streak
  const sessions = database.sessions.filter(s => s.uid === currentUser.id);
  const dates = [...new Set(sessions.map(s => s.date))].sort();
  const todayStr = today();
  
  let streak = 0;
  let checkDate = new Date(todayStr);
  for (let i = 0; i < 365; i++) {
    const d = formatDateISO(checkDate);
    if (dates.includes(d)) {
      streak++;
      checkDate.setDate(checkDate.getDate() - 1);
    } else break;
  }

  // Get week days for streak display
  const streakDays = [];
  const dayShort = ['Du', 'Se', 'Ch', 'Pa', 'Ju', 'Sh', 'Ya'];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dateStr = formatDateISO(d);
    streakDays.push({
      date: dateStr,
      active: dates.includes(dateStr),
      isToday: dateStr === todayStr,
      label: dayShort[d.getDay() === 0 ? 6 : d.getDay() - 1]
    });
  }

  // Weekly time
  const weekDays = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dateStr = formatDateISO(d);
    const dayMin = sessions.filter(s => s.date === dateStr).reduce((sum, s) => sum + s.min, 0);
    weekDays.push({ 
      label: dayShort[d.getDay() === 0 ? 6 : d.getDay() - 1], 
      min: dayMin, 
      isToday: dateStr === todayStr 
    });
  }
  const maxMin = Math.max(...weekDays.map(d => d.min), 1);

  // Time stats
  const todayMin = sessions.filter(s => s.date === todayStr).reduce((a, b) => a + b.min, 0);
  const weekMin = weekDays.reduce((a, b) => a + b.min, 0);
  const totalMin = sessions.reduce((a, b) => a + b.min, 0);

  // Level
  const getLevel = () => {
    if (totalDone === 0) return { icon: '📗', name: 'Excel Beginner', next: 5, desc: 'Sayohat boshlanmoqda' };
    if (totalDone < 5) return { icon: '📘', name: 'Excel Student', next: 10, desc: 'Yaxshi boshladingiz!' };
    if (totalDone < 10) return { icon: '📙', name: 'Excel Knight ⚔️', next: 20, desc: 'Formulalar sizniki!' };
    return { icon: '👑', name: 'Excel Qirol', next: totalDone, desc: 'Eng yuqori daraja!' };
  };
  const level = getLevel();
  const levelProg = Math.min(100, Math.round((totalDone / level.next) * 100));

  // Find next lesson
  let nextCourse: string | null = null;
  let nextIdx = -1;
  let nextData = null;

  for (let i = 0; i < foundationLessons.length; i++) {
    if (!isLessonDone('f', i)) {
      nextCourse = 'f';
      nextIdx = i;
      nextData = foundationLessons[i];
      break;
    }
  }

  if (!nextCourse && hasAccess(currentUser, 'pro')) {
    for (let i = 0; i < proLessons.length; i++) {
      if (!isLessonDone('p', i)) {
        nextCourse = 'p';
        nextIdx = i;
        nextData = proLessons[i];
        break;
      }
    }
  }

  return (
    <div className="p-7 overflow-y-auto bg-[var(--bg)]">
      <div className="flex justify-between items-start gap-4 flex-wrap mb-6">
        <div>
          <div className="text-[1.8rem] font-extrabold font-syne">Salom, {currentUser.name}! 👑</div>
          <div className="text-[var(--txt2)] text-[0.9rem] mt-1">Bugun ham o'rganamizmi?</div>
        </div>
      </div>

      {/* Next Lesson Card */}
      {nextData ? (
        <div 
          onClick={() => onNavigateToLesson(nextCourse!, nextIdx)}
          className="bg-gradient-to-br from-[rgba(108,92,231,0.12)] to-[rgba(116,185,255,0.08)] border border-[rgba(108,92,231,0.25)] rounded-2xl p-6 flex items-center justify-between gap-4 cursor-pointer transition-all hover:-translate-y-0.5 hover:border-[var(--acc)] mb-6"
        >
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-[rgba(108,92,231,0.15)] text-[var(--acc3)] text-[0.72rem] font-bold mb-2">
              {nextCourse === 'f' ? 'Foundation' : 'PRO'} • {nextIdx + 1}-dars
            </div>
            <div className="font-syne text-[1.2rem] font-extrabold mb-1">{nextData.t}</div>
            <div className="text-[0.82rem] text-[var(--txt2)]">{nextData.d || 'Dars'} • Davom eting!</div>
          </div>
          <div className="w-11 h-11 rounded-xl bg-[var(--acc)] flex items-center justify-center text-[1.2rem] shadow-[0_8px_20px_rgba(108,92,231,0.35)]">
            →
          </div>
        </div>
      ) : (
        <div className="bg-gradient-to-br from-[rgba(108,92,231,0.12)] to-[rgba(116,185,255,0.08)] border border-[rgba(108,92,231,0.25)] rounded-2xl p-6 flex items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-[rgba(108,92,231,0.15)] text-[var(--acc3)] text-[0.72rem] font-bold mb-2">
              🎉 Tabriklaymiz!
            </div>
            <div className="font-syne text-[1.2rem] font-extrabold mb-1">Barcha darslar tugatildi!</div>
            <div className="text-[0.82rem] text-[var(--txt2)]">Siz Excel Qirolisiz 👑</div>
          </div>
          <div className="w-11 h-11 rounded-xl bg-[var(--acc)] flex items-center justify-center text-[1.2rem]">
            👑
          </div>
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Progress Card */}
        <div className="bg-[var(--bg2)] border border-[var(--bdr)] rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--acc)] to-transparent opacity-50" />
          <h4 className="text-[0.75rem] text-[var(--txt3)] uppercase tracking-wider font-bold mb-3">⚡ Umumiy progress</h4>
          
          {hasAccess(currentUser, 'foundation') && (
            <div className="mt-2">
              <div className="flex justify-between text-[0.78rem] text-[var(--txt2)] mb-1.5">
                <span>Foundation</span>
                <span>{fdone}/{ftotal}</span>
              </div>
              <div className="h-2 bg-[var(--bdr2)] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[var(--green)] to-[var(--green2)] rounded-full transition-all duration-500" style={{ width: `${Math.round(fdone / ftotal * 100)}%` }} />
              </div>
            </div>
          )}
          
          {hasAccess(currentUser, 'pro') && (
            <div className="mt-3">
              <div className="flex justify-between text-[0.78rem] text-[var(--txt2)] mb-1.5">
                <span>PRO</span>
                <span>{pdone}/{ptotal}</span>
              </div>
              <div className="h-2 bg-[var(--bdr2)] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[var(--acc)] to-[var(--acc3)] rounded-full transition-all duration-500" style={{ width: `${Math.round(pdone / ptotal * 100)}%` }} />
              </div>
            </div>
          )}

          {/* Level */}
          <div className="flex items-center gap-3.5 p-4 bg-[var(--bg3)] rounded-xl mt-3">
            <div className="text-[2rem]">{level.icon}</div>
            <div className="flex-1">
              <div className="font-syne text-base font-extrabold">{level.name}</div>
              <div className="text-[0.75rem] text-[var(--txt3)] mt-0.5">{level.desc}</div>
              <div className="h-1.5 bg-[var(--bdr2)] rounded-full overflow-hidden mt-1.5">
                <div className="h-full rounded-full bg-gradient-to-r from-[var(--gold)] to-[#f0a500]" style={{ width: `${levelProg}%` }} />
              </div>
            </div>
          </div>
        </div>

        {/* Streak Card */}
        <div className="bg-[var(--bg2)] border border-[var(--bdr)] rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--acc)] to-transparent opacity-50" />
          <h4 className="text-[0.75rem] text-[var(--txt3)] uppercase tracking-wider font-bold mb-3">🔥 Streak</h4>
          
          <div className="flex items-center gap-2.5">
            <div className="font-syne text-[2.5rem] font-extrabold text-[var(--gold)]">{streak}</div>
            <div>
              <p className="font-bold text-[var(--txt)]">Ketma-ket kun</p>
              <span className="text-[0.78rem] text-[var(--txt3)]">
                {streak >= 7 ? '🏆 Haftalik qirol!' : streak >= 3 ? '💪 Zo\'r ketmoqda!' : 'Har kun o\'qing!'}
              </span>
            </div>
          </div>

          <div className="flex gap-1.5 mt-3">
            {streakDays.map((day, i) => (
              <div 
                key={i} 
                className={`w-8 h-8 rounded-lg flex flex-col items-center justify-center text-[0.7rem] font-bold border ${
                  day.isToday 
                    ? 'bg-[rgba(108,92,231,0.15)] border-[var(--acc)] text-[var(--acc3)]' 
                    : day.active 
                      ? 'bg-[rgba(249,202,36,0.15)] border-[rgba(249,202,36,0.3)] text-[var(--gold)]' 
                      : 'border-[var(--bdr)] text-[var(--txt3)]'
                }`}
              >
                {day.active ? '🔥' : '○'}
                <span className="text-[0.55rem] opacity-70">{day.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Time Stats */}
        <div className="bg-[var(--bg2)] border border-[var(--bdr)] rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--acc)] to-transparent opacity-50" />
          <h4 className="text-[0.75rem] text-[var(--txt3)] uppercase tracking-wider font-bold mb-3">⏱️ Vaqt statistikasi</h4>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center py-2 border-b border-[var(--bdr)]">
              <span className="text-[0.82rem] text-[var(--txt2)]">Bugun</span>
              <span className="font-mono text-[0.88rem] font-bold text-[var(--green2)]">{formatTime(todayMin)}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-[var(--bdr)]">
              <span className="text-[0.82rem] text-[var(--txt2)]">Bu hafta</span>
              <span className="font-mono text-[0.88rem] font-bold text-[var(--txt)]">{formatTime(weekMin)}</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-[0.82rem] text-[var(--txt2)]">Jami</span>
              <span className="font-mono text-[0.88rem] font-bold text-[var(--gold)]">{formatTime(totalMin)}</span>
            </div>
          </div>
        </div>

        {/* Weekly Activity */}
        <div className="bg-[var(--bg2)] border border-[var(--bdr)] rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--acc)] to-transparent opacity-50" />
          <h4 className="text-[0.75rem] text-[var(--txt3)] uppercase tracking-wider font-bold mb-3">📊 Haftalik faollik</h4>
          
          <div className="grid grid-cols-7 gap-1.5 mt-3">
            {weekDays.map((d, i) => {
              const h = d.min > 0 ? Math.max(8, Math.round((d.min / maxMin) * 48)) : 4;
              return (
                <div key={i} className="text-center">
                  <div className="h-12 flex items-end justify-center mb-1">
                    <div 
                      className={`w-5 rounded min-h-1 transition-all duration-400 ${
                        d.isToday 
                          ? 'bg-gradient-to-t from-[#f0a500] to-[var(--gold)]' 
                          : d.min > 0 
                            ? 'bg-gradient-to-t from-[var(--acc)] to-[var(--acc3)]' 
                            : 'bg-[var(--bdr2)]'
                      }`}
                      style={{ height: `${h}px` }}
                    />
                  </div>
                  <div className="text-[0.62rem] text-[var(--txt3)] font-semibold">{d.label}</div>
                  <div className="text-[0.6rem] text-[var(--txt3)]">
                    {d.min > 0 ? (d.min >= 60 ? Math.floor(d.min / 60) + 's' : d.min + 'd') : ''}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
