import { join } from 'path'
import type { Metadata } from 'next'
import { scanHtmlSubdirs } from '@/lib/html-meta'
import AnalysisBrowser from './AnalysisBrowser'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Analysis — MoctarDatt.com',
  description:
    'West Africa market analysis — sixteen frameworks, country diagnostics, and AI deployment conditions.',
}

export default function AnalysisPage() {
  const groups = scanHtmlSubdirs(join(process.cwd(), 'public', 'analysis'))

  return (
    <div className="container px-4 md:px-6 mx-auto py-12">
      <div className="max-w-5xl mx-auto">
        <div className="w-10 h-1 bg-primary mb-6" />
        <h1 className="text-4xl font-bold tracking-tighter mb-4">Analysis</h1>
        <p className="text-muted-foreground mb-10 max-w-xl">
          West Africa market analysis — sixteen frameworks, country diagnostics, and AI deployment
          conditions.
        </p>
        <AnalysisBrowser groups={groups} />
      </div>
    </div>
  )
}
