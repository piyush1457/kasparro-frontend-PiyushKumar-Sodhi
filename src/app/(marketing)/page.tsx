import Link from 'next/link';
import { ArrowRight, BarChart3, Brain, Search, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import auditModules from '@/data/audit-modules.json';

export default function HomePage() {
  return (
    <div className="flex flex-col space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
        <Container>
          <div className="flex max-w-[980px] flex-col items-start gap-4">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 md:text-6xl lg:text-[5rem] leading-[1.1]">
              AI-native SEO for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">AI-first search era</span>
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

      {/* Why AI-SEO */}
      <section className="bg-gray-50 py-20">
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
            <Card>
              <CardHeader>
                <Search className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle>Semantic Understanding</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  LLMs don't just match keywords. They understand intent and context. We help you shape how models perceive your brand's entity.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <ShieldCheck className="h-10 w-10 text-indigo-600 mb-2" />
                <CardTitle>Trust & Authority</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  AI models prioritize sources they trust. We analyze your Knowledge Graph presence and citation authority.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Brain className="h-10 w-10 text-purple-600 mb-2" />
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

      {/* Core Modules Grid */}
      <section>
        <Container>
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-600">
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
              <Card key={module.id} className="transition-all hover:shadow-lg hover:border-blue-200">
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

      {/* Pipeline View */}
      <section className="py-16 border-t">
        <Container>
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              How Kasparro Works
            </h2>
            <div className="relative w-full p-8 bg-white rounded-2xl border shadow-sm">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center border">
                    <span className="font-bold text-gray-500">Input</span>
                  </div>
                  <span className="text-sm font-medium">Brand & Serp Data</span>
                </div>
                <div className="hidden md:block flex-1 h-0.5 bg-gray-200 relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-xs text-gray-400 uppercase tracking-wider">Processing</div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100">
                    <Brain className="h-8 w-8 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium">AI Analysis Engine</span>
                </div>
                <div className="hidden md:block flex-1 h-0.5 bg-gray-200 relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-xs text-gray-400 uppercase tracking-wider">Output</div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-xl bg-green-50 flex items-center justify-center border border-green-100">
                    <BarChart3 className="h-8 w-8 text-green-600" />
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
