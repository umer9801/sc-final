import Image from 'next/image'

export function Logo({ className }: { className?: string }) {
  return (
    <span className={className}>
      <span className="inline-flex items-center">
        {/* white bg box so logo is visible on any header background */}
        <span className="inline-flex items-center justify-center bg-white px-2 py-1 border-2 border-charcoal shadow-[2px_2px_0_0_oklch(0.40_0.07_158)]">
          <Image
            src="/logo.png"
            alt="Solvix Core"
            width={140}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
        </span>
      </span>
    </span>
  )
}
