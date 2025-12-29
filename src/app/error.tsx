'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="flex h-[calc(100vh-4rem)] flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter">Something went wrong!</h1>
                <p className="text-muted-foreground w-[300px] sm:w-[500px]">
                    We apologize for the inconvenience. An unexpected error occurred.
                </p>
                {process.env.NODE_ENV === 'development' && (
                    <div className="p-4 bg-red-50 dark:bg-red-900/10 text-red-600 rounded-md text-sm font-mono text-left max-w-lg overflow-auto">
                        {error.message}
                    </div>
                )}
            </div>
            <Button
                variant="secondary"
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try again
            </Button>
        </div>
    );
}
