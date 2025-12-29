import { Skeleton } from "@/components/ui/Skeleton";

export default function Loading() {
    return (
        <div className="flex h-screen w-full items-center justify-center bg-white dark:bg-zinc-950">
            <div className="flex flex-col items-center gap-4">
                {/* Simple aesthetic pulse loader */}
                <div className="relative flex h-16 w-16 items-center justify-center">
                    <div className="absolute h-full w-full animate-ping rounded-full bg-blue-500/20 opacity-75"></div>
                    <div className="relative h-8 w-8 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50"></div>
                </div>
                <p className="text-sm font-medium text-zinc-500 animate-pulse">Loading Kasparro...</p>
            </div>
        </div>
    );
}
