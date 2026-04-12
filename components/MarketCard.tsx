import Link from 'next/link'
import { cn } from '@/lib/utils'

export interface MarketCardProps {
  country: string
  flag: string
  framework?: string
  gdp: string
  status: 'live' | 'dev'
  keyDimension: string
  toolUrl?: string
}

export default function MarketCard({
  country,
  flag,
  framework,
  gdp,
  status,
  keyDimension,
  toolUrl,
}: MarketCardProps) {
  const isLive = status === 'live'

  return (
    <div
      className={cn(
        'rounded-lg border p-4 flex flex-col gap-2',
        isLive
          ? 'border-primary bg-card'
          : 'border-border bg-card opacity-80',
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-1">
        <div className="flex items-center gap-1.5 min-w-0">
          <span className="text-base leading-none shrink-0">{flag}</span>
          <span className="font-semibold text-xs leading-tight">{country}</span>
        </div>
        {isLive ? (
          <span className="text-[10px] font-bold text-primary uppercase tracking-wider shrink-0 mt-0.5">
            LIVE
          </span>
        ) : (
          <span className="text-[10px] text-muted-foreground uppercase tracking-wide shrink-0 mt-0.5">
            DEV
          </span>
        )}
      </div>

      {/* Framework name */}
      {framework && (
        <div className="text-[11px] font-bold text-primary tracking-widest uppercase">
          {framework}
        </div>
      )}

      {/* GDP */}
      <div className="text-[11px] text-muted-foreground font-medium">{gdp}</div>

      {/* Key dimension */}
      <p className="text-[11px] text-foreground/60 leading-snug flex-1 line-clamp-3">
        {keyDimension}
      </p>

      {/* Link for live frameworks */}
      {isLive && toolUrl && (
        <Link
          href={toolUrl}
          className="text-[11px] font-semibold text-primary hover:underline mt-auto pt-1"
        >
          Use the framework →
        </Link>
      )}
    </div>
  )
}
