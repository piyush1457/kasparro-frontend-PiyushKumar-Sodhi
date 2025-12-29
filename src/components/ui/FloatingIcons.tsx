import { Bot, Brain, Database, Globe, Search, Sparkles } from 'lucide-react';

export default function FloatingIcons() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            {/* Top Left - Bot */}
            <div className="absolute top-20 left-[10%] opacity-40 dark:opacity-20 animate-float backdrop-blur-sm">
                <Bot className="w-16 h-16 text-indigo-500/50" />
            </div>

            {/* Top Right - Brain (Delayed) */}
            <div className="absolute top-32 right-[15%] opacity-40 dark:opacity-20 animate-float-delayed backdrop-blur-sm">
                <Brain className="w-20 h-20 text-violet-500/50" />
            </div>

            {/* Middle Left - Search */}
            <div className="absolute top-1/2 left-[5%] opacity-30 dark:opacity-10 animate-float-delayed">
                <Search className="w-12 h-12 text-blue-400/50" />
            </div>

            {/* Middle Right - Database */}
            <div className="absolute top-[40%] right-[10%] opacity-30 dark:opacity-10 animate-float">
                <Database className="w-16 h-16 text-cyan-400/50" />
            </div>

            {/* Bottom Left - Globe */}
            <div className="absolute bottom-40 left-[20%] opacity-30 dark:opacity-10 animate-float">
                <Globe className="w-14 h-14 text-indigo-400/50" />
            </div>

            {/* Bottom Right - Sparkles */}
            <div className="absolute bottom-20 right-[20%] opacity-40 dark:opacity-20 animate-float-delayed">
                <Sparkles className="w-12 h-12 text-purple-400/50" />
            </div>
        </div>
    );
}
