import { useApp } from '../../context/AppContext';
import { roleName, formatDate, formatTime, daysLeft, totalMinutes, sessionFilter, groupById } from '../../lib/utils';

export default function ProfileView() {
  const { currentUser, database } = useApp();

  if (!currentUser) return null;

  const group = groupById(database, currentUser.gId);
  const dl = daysLeft(currentUser);
  const access = currentUser.access === 'all' ? 'Hammasi' : currentUser.access === 'foundation' ? 'Oddiy' : currentUser.access === 'pro' ? 'Pro' : 'Yopiq';
  
  const mySessions = sessionFilter(database.sessions, currentUser.id)
    .sort((a, b) => (b.date > a.date ? 1 : -1))
    .slice(0, 10);
  
  const totalMin = totalMinutes(database.sessions, currentUser.id);
  const sessionTotalMin = mySessions.reduce((a, b) => a + b.min, 0);

  return (
    <div className="p-7 overflow-y-auto bg-[var(--bg)]">
      <div className="mb-6">
        <div className="text-[1.8rem] font-extrabold font-syne">Profil</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Profile Info */}
        <div className="bg-[var(--bg2)] border border-[var(--bdr)] rounded-xl p-5">
          <div className="text-[1.05rem] font-bold mb-3.5 font-syne">Ma'lumot</div>
          <div className="leading-[2.2] text-[var(--txt2)]">
            <p><b className="text-[var(--txt)]">Ism:</b> {currentUser.name}</p>
            <p><b className="text-[var(--txt)]">Login:</b> {currentUser.login}</p>
            <p><b className="text-[var(--txt)]">Rol:</b> {roleName(currentUser.role)}</p>
            <p><b className="text-[var(--txt)]">Guruh:</b> {group?.name || '-'}</p>
            <p><b className="text-[var(--txt)]">Kurs:</b> {access}</p>
            <p><b className="text-[var(--txt)]">Muddat:</b> {dl === 9999 ? 'Cheksiz' : dl + ' kun'}</p>
            <p><b className="text-[var(--txt)]">Jami vaqt:</b> {formatTime(totalMin)}</p>
          </div>
        </div>

        {/* Recent Sessions */}
        <div className="bg-[var(--bg2)] border border-[var(--bdr)] rounded-xl p-5">
          <div className="text-[1.05rem] font-bold mb-3.5 font-syne">Oxirgi sessiyalar</div>
          
          {mySessions.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-3 text-[0.74rem] text-[var(--txt3)] uppercase tracking-wider font-bold bg-[var(--bg3)] border-b border-[var(--bdr)]">Sana</th>
                    <th className="text-left p-3 text-[0.74rem] text-[var(--txt3)] uppercase tracking-wider font-bold bg-[var(--bg3)] border-b border-[var(--bdr)]">Kirdi</th>
                    <th className="text-left p-3 text-[0.74rem] text-[var(--txt3)] uppercase tracking-wider font-bold bg-[var(--bg3)] border-b border-[var(--bdr)]">Chiqdi</th>
                    <th className="text-left p-3 text-[0.74rem] text-[var(--txt3)] uppercase tracking-wider font-bold bg-[var(--bg3)] border-b border-[var(--bdr)]">Davomiylik</th>
                  </tr>
                </thead>
                <tbody>
                  {mySessions.map((s, i) => (
                    <tr key={i} className="hover:bg-[var(--bg3)]">
                      <td className="p-3 border-b border-[var(--bdr)] text-[0.88rem]">{formatDate(s.date)}</td>
                      <td className="p-3 border-b border-[var(--bdr)] text-[0.88rem]">{s.lt}</td>
                      <td className="p-3 border-b border-[var(--bdr)] text-[0.88rem]">{s.ot}</td>
                      <td className="p-3 border-b border-[var(--bdr)] text-[0.88rem]">{formatTime(s.min)}</td>
                    </tr>
                  ))}
                  <tr className="bg-[rgba(0,184,148,0.1)]">
                    <td colSpan={3} className="p-3 text-right font-extrabold text-[var(--green2)]">JAMI:</td>
                    <td className="p-3 font-extrabold text-[var(--green2)]">{formatTime(sessionTotalMin)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-10 text-center text-[var(--txt3)] font-medium">Sessiya yo'q</div>
          )}
        </div>
      </div>
    </div>
  );
}
