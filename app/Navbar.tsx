'use client';

import { useIsMutating } from '@tanstack/react-query';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const pathname = usePathname();
  const isMutating = useIsMutating();

  const isActive = (path: string) => (pathname === path ? 'text-blue-500' : '');

  return (
    <div className="flex gap-6 w-full items-center justify-center py-10">
      <Link href="/" className={isActive('/')}>
        Home
      </Link>
      <Link href="another-page" className={isActive('/another-page')}>
        Another Page
      </Link>

      <div className="fixed top-28">isMutating Timer: {isMutating}</div>
    </div>
  );
};
