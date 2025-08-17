import { Skeleton } from "@/components/ui/skeleton";

export const FeaturedArticleSkeleton = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <Skeleton className="relative w-full aspect-[16/10] rounded-2xl" />
        <div className="space-y-4">
            <Skeleton className="h-4 w-[150px]" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-[200px] mt-4" />
        </div>
    </div>
);