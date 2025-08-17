import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export const ProsedurCardSkeleton = () => (
    <Card className="bg-white rounded-2xl shadow-lg border border-slate-200/80">
        <div className="p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6 w-full">
                <Skeleton className="w-24 h-24 rounded-full flex-shrink-0" />
                <div className="w-full space-y-2">
                    <Skeleton className="h-6 w-1/2" />
                </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
                <Skeleton className="h-12 w-28 rounded-lg" />
                <Skeleton className="h-12 w-24 rounded-lg" />
            </div>
        </div>
    </Card>
)