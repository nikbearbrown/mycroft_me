import Link from 'next/link'
import { sql } from '@/lib/db'
import PrimaryButton from '@/components/ui/primary-button'
import SecondaryButton from '@/components/ui/secondary-button'

export const dynamic = 'force-dynamic'

// ── Types ──────────────────────────────────────────────────────────────────
type RecentPost = {
  id: string
  title: string
  slug: string
  excerpt: string | null
  tags: string[] | null
  published_at: string | null
}

// ── Agent types ────────────────────────────────────────────────────────────
const agents = [
  {
    num: '01',
    name: 'Research Agent',
    body: 'Ingests filings, earnings calls, and technical publications. Extracts structured signals on AI capability, market position, and competitive dynamics.',
  },
  {
    num: '02',
    name: 'Verification Agent',
    body: 'Cross-checks claims against primary sources. Flags contradictions, quantifies uncertainty, and scores source reliability before signals reach the portfolio layer.',
  },
  {
    num: '03',
    name: 'Portfolio Agent',
    body: 'Translates verified signals into portfolio-level analysis. Tracks allocation thesis, monitors drift, and surfaces when the underlying assumptions no longer hold.',
  },
  {
    num: '04',
    name: 'Advisory Agent',
    body: 'Synthesizes research and portfolio state into plain-language recommendations. Designed for the investor who wants the reasoning, not just the output.',
  },
  {
    num: '05',
    name: 'Intelligence Agent',
    body: 'Monitors the continuous news and signal stream. Prioritizes what matters, suppresses noise, and routes high-signal items to the relevant specialist agents.',
  },
  {
    num: '06',
    name: 'Mycroft Layer',
    body: 'The coordination layer. Orchestrates the agent network, resolves conflicts between outputs, and maintains the coherent view that no single agent holds alone.',
  },
]

// ── Page ───────────────────────────────────────────────────────────────────
export default async function Home() {
  let recentPosts: RecentPost[] = []
  try {
    recentPosts = await sql`
      SELECT id, title, slug, excerpt, tags, published_at
      FROM blog_posts
      WHERE published = true
      ORDER BY published_at DESC
      LIMIT 3
    `
  } catch {
    // DB unavailable at build time — render without posts
  }

  return (
    <div className="flex flex-col w-full">

      {/* ══ SECTION 1 — HERO ══════════════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl">
            <div className="w-16 h-1.5 bg-primary mb-8" />

            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-6 leading-tight">
              Mycroft is an open-source experiment in AI-powered investment intelligence.
            </h1>

            <p className="text-lg text-muted-foreground mb-4 max-w-2xl leading-relaxed">
              A network of specialized agents &mdash; research, verification, portfolio, advisory,
              and intelligence &mdash; working together to analyze the AI sector.
              Built to learn what actually works.
            </p>

            <p className="text-sm font-semibold text-primary mb-10 tracking-wide">
              Using AI to Invest in AI
            </p>

            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <PrimaryButton href="/research">Explore the framework</PrimaryButton>
              <SecondaryButton href="https://github.com/humanitarians-ai/mycroft">Contribute on GitHub</SecondaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 2 — AGENT NETWORK ═════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24 border-y bg-muted/40">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="mb-10">
            <div className="w-10 h-1 bg-primary mb-5" />
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-3">
              The Agent Network
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Six specialized agents and a coordination layer. Each has a distinct role.
              None of them has the full picture alone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agents.map((a) => (
              <div key={a.num} className="border-l-2 border-primary pl-5">
                <div className="text-xs font-mono text-muted-foreground mb-2 tracking-widest">
                  {a.num}
                </div>
                <h3 className="font-semibold text-base mb-2">{a.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 3 — RECENT RESEARCH ═══════════════════════════════════ */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex items-end justify-between gap-4 mb-10">
            <div>
              <div className="w-10 h-1 bg-primary mb-5" />
              <h2 className="text-3xl font-bold tracking-tighter">Recent Research</h2>
            </div>
            <Link href="/research" className="text-sm font-semibold text-primary hover:underline shrink-0">
              All research &rarr;
            </Link>
          </div>

          {recentPosts.length > 0 ? (
            <div className="divide-y divide-border max-w-2xl">
              {recentPosts.map((post) => (
                <article key={post.id} className="py-6 first:pt-0 last:pb-0">
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <h3 className="font-semibold text-base group-hover:text-primary transition-colors mb-1">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                        {post.excerpt}
                      </p>
                    )}
                    {post.published_at && (
                      <time className="text-xs text-muted-foreground">
                        {new Date(post.published_at).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                    )}
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">Research coming soon.</p>
          )}
        </div>
      </section>

    </div>
  )
}
