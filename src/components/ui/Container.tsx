import { HTMLAttributes, forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Container Component
 * 
 * Centers content and adds horizontal padding.
 * Responsive max-width based on breakpoints.
 */
export const Container = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn('mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8', className)}
            {...props}
        />
    )
);
Container.displayName = 'Container';
