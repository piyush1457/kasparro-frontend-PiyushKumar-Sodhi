import { HTMLAttributes, forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: 'default' | 'outline' | 'success' | 'warning' | 'destructive';
}

/**
 * Badge Component
 * 
 * Displays a small status indicator or label.
 * Supports multiple semantic variants for different contexts.
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
    ({ className, variant = 'default', ...props }, ref) => {
        const variants = {
            default: 'border-transparent bg-gray-900 text-white hover:bg-gray-900/80',
            outline: 'text-gray-950 border-gray-200',
            success: 'border-transparent bg-green-100 text-green-800',
            warning: 'border-transparent bg-yellow-100 text-yellow-800',
            destructive: 'border-transparent bg-red-100 text-red-800'
        };

        return (
            <span
                ref={ref}
                className={cn(
                    'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
                    variants[variant],
                    className
                )}
                {...props}
            />
        );
    }
);
Badge.displayName = 'Badge';
