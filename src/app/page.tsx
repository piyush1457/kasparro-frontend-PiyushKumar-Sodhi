import Link from 'next/link';
import { ArrowRight, Bot, BarChart3, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export default function Home() {
    return (
        <div className="relative min-h-screen">
            {/* Background Gradients */}
            <div className="fixed inset-0 -z-10 pointer-events-none">
                <div className="absolute inset-0 bg-white dark:bg-zinc-950 transition-colors duration-500" />
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-sky-200/40 dark:bg-sky-500/10 rounded-full blur-3xl opacity-60" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-200/40 dark:bg-purple-900/10 rounded-full blur-3xl opacity-60" />
            </div>

            {/* Navigation */}
            <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-md">
                <Container className="h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2 font-bold text-xl tracking-tighter text-zinc-900 dark:text-zinc-100">
                        <Bot className="h-6 w-6 text-blue-600 dark:text-blue-500" />
                        <span>Kasparro</span>
                    </div>
                    <nav className="flex gap-6 items-center">
                        <Link href="/platform" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">
                            Platform
                        </Link>
                        <Link href="/about" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">
                            About
                        </Link>
                        <ThemeToggle />
                        <Link href="/app/dashboard">
                            <Button size="sm" className="hidden sm:inline-flex">Launch App</Button>
                        </Link>
                    </nav>
                </Container>
            </header>

            <main className="pt-32 pb-20">
                <Container className="text-center space-y-12">

                    {/* Hero Section */}
                    <div className="space-y-6 max-w-4xl mx-auto">

                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-white animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
                            Optimize for the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">
                                Generative Web
                            </span>
                        </h1>
                        <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
                            Don't just rank on Google. Ensure your brand is cited, recommended, and accurately represented by ChatGPT, Claude, and Gemini.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-in fade-in slide-in-from-bottom-7 duration-700 delay-300">
                            <Link href="/app/dashboard">
                                <Button size="lg" className="w-full sm:w-auto gap-2 shadow-xl shadow-blue-500/20">
                                    Start Free Audit <ArrowRight className="h-4 w-4" />
                                </Button>
                            </Link>
                            <Link href="/platform">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                                    See How It Works
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Feature Grid with Glassmorphism */}
                    <div className="grid md:grid-cols-3 gap-8 pt-20 text-left">
                        <div className="p-8 rounded-2xl glass-panel hover:scale-105 transition-transform duration-300 group dark:bg-zinc-900/50 dark:border-zinc-800">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                                <BarChart3 className="h-6 w-6 text-blue-600 dark:text-blue-400 group-hover:text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-zinc-100">LLM Visibility Score</h3>
                            <p className="text-zinc-600 dark:text-zinc-400">Track how often your brand appears in AI-generated answers across major models.</p>
                        </div>

                        <div className="p-8 rounded-2xl glass-panel hover:scale-105 transition-transform duration-300 group dark:bg-zinc-900/50 dark:border-zinc-800">
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors duration-300">
                                <ShieldCheck className="h-6 w-6 text-purple-600 dark:text-purple-400 group-hover:text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-zinc-100">Trust & Safety</h3>
                            <p className="text-zinc-600 dark:text-zinc-400">Ensure AI models aren't hallucinating false information about your products.</p>
                        </div>

                        <div className="p-8 rounded-2xl glass-panel hover:scale-105 transition-transform duration-300 group dark:bg-zinc-900/50 dark:border-zinc-800">
                            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors duration-300">
                                <Bot className="h-6 w-6 text-green-600 dark:text-green-400 group-hover:text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-zinc-100">Competitor Analysis</h3>
                            <p className="text-zinc-600 dark:text-zinc-400">See who the AI recommends when users ask about your industry.</p>
                        </div>
                    </div>

                </Container>
            </main>
        </div>
    );
}
