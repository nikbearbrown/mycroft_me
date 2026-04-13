import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Mycroft',
  description: 'An open-source experiment in AI-powered investment intelligence.',
}

export default function AboutPage() {
  return (
    <div className="container px-4 md:px-6 mx-auto py-12">
      <div className="max-w-3xl mx-auto">
        <div className="w-16 h-1.5 bg-primary mb-8" />
        <h1 className="text-4xl font-bold tracking-tighter mb-6">About Mycroft</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            Mycroft is an educational experiment in AI-powered investment intelligence, named after
            Sherlock Holmes&rsquo;s enigmatic elder brother &mdash; a man of superior analytical abilities
            who preferred to orchestrate from behind the scenes.
          </p>
          <p>
            The project explores how a network of specialized agents might work together to analyze
            the rapidly evolving AI sector. Research agents. Verification agents. Portfolio agents.
            Advisory agents. Intelligence agents. And a coordination layer &mdash; the Mycroft layer
            &mdash; that synthesizes their outputs.
          </p>
          <p>
            This is not a product. It is an open question. We are building to learn which approaches
            actually work. Contributors are welcome.
          </p>
          <p>
            Led by Professor Nik Bear Brown, PhD, MBA.
          </p>
          <h2>Get in touch</h2>
          <p>
            You can reach the project at{' '}
            <a href="mailto:info@humanitarians.ai" className="text-primary hover:underline">
              info@humanitarians.ai
            </a>
            {' '}or{' '}
            <a href="https://github.com/humanitarians-ai/mycroft" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              contribute on GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
