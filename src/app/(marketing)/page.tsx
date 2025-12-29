import Link from 'next/link';
import { ArrowRight, BarChart3, Brain, Search, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import auditModules from '@/data/audit-modules.json';
import FloatingIcons from '@/components/ui/FloatingIcons';

export default function HomePage() {
  return (
    <div className="flex flex-col space-y-20 pb-20 relative">
      <FloatingIcons />
      {/* Brighter, Landing-Specific Background Gradient */}
      <div className="absolute inset-0 fixed inset-0 -z-50 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100/40 via-purple-50/20 to-transparent dark:from-indigo-950/20 dark:to-transparent" />
      <div className="absolute inset-0 fixed inset-0 -z-30 pointer-events-none bg-[radial-gradient(circle_at_50%_40%,_rgba(167,139,250,0.15),_transparent_60%)]" />
      {/* Hero Section - Subtle Brand Gradient Top */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-indigo-50/40 via-purple-50/20 to-transparent dark:from-indigo-950/20 dark:via-purple-900/10 dark:to-transparent">
        <Container>
          <div className="flex max-w-[980px] flex-col items-start gap-4">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 md:text-6xl lg:text-[5rem] leading-[1.1] relative">
              <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-xl block -z-10"></span>
              AI-native SEO for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 font-extrabold pb-2">AI-first search era</span>
            </h1>
            <p className="max-w-[700px] text-lg text-gray-600 md:text-xl">
              Kasparro helps brands understand and optimize how they appear inside
              ChatGPT, Gemini, Perplexity, and AI search systems.
            </p>
            <div className="flex flex-col gap-4 min-[400px]:flex-row pt-4">
              <Link href="/app/dashboard">
                <Button size="lg" className="gap-2">
                  Run AI-SEO Audit <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/platform">
                <Button variant="outline" size="lg">
                  How it works
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Why AI-SEO - Warm/Brand Tint */}
      <section className="bg-gradient-to-r from-indigo-50/30 to-purple-50/30 py-20 dark:from-zinc-900 dark:to-zinc-900">
        <Container>
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why AI-SEO is different
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              Traditional SEO optimizes for links and keywords. AI-SEO optimizes for entities, trust, and model comprehension.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-indigo-100 bg-white/60 backdrop-blur-md hover:border-indigo-300 transition-all hover:shadow-indigo-100/50 hover:shadow-lg">
              <CardHeader>
                <div className="p-2 w-fit rounded-lg bg-indigo-100/50 mb-4">
                  <Search className="h-8 w-8 text-indigo-600" />
                </div>
                <CardTitle>Semantic Understanding</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  LLMs don't just match keywords. They understand intent and context. We help you shape how models perceive your brand's entity.
                </p>
              </CardContent>
            </Card>
            <Card className="border-indigo-100 bg-white/60 backdrop-blur-md hover:border-indigo-300 transition-all hover:shadow-indigo-100/50 hover:shadow-lg">
              <CardHeader>
                <div className="p-2 w-fit rounded-lg bg-indigo-100/50 mb-4">
                  <ShieldCheck className="h-8 w-8 text-indigo-600" />
                </div>
                <CardTitle>Trust & Authority</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  AI models prioritize sources they trust. We analyze your Knowledge Graph presence and citation authority.
                </p>
              </CardContent>
            </Card>
            <Card className="border-indigo-100 bg-white/60 backdrop-blur-md hover:border-indigo-300 transition-all hover:shadow-indigo-100/50 hover:shadow-lg">
              <CardHeader>
                <div className="p-2 w-fit rounded-lg bg-purple-100/50 mb-4">
                  <Brain className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Generative Visibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Measure how often your brand appears in generated responses, not just 10 blue links.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Core Modules Grid - Clean with decorative element */}
      <section className="relative overflow-hidden">
        {/* Decorative blob */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <Container>
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-700">
                Platform
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive AI-SEO Modules
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              Our 7-point audit covers every aspect of your brand's performance in the age of AI search.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {auditModules.map((module) => (
              <Card key={module.id} className="transition-all hover:shadow-lg hover:border-indigo-200">
                <CardHeader>
                  <CardTitle className="text-lg">{module.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {module.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Pipeline View - Subtle Slate/Cool Tint */}
      <section className="py-16 border-t border-gray-100 bg-slate-50/50 dark:bg-zinc-900/50">
        <Container>
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              How Kasparro Works
            </h2>
            <div className="relative w-full p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center border">
                    <span className="font-bold text-gray-500">Input</span>
                  </div>
                  <span className="text-sm font-medium">Brand & Serp Data</span>
                </div>
                <div className="hidden md:block flex-1 h-0.5 bg-gray-200 relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-xs text-gray-400 uppercase tracking-wider border rounded-full">Processing</div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-xl bg-violet-50 flex items-center justify-center border border-violet-100">
                    <Brain className="h-8 w-8 text-violet-600" />
                  </div>
                  <span className="text-sm font-medium">AI Analysis Engine</span>
                </div>
                <div className="hidden md:block flex-1 h-0.5 bg-gray-200 relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-xs text-gray-400 uppercase tracking-wider border rounded-full">Output</div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-xl bg-cyan-50 flex items-center justify-center border border-cyan-100">
                    <BarChart3 className="h-8 w-8 text-cyan-600" />
                  </div>
                  <span className="text-sm font-medium">Actionable Insights</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
