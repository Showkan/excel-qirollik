import type { User, Group, Session, DB } from './types';

const SECRET = 'QiR0lL1k_X9pZ_2024_S3cur3';

export function encPass(p: string): string {
  let r = '';
  for (let i = 0; i < p.length; i++) {
    r += String.fromCharCode(p.charCodeAt(i) ^ SECRET.charCodeAt(i % SECRET.length));
  }
  return btoa(r).split('').reverse().join('');
}

export function decPass(e: string): string {
  try {
    const r = atob(e.split('').reverse().join(''));
    let p = '';
    for (let i = 0; i < r.length; i++) {
      p += String.fromCharCode(r.charCodeAt(i) ^ SECRET.charCodeAt(i % SECRET.length));
    }
    return p;
  } catch {
    return '';
  }
}

export const pad = (n: number): string => n < 10 ? '0' + n : '' + n;

export const today = (): string => {
  const d = new Date();
  return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
};

export const formatDateISO = (d: Date): string => {
  return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
};

export const monthStart = (): string => {
  const d = new Date();
  return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-01';
};

export const formatDate = (s: string): string => {
  if (!s || s === '-') return '-';
  const x = s.split('-');
  return x[2] + '.' + x[1] + '.' + x[0];
};

export const nowHM = (): string => {
  const d = new Date();
  return pad(d.getHours()) + ':' + pad(d.getMinutes());
};

export const roleName = (r: string): string => {
  return r === 'king' ? 'Qirol' : r === 'commander' ? 'Qomondon' : 'Askar';
};

export const daysLeft = (u: User): number => {
  if (u.role === 'king') return 9999;
  const c = new Date(u.cat + 'T00:00:00');
  const e = new Date(c.getTime() + u.days * 86400000);
  const d = Math.ceil((e.getTime() - new Date().getTime()) / 86400000);
  return d > 0 ? d : 0;
};

export const lastSeen = (u: User): string => u.ls || '-';

export const isActiveToday = (u: User): boolean => lastSeen(u) === today();

export const sessionFilter = (sessions: Session[], uid: number, from?: string, to?: string): Session[] => {
  return sessions.filter(s => {
    if (s.uid !== uid) return false;
    if (from && s.date < from) return false;
    if (to && s.date > to) return false;
    return true;
  });
};

export const totalMinutes = (sessions: Session[], uid: number, from?: string, to?: string): number => {
  const ss = sessionFilter(sessions, uid, from, to);
  let sum = 0;
  for (const s of ss) sum += s.min;
  return sum;
};

export const formatTime = (min: number): string => {
  const h = Math.floor(min / 60);
  const m = min % 60;
  return h > 0 ? h + ' soat ' + m + ' daq' : m + ' daq';
};

export const hasAccess = (user: User | null, courseKey: string): boolean => {
  if (!user) return false;
  if (user.role === 'king' || user.role === 'commander') return true;
  if (user.access === 'all') return true;
  if (user.access === courseKey) return true;
  return false;
};

export const userById = (db: DB, id: number): User | null => {
  return db.users.find(u => u.id === id) || null;
};

export const groupById = (db: DB, id: number | null): Group | null => {
  if (id === null) return null;
  return db.groups.find(g => g.id === id) || null;
};

export const visibleGroups = (db: DB, me: User | null): Group[] => {
  if (!me) return [];
  if (me.role === 'king') return db.groups.slice();
  if (me.role === 'commander') return db.groups.filter(g => g.id === me.gId);
  return [];
};

export const visibleUsers = (db: DB, me: User | null): User[] => {
  if (!me) return [];
  if (me.role === 'king') return db.users.filter(u => u.role !== 'king');
  if (me.role === 'commander') return db.users.filter(u => u.gId === me.gId && u.role !== 'king');
  return [];
};

export const cols = 'ABCDEFGHIJKL'.split('');
