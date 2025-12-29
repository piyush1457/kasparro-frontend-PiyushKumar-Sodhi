import React from 'react';

/**
 * Skeleton component for loading states.
 * Uses a pulse animation to indicate content is loading.
 */
interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> { }

export function Skeleton({ className, ...props }: SkeletonProps) {
    return (
        <div
            className={`animate-pulse rounded-md bg-zinc-200/50 dark:bg-zinc-800/50 ${className}`}
            {...props}
        />
    );
}
