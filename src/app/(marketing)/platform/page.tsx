import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Database, BrainCircuit, FileOutput, ArrowRight } from 'lucide-react';

export default function PlatformPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 center w-full h-[600px] bg-gradient-radial from-blue-100/40 via-transparent to-transparent dark:from-blue-900/10 dark:via-transparent dark:to-transparent" />
      </div>

      <div className="py-20 space-y-20">
        <section className="text-center">
          <Container>
            <div className="flex justify-center mb-6">
              <Badge variant="outline" className="border-purple-200 bg-purple-50 text-purple-700 dark:border-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                Kasparro Platform
              </Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-zinc-50 sm:text-6xl mb-6">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Audit Pipeline</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Kasparro ingests brand data, processes it through 7 specialized AI-audit modules, and outputs actionable intelligence for the generative web.
            </p>
          </Container>
        </section>

        <section>
          <Container>
            <div className="grid gap-8 md:grid-cols-3 relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-gray-200 dark:via-zinc-800 to-transparent -z-10" />

              <div className="space-y-4">
                <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-zinc-800 flex items-center justify-center border border-gray-200 dark:border-zinc-700 font-bold text-gray-500 dark:text-gray-400 z-10">1</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-zinc-100">Ingest</h3>
                </div>
                <Card className="glass-panel border-0 ring-1 ring-gray-200/50 dark:ring-zinc-800 shadow-xl shadow-gray-200/20 dark:shadow-black/20 h-full">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center mb-2 text-blue-600 dark:text-blue-400">
                      <Database className="w-5 h-5" />
                    </div>
                    <CardTitle>Data Sources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Brand Assets (Site, Blog, PR)</div>
                    <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Knowledge Graph Nodes</div>
                    <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> SERP Snippets</div>
                    <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Common Crawl Data</div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center border border-blue-200 dark:border-blue-800 font-bold text-blue-600 dark:text-blue-400 z-10">2</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-zinc-100">Analyze</h3>
                </div>
                <Card className="glass-panel border-0 ring-1 ring-blue-200/50 dark:ring-blue-800/50 shadow-xl shadow-blue-200/20 dark:shadow-blue-900/10 bg-blue-50/30 dark:bg-blue-900/10 h-full">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/20 flex items-center justify-center mb-2 text-indigo-600 dark:text-indigo-400">
                      <BrainCircuit className="w-5 h-5" />
                    </div>
                    <CardTitle>AI Inference Engine</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400" /> Sentiment Scikit</div>
                    <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400" /> Entity Resolution</div>
                    <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400" /> Vector Similarity Check</div>
                    <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400" /> LLM Hallucination Test</div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-zinc-800 flex items-center justify-center border border-gray-200 dark:border-zinc-700 font-bold text-gray-500 dark:text-gray-400 z-10">3</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-zinc-100">Output</h3>
                </div>
                <Card className="glass-panel border-0 ring-1 ring-gray-200/50 dark:ring-zinc-800 shadow-xl shadow-gray-200/20 dark:shadow-black/20 h-full">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-2 text-green-600 dark:text-green-400">
                      <FileOutput className="w-5 h-5" />
                    </div>
                    <CardTitle>Strategic Intelligence</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-400" /> Visibility Score (0-100)</div>
                    <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-400" /> EEAT Evaluation</div>
                    <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-400" /> Corrective Content Briefs</div>
                    <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-400" /> Citation Impact Report</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-zinc-900 dark:bg-zinc-950 text-white py-20 mt-12">
          <Container>
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Built for the AI-First Era</h2>
                <div className="space-y-8">
                  <div className="relative pl-6 border-l-2 border-blue-500/30">
                    <h3 className="text-xl font-semibold text-blue-400 mb-2">vs Traditional SEO</h3>
                    <p className="text-gray-400 leading-relaxed">Traditional tools count backlinks and optimize for 10 blue links. That era is ending. We don't just look at keywords, we look at semantic relationships.</p>
                  </div>
                  <div className="relative pl-6 border-l-2 border-purple-500/30">
                    <h3 className="text-xl font-semibold text-purple-400 mb-2">The Kasparro Difference</h3>
                    <p className="text-gray-400 leading-relaxed">We optimize for how Large Language Models "think" about your brand entity. We optimize for comprehension, context, and citation worthiness.</p>
                  </div>
                </div>
              </div>
              {/* Visual decoration instead of testimonial */}
              <div className="flex justify-center relative">
                <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full opacity-20" />
                <div className="relative z-10 p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm max-w-sm w-full">
                  <div className="space-y-4">
                    <div className="h-2 w-24 bg-white/20 rounded-full" />
                    <div className="h-2 w-full bg-white/10 rounded-full" />
                    <div className="h-2 w-3/4 bg-white/10 rounded-full" />
                    <div className="h-2 w-5/6 bg-white/10 rounded-full" />
                  </div>
                  <div className="mt-8 flex items-center justify-between">
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 rounded-full bg-red-400" />
                      <div className="h-2 w-2 rounded-full bg-yellow-400" />
                      <div className="h-2 w-2 rounded-full bg-green-400" />
                    </div>
                    <div className="h-2 w-12 bg-white/20 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>


        <section className="text-center pb-12">
          <Container>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-zinc-100">Ready to audit your entity?</h2>
            <Link href="/app/dashboard">
              <Button size="lg" className="group">
                Start Free Audit
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </Container>
        </section>
      </div>
    </div>
  );
}
