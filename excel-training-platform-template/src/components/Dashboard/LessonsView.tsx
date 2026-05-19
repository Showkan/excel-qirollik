import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { hasAccess, cols } from '../../lib/utils';
import { foundationLessons, proLessons, quizData } from '../../lib/lessonsData';
import confetti from 'canvas-confetti';

interface LessonsViewProps {
  initialCourse?: string | null;
  initialLesson?: number;
}

export default function LessonsView({ initialCourse = null, initialLesson = -1 }: LessonsViewProps) {
  const { currentUser, getDoneCount, isLessonDone, markLessonDone, quizStates, setQuizState, resetQuizState, showNotif, logStuck } = useApp();
  const [currentCourse, setCurrentCourse] = useState<string | null>(initialCourse);
  const [currentLesson, setCurrentLesson] = useState(initialLesson);
  const [showStuckModal, setShowStuckModal] = useState(false);

  if (!currentUser) return null;

  const hasFAccess = hasAccess(currentUser, 'foundation');
  const hasPAccess = hasAccess(currentUser, 'pro');

  // Course Selection
  if (!currentCourse) {
    const fdone = getDoneCount('f');
    const pdone = getDoneCount('p');

    return (
      <div className="p-7 overflow-y-auto bg-[var(--bg)]">
        <div className="mb-6">
          <div className="text-[1.8rem] font-extrabold font-syne">Darslar</div>
          <div className="text-[var(--txt2)] text-[0.9rem] mt-1">Kursni tanlang</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Foundation */}
          <div 
            onClick={() => hasFAccess && setCurrentCourse('f')}
            className={`bg-[var(--bg2)] border border-[var(--bdr2)] rounded-2xl p-7 cursor-pointer transition-all relative overflow-hidden ${hasFAccess ? 'hover:border-[var(--acc)] hover:-translate-y-0.5' : 'opacity-55 cursor-not-allowed'}`}
          >
            {!hasFAccess && (
              <div className="absolute top-3.5 right-3.5 text-[0.78rem] font-bold text-[#ff7675] bg-[rgba(225,112,85,0.15)] px-3 py-1.5 rounded-lg border border-[rgba(225,112,85,0.25)]">
                🔒 Yopiq
              </div>
            )}
            <div className="inline-block px-3.5 py-1.5 rounded-full text-[0.78rem] font-bold mb-3.5 bg-[rgba(0,184,148,0.12)] text-[var(--green2)]">
              Boshlang'ich
            </div>
            <h3 className="text-[1.4rem] font-extrabold mb-2.5 font-syne">Foundation + Intermediate</h3>
            <p className="text-[var(--txt2)] mb-3.5">Interfeys, formulalar, jadvallar va dashboard.</p>
            <div className="text-[var(--txt2)] text-[0.88rem] font-semibold">
              📅 4 hafta • 📖 8 dars • ✅ {fdone}/{foundationLessons.length} tugatildi
            </div>
          </div>

          {/* PRO */}
          <div 
            onClick={() => hasPAccess && setCurrentCourse('p')}
            className={`bg-[var(--bg2)] border border-[var(--bdr2)] rounded-2xl p-7 cursor-pointer transition-all relative overflow-hidden ${hasPAccess ? 'hover:border-[var(--acc)] hover:-translate-y-0.5' : 'opacity-55 cursor-not-allowed'}`}
          >
            {!hasPAccess && (
              <div className="absolute top-3.5 right-3.5 text-[0.78rem] font-bold text-[#ff7675] bg-[rgba(225,112,85,0.15)] px-3 py-1.5 rounded-lg border border-[rgba(225,112,85,0.25)]">
                🔒 Yopiq
              </div>
            )}
            <div className="inline-block px-3.5 py-1.5 rounded-full text-[0.78rem] font-bold mb-3.5 bg-[rgba(108,92,231,0.12)] text-[var(--acc3)]">
              Professional
            </div>
            <h3 className="text-[1.4rem] font-extrabold mb-2.5 font-syne">PRO + Automation</h3>
            <p className="text-[var(--txt2)] mb-3.5">Murakkab formulalar, VBA va avtomatlashtirish.</p>
            <div className="text-[var(--txt2)] text-[0.88rem] font-semibold">
              📅 6 hafta • 📖 12 dars • ✅ {pdone}/{proLessons.length} tugatildi
            </div>
          </div>
        </div>
      </div>
    );
  }

  const data = currentCourse === 'p' ? proLessons : foundationLessons;
  const courseName = currentCourse === 'p' ? 'PRO + Automation' : 'Foundation + Intermediate';
  const done = getDoneCount(currentCourse);

  // Lesson List
  if (currentLesson < 0) {
    return (
      <div className="p-7 overflow-y-auto bg-[var(--bg)]">
        <div className="bg-[var(--bg2)] rounded-xl overflow-hidden border border-[var(--bdr)]">
          {/* Formula bar */}
          <div className="flex items-center bg-[var(--bg2)] border-b border-[var(--bdr)]">
            <div className="bg-[var(--glow)] px-3.5 py-2.5 text-[var(--acc3)] font-bold font-mono text-[12px] min-w-[60px] text-center border-r border-[var(--bdr)]">A1</div>
            <div className="px-3 py-2.5 text-[var(--acc3)] italic font-bold border-r border-[var(--bdr)] text-[13px]">fx</div>
            <div className="px-3.5 py-2.5 text-[var(--txt2)] text-[13px] flex-1">
              Kurslar › <b className="text-[var(--txt)]">{courseName}</b> › {done}/{data.length} tugatildi
            </div>
          </div>

          {/* Column headers */}
          <div className="flex bg-[var(--bg3)] border-b border-[var(--bdr)] pl-9">
            {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map(col => (
              <span key={col} className="flex-1 text-[11px] text-[var(--txt3)] text-center py-2 border-l border-[var(--bdr)] font-semibold">{col}</span>
            ))}
          </div>

          <div className="flex">
            {/* Row numbers */}
            <div className="bg-[var(--bg3)] border-r border-[var(--bdr)] w-9 flex-shrink-0">
              {Array.from({ length: 20 }, (_, i) => (
                <span key={i} className="h-9 flex items-center justify-center text-[11px] text-[var(--txt3)] border-b border-[var(--bdr)] font-semibold">{i + 1}</span>
              ))}
            </div>

            {/* Lessons grid */}
            <div className="flex-1 p-6 min-w-0">
              <div className="mb-3 flex items-center gap-3 flex-wrap">
                <button 
                  onClick={() => setCurrentCourse(null)}
                  className="bg-[var(--bg3)] text-[var(--txt)] border border-[var(--bdr)] px-3 py-2 rounded-lg text-[0.78rem] font-semibold cursor-pointer hover:text-[var(--txt)] hover:border-[var(--bdr2)]"
                >
                  ← Kurslar
                </button>
                <div className="flex-1">
                  <div className="flex justify-between text-[0.78rem] text-[var(--txt2)] mb-1.5">
                    <span>Progress</span>
                    <span className="text-[var(--acc3)]">{done}/{data.length}</span>
                  </div>
                  <div className="h-2 bg-[var(--bdr2)] rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${currentCourse === 'f' ? 'bg-gradient-to-r from-[var(--green)] to-[var(--green2)]' : 'bg-gradient-to-r from-[var(--acc)] to-[var(--acc3)]'}`}
                      style={{ width: `${Math.round(done / data.length * 100)}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {data.map((l, i) => {
                  const isDone = isLessonDone(currentCourse, i);
                  const isUnlocked = i === 0 || isLessonDone(currentCourse, i - 1) || currentUser.role !== 'soldier';

                  return (
                    <div
                      key={i}
                      onClick={() => {
                        if (!isUnlocked) {
                          showNotif("Oldingi darsni tugatishingiz kerak!", "err");
                          return;
                        }
                        setCurrentLesson(i);
                      }}
                      className={`bg-[var(--bg2)] border rounded-xl p-4 cursor-pointer transition-all min-h-[95px] flex flex-col relative ${
                        isDone 
                          ? 'border-[rgba(0,184,148,0.3)] bg-[rgba(0,184,148,0.05)]' 
                          : isUnlocked 
                            ? 'border-[var(--bdr)] hover:border-[var(--acc)] hover:-translate-y-0.5 hover:bg-[var(--bg3)]' 
                            : 'border-[var(--bdr)] opacity-50 cursor-not-allowed'
                      }`}
                    >
                      {!isUnlocked && (
                        <span className="absolute top-3 right-3 text-[14px] opacity-50">🔒</span>
                      )}
                      <div className={`text-[10px] font-mono font-bold mb-1.5 ${isDone ? 'text-[var(--green2)]' : 'text-[var(--txt3)]'}`}>
                        {cols[i % 8]}{Math.floor(i / 8) + 2}
                      </div>
                      <div className="text-[13px] font-semibold text-[var(--txt)] leading-snug flex-1 pr-4">{l.t}</div>
                      <div className="text-[10px] text-[var(--txt3)] mt-1.5">{l.d || 'Dars ' + l.n}</div>
                      {isDone && (
                        <span className="absolute bottom-3 right-3 text-[var(--green2)] text-[0.8rem]">✅</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Lesson Detail
  const lesson = data[currentLesson];
  const nextLesson = currentLesson < data.length - 1 ? data[currentLesson + 1] : null;
  const isDone = isLessonDone(currentCourse, currentLesson);

  // Quiz handling
  const quizKey = `${currentCourse}_${currentLesson}`;
  const questions = quizData[currentCourse as 'f' | 'p']?.[currentLesson];
  const qs = quizStates[quizKey] || { current: 0, score: 0, done: false, answered: [] };

  const handleQuizAnswer = (chosenIdx: number) => {
    if (!questions || qs.done) return;
    const q = questions[qs.current];
    const isCorrect = chosenIdx === q.ans;

    const newState = {
      ...qs,
      score: isCorrect ? qs.score + 1 : qs.score,
      answered: [...qs.answered, chosenIdx]
    };
    setQuizState(quizKey, newState);
  };

  const handleNextQuestion = () => {
    if (!questions) return;
    const newCurrent = qs.current + 1;
    
    if (newCurrent >= questions.length) {
      const finalState = { ...qs, current: newCurrent, done: true };
      setQuizState(quizKey, finalState);
      
      const pct = Math.round((qs.score / questions.length) * 100);
      if (pct >= 67) {
        markLessonDone(currentCourse, currentLesson);
        showNotif('Dars muvaffaqiyatli tugatildi! 🎉');
        confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
      }
    } else {
      setQuizState(quizKey, { ...qs, current: newCurrent });
    }
  };

  const getCellClass = (st: string | number): string => {
    if (st === 'cg') return 'cell-green';
    if (st === 'cr') return 'cell-red';
    if (st === 'cb') return 'cell-blue';
    if (st === 'cy') return 'cell-yellow';
    if (st === 'cp2') return 'cell-purple';
    if (st === 'cv2') return 'cell-value';
    return '';
  };

  return (
    <div className="p-7 overflow-y-auto bg-[var(--bg)]">
      {/* Stuck Modal */}
      {showStuckModal && (
        <div className="fixed inset-0 bg-black/80 z-[900] flex items-center justify-center p-5 backdrop-blur-lg">
          <div className="bg-[var(--bg2)] border border-[var(--bdr2)] rounded-2xl p-8 max-w-[480px] w-full relative">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ff7675] to-transparent rounded-t-2xl" />
            <div className="text-[1.8rem] mb-2">🆘</div>
            <div className="font-syne text-[1.2rem] font-extrabold mb-1.5">Qayerda qotdingiz?</div>
            <div className="text-[0.82rem] text-[var(--txt3)] mb-5">{lesson.t}</div>
            
            <div className="bg-[var(--bg3)] border border-[var(--bdr)] rounded-xl p-4 mb-4">
              <h5 className="text-[0.82rem] text-[var(--acc3)] font-bold mb-2 flex items-center gap-1.5">💡 Maslahat</h5>
              <p className="text-[0.85rem] text-[var(--txt2)] leading-relaxed">
                Bu mavzuda qiyin joyni aniqlashtirish uchun o'qituvchiga murojaat qiling.
              </p>
            </div>

            <div className="flex gap-2.5 flex-wrap mt-4">
              <a 
                href="https://t.me/tr_power" 
                target="_blank"
                onClick={() => {
                  logStuck(lesson.t, currentLesson, currentCourse);
                }}
                className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-br from-[#0088cc] to-[#006fa8] text-white border-none rounded-xl text-[0.85rem] font-bold cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,136,204,0.3)]"
              >
                ✈️ O'qituvchiga yozish
              </a>
              <button 
                onClick={() => setShowStuckModal(false)}
                className="px-5 py-3 bg-[var(--bg3)] border border-[var(--bdr2)] rounded-xl text-[var(--txt2)] text-[0.85rem] font-semibold cursor-pointer transition-all hover:border-[var(--bdr3)] hover:text-[var(--txt)]"
              >
                Tushundim ✓
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-[var(--bg2)] rounded-xl overflow-hidden border border-[var(--bdr)]">
        {/* Formula bar */}
        <div className="flex items-center bg-[var(--bg2)] border-b border-[var(--bdr)]">
          <div className="bg-[var(--glow)] px-3.5 py-2.5 text-[var(--acc3)] font-bold font-mono text-[12px] min-w-[60px] text-center border-r border-[var(--bdr)]">
            {cols[currentLesson % 8]}{Math.floor(currentLesson / 8) + 2}
          </div>
          <div className="px-3 py-2.5 text-[var(--acc3)] italic font-bold border-r border-[var(--bdr)] text-[13px]">fx</div>
          <div className="px-3.5 py-2.5 text-[var(--txt2)] text-[13px] flex-1">
            Kurslar › <b className="text-[var(--txt)]">{courseName}</b> › {String(lesson.n).padStart(2, '0')}-dars {isDone && '✅'}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Navigation */}
          <div className="mb-4 flex gap-2 flex-wrap items-center">
            <button 
              onClick={() => setCurrentLesson(-1)}
              className="bg-[var(--bg3)] text-[var(--txt)] border border-[var(--bdr)] px-3 py-2 rounded-lg text-[0.78rem] font-semibold cursor-pointer"
            >
              📋 Darslar
            </button>
            {currentLesson > 0 && (
              <button 
                onClick={() => { setCurrentLesson(currentLesson - 1); resetQuizState(quizKey); }}
                className="bg-[var(--bg3)] text-[var(--txt)] border border-[var(--bdr2)] px-3 py-2 rounded-lg text-[0.78rem] font-semibold cursor-pointer"
              >
                ← {currentLesson}-dars
              </button>
            )}
            {currentLesson < data.length - 1 && isDone && (
              <button 
                onClick={() => { setCurrentLesson(currentLesson + 1); resetQuizState(quizKey); }}
                className="bg-[var(--acc)] text-white border-none px-3 py-2 rounded-lg text-[0.78rem] font-semibold cursor-pointer"
              >
                {currentLesson + 2}-dars →
              </button>
            )}
            {isDone && (
              <span className="text-[var(--green2)] text-[0.82rem] font-bold">✅ Tugatilgan</span>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Left Column */}
            <div className="flex flex-col gap-4">
              {/* Lesson Info */}
              <div className="bg-[var(--bg2)] border border-[var(--bdr)] rounded-xl p-5">
                <div className="inline-flex items-center justify-center w-[42px] h-[42px] rounded-xl bg-[var(--glow)] text-[var(--acc3)] text-[17px] font-extrabold font-mono mb-3 border border-[rgba(108,92,231,0.3)]">
                  {String(lesson.n).padStart(2, '0')}
                </div>
                <div className="text-[12px] text-[var(--txt3)] mb-1 font-medium">{lesson.d || 'Professional'} · {lesson.n}-dars</div>
                <div className="text-[22px] font-extrabold leading-snug mb-2.5 font-syne">{lesson.t}</div>
                <div className="text-[14px] text-[var(--txt2)] leading-relaxed">{lesson.desc}</div>
                
                <button 
                  onClick={() => setShowStuckModal(true)}
                  className="inline-flex items-center gap-2 px-4.5 py-2.5 bg-[rgba(225,112,85,0.08)] border border-[rgba(225,112,85,0.2)] rounded-xl text-[#ff7675] text-[0.85rem] font-semibold cursor-pointer transition-all mt-2 hover:bg-[rgba(225,112,85,0.15)] hover:border-[rgba(225,112,85,0.4)] hover:-translate-y-0.5"
                >
                  🆘 Bu yerda qotdim
                </button>
              </div>

              {/* Topics */}
              <div className="bg-[var(--bg2)] border border-[var(--bdr)] rounded-xl p-5">
                <h4 className="text-[14px] mb-3.5 font-bold">📋 Mavzular</h4>
                {lesson.items.map((item, i) => {
                  const parts = item.split(' — ');
                  return (
                    <div key={i} className="flex gap-3 py-2.5 border-b border-[var(--bdr)] text-[14px] leading-relaxed last:border-b-0">
                      <div className="w-2 h-2 rounded-full bg-[var(--acc)] flex-shrink-0 mt-2" />
                      <div><b className="text-[var(--acc3)]">{parts[0]}</b>{parts[1] ? ' — ' + parts[1] : ''}</div>
                    </div>
                  );
                })}
                {lesson.bog && (
                  <div className="flex gap-3 py-2.5 text-[14px] leading-relaxed">
                    <div className="w-2 h-2 rounded-full bg-[var(--acc)] flex-shrink-0 mt-2" />
                    <div><b>Bog'lanish:</b> {lesson.bog}</div>
                  </div>
                )}
              </div>

              {/* Shortcuts */}
              <div className="bg-[var(--bg2)] border border-[var(--bdr)] rounded-xl p-5">
                <h4 className="text-[14px] mb-3.5 font-bold">⌨️ Tezkor tugmalar</h4>
                {lesson.keys.map((k, i) => (
                  <div key={i} className="flex items-center gap-2.5 py-1.5 text-[14px] font-medium text-[var(--txt2)]">
                    <span className="text-[11px] font-bold font-mono bg-[var(--glow)] text-[var(--acc3)] px-2.5 py-1 rounded-md border border-[rgba(108,92,231,0.3)] min-w-[70px] text-center">
                      {k[0]}
                    </span>
                    {k[1]}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4">
              {/* Tables */}
              {lesson.tables.map((t, ti) => (
                <div key={ti} className="bg-[var(--bg2)] border border-[var(--bdr)] rounded-xl overflow-hidden">
                  <div className="text-[13px] text-[var(--txt)] font-bold p-3.5 pb-0">{t.label}</div>
                  {ti > 0 && (
                    <div className="inline-block px-3.5 py-1.5 rounded-lg text-[12px] font-bold mx-4.5 mt-3.5 bg-[var(--glow)] text-[var(--acc3)] border border-[rgba(108,92,231,0.3)]">
                      ↓ Natija
                    </div>
                  )}
                  <div className="p-4.5 pt-3.5 overflow-x-auto">
                    <table className="w-full border-collapse text-[13px] excel-table">
                      <thead>
                        <tr>
                          {t.h.map((col, ci) => (
                            <th key={ci}>{col}</th>
                          ))}
                        </tr>
                        <tr>
                          <td className="cell-row-header">1</td>
                          {t.hr.map((header, hi) => (
                            <td key={hi} className="cell-header" style={{ background: t.hc[hi] }}>{header}</td>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {t.rows.map((row, ri) => (
                          <tr key={ri}>
                            {row.map((cell, ci) => (
                              <td 
                                key={ci} 
                                className={ci === 0 ? 'cell-row-header' : getCellClass(t.st[ri]?.[ci] || '')}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {t.f && (
                    <div className="mx-4.5 mb-4.5 p-3.5 px-4.5 bg-[var(--bg3)] rounded-xl font-mono text-[13px] text-[var(--txt)] border-l-[3px] border-l-[var(--acc)] leading-relaxed">
                      {t.f.split('\n').map((line, i) => (
                        <div key={i}><b className="text-[var(--acc3)]">{line}</b></div>
                      ))}
                      {t.fd && <span className="block text-[var(--txt2)] text-[12px] font-sans mt-1.5">{t.fd}</span>}
                    </div>
                  )}
                </div>
              ))}

              {/* Quick Commands */}
              <div className="bg-[var(--bg2)] border border-[var(--bdr)] rounded-xl overflow-hidden">
                <div className="text-[13px] text-[var(--txt)] font-bold p-3.5 pb-0">⚡ Foydali buyruqlar</div>
                <div className="grid grid-cols-2 gap-2.5 p-3.5 pt-4.5">
                  {lesson.sc.map((s, i) => (
                    <div key={i} className="flex items-center gap-2.5 bg-[var(--bg3)] rounded-lg p-2.5 px-3 border border-[var(--bdr)]">
                      <span className="font-mono text-[11px] font-bold bg-[var(--bg2)] border border-[var(--bdr2)] rounded-md px-2.5 py-1 text-[var(--acc3)] whitespace-nowrap">
                        {s[0]}
                      </span>
                      <span className="text-[12px] font-medium text-[var(--txt2)]">{s[1]}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Downloads */}
              {lesson.files && lesson.files.length > 0 && (
                <div className="bg-[var(--bg2)] border border-[var(--bdr)] rounded-xl overflow-hidden mt-4">
                  <div className="text-[13px] text-[var(--txt)] font-bold p-3.5 pb-0">📁 Yuklamalar</div>
                  <div className="flex flex-col gap-2 p-3.5 pt-3">
                    {lesson.files.map((file, i) => (
                      <a 
                        key={i}
                        href={`https://t.me/tr_power`}
                        target="_blank"
                        className="flex items-center gap-2.5 bg-[var(--bg3)] border border-[var(--bdr)] rounded-lg p-3 text-[0.85rem] text-[var(--txt2)] hover:border-[var(--acc)] hover:text-[var(--txt)] transition-all cursor-pointer no-underline"
                      >
                        <span className="text-lg">{file.endsWith('.xlsm') ? '📊' : file.endsWith('.pdf') ? '📄' : '⬇️'}</span>
                        <span className="flex-1">{file}</span>
                        <span className="text-[0.7rem] text-[var(--txt3)] bg-[var(--bg2)] px-2 py-1 rounded">Telegram orqali</span>
                      </a>
                    ))}
                    <p className="text-[0.75rem] text-[var(--txt3)] mt-1 px-1">
                      💡 Fayllarni olish uchun <a href="https://t.me/tr_power" target="_blank" className="text-[var(--acc3)] hover:underline">@tr_power</a> ga yozing
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
            <div className="bg-[var(--bg2)] border border-[var(--bdr)] rounded-xl p-5">
              <h4 className="text-[14px] mb-2.5 font-bold">🔗 Keyingi</h4>
              <p className="text-[14px] text-[var(--txt2)] leading-relaxed">
                {nextLesson ? (
                  <><b>{String(nextLesson.n).padStart(2, '0')}-dars:</b> {nextLesson.t}</>
                ) : (
                  <b>Yakun</b>
                )}
              </p>
            </div>
            <div className="bg-[var(--bg2)] border border-[var(--bdr)] rounded-xl p-5">
              <h4 className="text-[14px] mb-2.5 font-bold">✅ Natija</h4>
              <p className="text-[14px] text-[var(--txt2)] leading-relaxed"><b>{lesson.nat}</b></p>
            </div>
          </div>

          {/* Quiz */}
          {questions && questions.length > 0 && (
            <div className="bg-[var(--bg2)] border border-[var(--bdr3)] rounded-2xl p-7 mt-5 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--acc)] to-transparent" />
              
              {qs.done ? (
                // Quiz Result
                <div className="text-center py-5">
                  <div className={`font-syne text-[3rem] font-extrabold mb-2 ${qs.score / questions.length >= 0.67 ? 'text-[var(--green2)]' : 'text-[#ff7675]'}`}>
                    {qs.score}/{questions.length}
                  </div>
                  <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-full font-bold text-[0.85rem] mb-4 ${
                    qs.score / questions.length >= 0.67 
                      ? 'bg-[rgba(0,184,148,0.15)] text-[var(--green2)] border border-[rgba(0,184,148,0.25)]' 
                      : 'bg-[rgba(225,112,85,0.1)] text-[#ff7675] border border-[rgba(225,112,85,0.2)]'
                  }`}>
                    {qs.score / questions.length >= 0.67 ? '✅ Dars o\'zlashtirildi!' : '❌ Qaytadan ko\'ring'}
                  </div>
                  <p className="text-[var(--txt2)] mb-5">
                    {qs.score / questions.length >= 0.67 
                      ? 'Zo\'r! Keyingi darsga o\'tishingiz mumkin.' 
                      : 'Darsni qaytadan ko\'rib, testni qayta ishlang.'}
                  </p>
                  <button 
                    onClick={() => resetQuizState(quizKey)}
                    className="bg-[var(--bg3)] text-[var(--txt)] border border-[var(--bdr2)] px-4 py-2.5 rounded-lg text-[0.85rem] font-semibold cursor-pointer mr-2"
                  >
                    🔄 Qaytadan
                  </button>
                  {qs.score / questions.length >= 0.67 && currentLesson < data.length - 1 && (
                    <button 
                      onClick={() => { setCurrentLesson(currentLesson + 1); resetQuizState(quizKey); }}
                      className="bg-[var(--acc)] text-white border-none px-4 py-2.5 rounded-lg text-[0.85rem] font-semibold cursor-pointer"
                    >
                      Keyingi dars →
                    </button>
                  )}
                </div>
              ) : (
                // Quiz Questions
                <>
                  <div className="flex items-center justify-between mb-5 flex-wrap gap-2.5">
                    <div className="font-syne text-base font-extrabold">📝 Dars testi</div>
                    <div className="font-mono text-[0.75rem] text-[var(--txt3)]">{qs.current + 1} / {questions.length}</div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="h-2 bg-[var(--bdr2)] rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[var(--acc)] to-[var(--acc3)] rounded-full transition-all" style={{ width: `${Math.round(qs.current / questions.length * 100)}%` }} />
                    </div>
                  </div>

                  <div className="text-[0.95rem] font-semibold mb-4 leading-relaxed">{questions[qs.current].q}</div>

                  <div className="flex flex-col gap-2">
                    {questions[qs.current].opts.map((opt, i) => {
                      const answered = qs.answered.length > qs.current;
                      const isCorrect = answered && i === questions[qs.current].ans;
                      const isWrong = answered && qs.answered[qs.current] === i && i !== questions[qs.current].ans;

                      return (
                        <button
                          key={i}
                          onClick={() => !answered && handleQuizAnswer(i)}
                          disabled={answered}
                          className={`p-3 px-4 rounded-xl cursor-pointer text-[0.88rem] text-left flex items-center gap-2.5 transition-all ${
                            isCorrect 
                              ? 'bg-[rgba(0,184,148,0.12)] border border-[rgba(0,184,148,0.3)] text-[var(--green2)]'
                              : isWrong
                                ? 'bg-[rgba(225,112,85,0.1)] border border-[rgba(225,112,85,0.25)] text-[#ff7675]'
                                : answered
                                  ? 'bg-[var(--bg3)] border border-[var(--bdr2)] text-[var(--txt2)] opacity-70 cursor-not-allowed'
                                  : 'bg-[var(--bg3)] border border-[var(--bdr2)] text-[var(--txt2)] hover:border-[rgba(108,92,231,0.4)] hover:text-[var(--txt)] hover:bg-[var(--glow2)]'
                          }`}
                        >
                          <span className="w-6 h-6 rounded-md bg-[var(--bdr2)] flex items-center justify-center text-[0.7rem] font-bold font-mono">
                            {['A', 'B', 'C', 'D'][i]}
                          </span>
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {qs.answered.length > qs.current && (
                    <>
                      <div className={`mt-3.5 p-3 px-4 rounded-xl text-[0.85rem] leading-relaxed ${
                        qs.answered[qs.current] === questions[qs.current].ans
                          ? 'bg-[rgba(0,184,148,0.1)] border border-[rgba(0,184,148,0.2)] text-[var(--green2)]'
                          : 'bg-[rgba(225,112,85,0.1)] border border-[rgba(225,112,85,0.2)] text-[#ff7675]'
                      }`}>
                        {qs.answered[qs.current] === questions[qs.current].ans ? '✅ To\'g\'ri! ' : '❌ Noto\'g\'ri. '}
                        {questions[qs.current].exp}
                      </div>
                      <button
                        onClick={handleNextQuestion}
                        className="mt-3.5 px-6 py-3 bg-[var(--acc)] text-white border-none rounded-xl text-[0.88rem] font-bold cursor-pointer transition-all hover:bg-[var(--acc2)] hover:-translate-y-0.5"
                      >
                        {qs.current + 1 >= questions.length ? 'Natijani ko\'rish' : 'Keyingi savol →'}
                      </button>
                    </>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
