import { GalleryVerticalEnd } from 'lucide-react';

import { OTPForm } from '@/components/otp-form';

export default function OTPPage({ searchParams }: { searchParams: { email?: string } }) {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a
          href="/"
          className="flex cursor-pointer items-center gap-2 self-center font-medium"
        >
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <GalleryVerticalEnd className="size-4" />
          </div>
          Nexora
        </a>
        <OTPForm email={searchParams?.email} />
      </div>
    </div>
  );
}
