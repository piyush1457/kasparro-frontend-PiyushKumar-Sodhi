import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Brain, Code2, ShieldCheck, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 center w-full h-[600px] bg-gradient-radial from-blue-100/40 via-transparent to-transparent dark:from-blue-900/10 dark:via-transparent dark:to-transparent" />
      </div>

      <div className="py-20 space-y-24">

        {/* Hero Section */}
        <section className="text-center">
          <Container>
            <div className="flex justify-center mb-6">
              <Badge variant="outline" className="border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                Mission & Philosophy
              </Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-zinc-50 sm:text-6xl mb-8 max-w-4xl mx-auto">
              From Search Engines to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Answer Engines</span>
            </h1>
            <div className="prose prose-lg max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
              <p className="text-xl leading-relaxed">
                We believe the shift in information retrieval is the biggest shift since the internet itself. Brands need a new control layer to survive in the generative web.
              </p>
            </div>
          </Container>
        </section>

        {/* Core Values Section */}
        <section>
          <Container>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="glass-panel border-0 ring-1 ring-gray-200/50 dark:ring-zinc-800 shadow-xl shadow-gray-200/20 dark:shadow-black/20">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                    <Brain className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  In a world where AI agents negotiate, research, and buy on behalf of humans, being trusted by the AI is the new SEO. Kasparro exists to give brands agency in this opaque new ecosystem.
                </CardContent>
              </Card>

              <Card className="glass-panel border-0 ring-1 ring-gray-200/50 dark:ring-zinc-800 shadow-xl shadow-gray-200/20 dark:shadow-black/20">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">Engineering First</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Founded by engineers who built search infrastructure. We don't believe in "SEO tricks". We believe in data structure, entity resolution, and rigorous analysis.
                </CardContent>
              </Card>

              <Card className="glass-panel border-0 ring-1 ring-gray-200/50 dark:ring-zinc-800 shadow-xl shadow-gray-200/20 dark:shadow-black/20">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-4 text-green-600 dark:text-green-400">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">Trust & Safety</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  We help you understand how LLMs perceive your brand's trustworthiness (EEAT). Ensuring your entity is represented accurately and safely across models.
                </CardContent>
              </Card>
            </div>
          </Container>
        </section>

        {/* Feature/Trust Section */}
        <section className="relative">
          <Container>
            <div className="bg-zinc-900 dark:bg-zinc-950 text-white py-24 rounded-3xl overflow-hidden relative border border-white/10 shadow-2xl">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-blue-500/20 to-transparent rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-purple-500/20 to-transparent rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
                <Badge variant="outline" className="mb-6 border-white/20 text-white bg-white/5 backdrop-blur-sm">
                  <Zap className="w-3 h-3 mr-1 text-yellow-400" />
                  Live System
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                  Built by Engineers, <br />Not Marketers
                </h2>
                <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                  Our platform is built on rigorous analysis of how LLMs construct truth. We provide the control layer for the generative web.
                </p>

                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full border border-green-500/20 text-green-400 font-mono text-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  All Systems Operational
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </div>
  );
}
