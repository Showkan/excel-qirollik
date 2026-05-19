import { useApp } from '../../context/AppContext';
import { formatTime, formatDate, visibleUsers, visibleGroups, userById, groupById, isActiveToday, today } from '../../lib/utils';

export default function AdminDashboard() {
  const { currentUser, database } = useApp();

  if (!currentUser) return null;

  const users = visibleUsers(database, currentUser);
  const soldiers = users.filter(u => u.role === 'soldier');
  const groups = visibleGroups(database, currentUser);

  let activeToday = 0;
  let totalTodayMin = 0;

  for (const s of soldiers) {
    if (isActiveToday(s)) activeToday++;
  }

  const todaySessions = database.sessions.filter(s => s.date === today());
  for (const s of todaySessions) {
    totalTodayMin += s.min;
  }

  const recentSessions = database.sessions
    .slice()
    .sort((a, b) => (b.date > a.date ? 1 : b.date < a.date ? -1 : b.id - a.id))
    .slice(0, 8);

  return (
    <div className="p-7 overflow-y-auto bg-[var(--bg)]">
      <div className="mb-6">
        <div className="text-[1.8rem] font-extrabold font-syne">Dashboard</div>
        <div className="text-[var(--txt2)] text-[0.9rem] mt-1">Umumiy holat</div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
        <div className="bg-[var(--bg2)] border border-[var(--bdr)] rounded-xl p-5">
          <h4 className="text-[0.78rem] text-[var(--txt3)] font-semibold mb-2 uppercase tracking-wider">O'quvchilar</h4>
          <div className="font-syne text-[1.8rem] font-extrabold">{soldiers.length}</div>
        </div>
        <div className="bg-[var(--bg2)] border border-[var(--bdr)] rounded-xl p-5">
          <h4 className="text-[0.78rem] text-[var(--txt3)] font-semibold mb-2 uppercase tracking-wider">Guruhlar</h4>
          <div className="font-syne text-[1.8rem] font-extrabold">{groups.length}</div>
        </div>
        <div className="bg-[var(--bg2)] border border-[var(--bdr)] rounded-xl p-5">
          <h4 className="text-[0.78rem] text-[var(--txt3)] font-semibold mb-2 uppercase tracking-wider">Bugun faol</h4>
          <div className="font-syne text-[1.8rem] font-extrabold">{activeToday}</div>
        </div>
        <div className="bg-[var(--bg2)] border border-[var(--bdr)] rounded-xl p-5">
          <h4 className="text-[0.78rem] text-[var(--txt3)] font-semibold mb-2 uppercase tracking-wider">Bugungi vaqt</h4>
          <div className="font-syne text-[1.8rem] font-extrabold">{formatTime(totalTodayMin)}</div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-[var(--bg2)] border border-[var(--bdr)] rounded-xl">
        <div className="p-5">
          <div className="text-[1.05rem] font-bold mb-3.5 font-syne">Oxirgi faolliklar</div>
          
          {recentSessions.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-3 text-[0.74rem] text-[var(--txt3)] uppercase tracking-wider font-bold bg-[var(--bg3)] border-b border-[var(--bdr)]">Ism</th>
                    <th className="text-left p-3 text-[0.74rem] text-[var(--txt3)] uppercase tracking-wider font-bold bg-[var(--bg3)] border-b border-[var(--bdr)]">Guruh</th>
                    <th className="text-left p-3 text-[0.74rem] text-[var(--txt3)] uppercase tracking-wider font-bold bg-[var(--bg3)] border-b border-[var(--bdr)]">Sana</th>
                    <th className="text-left p-3 text-[0.74rem] text-[var(--txt3)] uppercase tracking-wider font-bold bg-[var(--bg3)] border-b border-[var(--bdr)]">Vaqt</th>
                    <th className="text-left p-3 text-[0.74rem] text-[var(--txt3)] uppercase tracking-wider font-bold bg-[var(--bg3)] border-b border-[var(--bdr)]">Davomiylik</th>
                  </tr>
                </thead>
                <tbody>
                  {recentSessions.map((s, i) => {
                    const user = userById(database, s.uid);
                    const group = groupById(database, s.gid);
                    return (
                      <tr key={i} className="hover:bg-[var(--bg3)]">
                        <td className="p-3 border-b border-[var(--bdr)] text-[0.88rem]">
                          <b>{user?.name || '-'}</b>
                        </td>
                        <td className="p-3 border-b border-[var(--bdr)] text-[0.88rem]">{group?.name || '-'}</td>
                        <td className="p-3 border-b border-[var(--bdr)] text-[0.88rem]">{formatDate(s.date)}</td>
                        <td className="p-3 border-b border-[var(--bdr)] text-[0.88rem]">{s.lt} → {s.ot}</td>
                        <td className="p-3 border-b border-[var(--bdr)] text-[0.88rem]">{formatTime(s.min)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-10 text-center text-[var(--txt3)] font-medium">Hali faollik yo'q.</div>
          )}
        </div>
      </div>
    </div>
  );
}
