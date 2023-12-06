'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Link style={{ color: 'white', textDecoration: 'none' }} href={'/'}>
        Главная
      </Link>
      <Link style={{ color: 'white', textDecoration: 'none' }} href={'/trade'}>
        Продажа p2p
      </Link>
      <Link
        style={{ color: 'white', textDecoration: 'none' }}
        href={'/trade/buy'}
      >
        Продажа p2p (детально)
      </Link>
      <Link style={{ color: 'white', textDecoration: 'none' }} href={'/limit'}>
        Лимитный купить
      </Link>
      <Link
        style={{ color: 'white', textDecoration: 'none' }}
        href={'/futures'}
      >
        Фьючерсы
      </Link>
      <Link
        style={{ color: 'white', textDecoration: 'none' }}
        href={'/profile'}
      >
        Профиль
      </Link>
    </div>
  );
}
