import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export function PublicHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-b dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-950/60 transition-colors duration-300">
            <Container>
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2 text-gray-900 dark:text-zinc-100">
                        <span className="text-xl font-bold tracking-tight">Kasparro</span>
                    </Link>
                    <nav className="hidden md:flex items-center space-x-6">
                        <Link href="/platform" className="text-sm font-medium transition-colors hover:text-gray-900 text-gray-600 dark:text-gray-400 dark:hover:text-zinc-100">
                            Platform
                        </Link>
                        <Link href="/about" className="text-sm font-medium transition-colors hover:text-gray-900 text-gray-600 dark:text-gray-400 dark:hover:text-zinc-100">
                            About
                        </Link>
                        <ThemeToggle />
                        <Link href="/app/dashboard">
                            <Button size="sm">Launch App</Button>
                        </Link>
                    </nav>
                </div>
            </Container>
        </header>
    );
}
