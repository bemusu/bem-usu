import { Skeleton } from "@/components/ui/skeleton";

export const CategoryFilterSkeleton = () => (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
        <h3 className="text-3xl font-bold text-slate-800">Berita Lainnya</h3>
        <div className="flex flex-wrap gap-2">
            <Skeleton className="h-9 w-20 rounded-full" />
            <Skeleton className="h-9 w-24 rounded-full" />
            <Skeleton className="h-9 w-28 rounded-full" />
            <Skeleton className="h-9 w-24 rounded-full" />
        </div>
    </div>
);