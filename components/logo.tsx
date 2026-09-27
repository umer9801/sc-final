export function Logo({ className }: { className?: string }) {
  return (
    <span className={className}>
      <span className="flex items-center gap-2.5">
        {/* pixel S icon */}
        <span className="relative flex size-7 items-center justify-center border-2 border-charcoal bg-charcoal shadow-[2px_2px_0_0_oklch(0.40_0.07_158)]">
          <svg viewBox="0 0 20 20" className="size-4" fill="none" aria-hidden>
            <path
              d="M5 13.5C5 13.5 6.5 15 10 15C13.5 15 14.5 13.5 14.5 12C14.5 8.2 5.5 9.8 5.5 6.5C5.5 5 7 3.5 10 3.5C13 3.5 14.5 5 14.5 5"
              stroke="oklch(0.40 0.07 158)"
              strokeWidth="1.8"
              strokeLinecap="square"
            />
          </svg>
        </span>
        <span className="font-display text-[13px] tracking-wider text-charcoal">
          SOLVIX <span className="text-forest">CORE</span>
        </span>
      </span>
    </span>
  )
}
