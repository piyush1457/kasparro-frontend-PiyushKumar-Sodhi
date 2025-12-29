import { Skeleton } from "@/components/ui/Skeleton";

export default function DashboardLoading() {
    return (
        <div className="flex flex-col gap-8 p-8 max-w-7xl mx-auto w-full">
            {/* Header Skeleton */}
            <div className="space-y-4">
                <Skeleton className="h-10 w-48" />
                <Skeleton className="h-4 w-96" />
            </div>

            {/* KPI Architecture Grid Skeleton */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-xl space-y-4 bg-white dark:bg-zinc-900/50">
                        <div className="flex justify-between items-start">
                            <Skeleton className="h-5 w-24" />
                            <Skeleton className="h-8 w-8 rounded-full" />
                        </div>
                        <div className="space-y-2">
                            <Skeleton className="h-8 w-16" />
                            <Skeleton className="h-3 w-32" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Content Area Skeleton */}
            <div className="grid gap-6 md:grid-cols-3">
                <div className="md:col-span-2 space-y-6">
                    <div className="h-[400px] border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 bg-white dark:bg-zinc-900/50 space-y-6">
                        <Skeleton className="h-6 w-32" />
                        <div className="space-y-4">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-[90%]" />
                            <Skeleton className="h-4 w-[85%]" />
                        </div>
                        <div className="grid grid-cols-3 gap-4 pt-8">
                            <Skeleton className="h-32 w-full rounded-lg" />
                            <Skeleton className="h-32 w-full rounded-lg" />
                            <Skeleton className="h-32 w-full rounded-lg" />
                        </div>
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="h-[400px] border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 bg-white dark:bg-zinc-900/50">
                        <Skeleton className="h-6 w-32 mb-6" />
                        <div className="space-y-4">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <Skeleton className="h-10 w-10 rounded-full" />
                                    <div className="space-y-1 flex-1">
                                        <Skeleton className="h-3 w-20" />
                                        <Skeleton className="h-2 w-16" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
