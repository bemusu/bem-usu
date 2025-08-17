import { Skeleton } from "@/components/ui/skeleton"

export const ArticleCardSkeleton = () => (
    <div className="flex flex-col space-y-3">
        <Skeleton className="h-[225px] w-full rounded-xl" />
        <div className="space-y-2">
            <Skeleton className="h-4 w-[100px]" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[200px]" />
        </div>
    </div>
);