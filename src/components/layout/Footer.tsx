import Link from 'next/link';
import { Container } from '@/components/ui/Container';

export function Footer() {
    return (
        <footer className="border-t bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 py-12 md:py-16 transition-colors duration-300">
            <Container>
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    <div className="col-span-2 md:col-span-1">
                        <span className="text-lg font-bold text-gray-900 dark:text-zinc-100">Kasparro</span>
                        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                            AI-native SEO & Brand Intelligence platform for the next generation of search.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-zinc-100">Product</h3>
                        <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            <li><Link href="/platform" className="hover:text-gray-900 dark:hover:text-zinc-100 transition-colors">Platform</Link></li>
                            <li><Link href="/pricing" className="hover:text-gray-900 dark:hover:text-zinc-100 transition-colors">Pricing</Link></li>
                            <li><Link href="/api" className="hover:text-gray-900 dark:hover:text-zinc-100 transition-colors">API</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-zinc-100">Company</h3>
                        <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            <li><Link href="/about" className="hover:text-gray-900 dark:hover:text-zinc-100 transition-colors">About</Link></li>
                            <li><Link href="/careers" className="hover:text-gray-900 dark:hover:text-zinc-100 transition-colors">Careers</Link></li>
                            <li><Link href="/blog" className="hover:text-gray-900 dark:hover:text-zinc-100 transition-colors">Blog</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-zinc-100">Legal</h3>
                        <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            <li><Link href="/privacy" className="hover:text-gray-900 dark:hover:text-zinc-100 transition-colors">Privacy</Link></li>
                            <li><Link href="/terms" className="hover:text-gray-900 dark:hover:text-zinc-100 transition-colors">Terms</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-200 dark:border-zinc-800 pt-8 text-center text-sm text-gray-500 dark:text-gray-400">
                    © {new Date().getFullYear()} Kasparro Inc. All rights reserved.
                </div>
            </Container>
        </footer>
    );
}
