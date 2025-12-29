import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
    return (
        <div className="flex h-[calc(100vh-4rem)] flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">404</h1>
                <h2 className="text-2xl font-semibold tracking-tight">Page Not Found</h2>
                <p className="text-muted-foreground w-[300px] sm:w-[500px]">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
            </div>
            <Link href="/">
                <Button variant="primary">
                    Go back home
                </Button>
            </Link>
        </div>
    );
}
