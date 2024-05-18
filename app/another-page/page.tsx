'use client';

import { useIsMutating } from '@tanstack/react-query';

export default function AnotherPage() {
  const isMutating = useIsMutating();

  return (
    <section className="flex min-h-screen flex-col items-center p-24 space-y-10">
      <h1 className="text-5xl">Another Page</h1>

      <p className="text-xl">useUseMutating: {isMutating}</p>
    </section>
  );
}
