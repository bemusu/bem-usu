import { Skeleton } from "../ui/skeleton";


export const CabinetSkeleton = () => (
    <div>
        <div className="flex justify-center flex-wrap gap-3 mb-12">
            <Skeleton className="h-9 w-40 rounded-full" />
            <Skeleton className="h-9 w-32 rounded-full" />
            <Skeleton className="h-9 w-48 rounded-full" />
        </div>
        <Skeleton className="h-8 w-64 mb-8" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
            {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="space-y-2">
                    <Skeleton className="aspect-[4/5] w-full rounded-2xl" />
                    <Skeleton className="h-4 w-3/4 mx-auto" />
                    <Skeleton className="h-4 w-1/2 mx-auto" />
                </div>
            ))}
        </div>
    </div>
)