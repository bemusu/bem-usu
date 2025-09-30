'use client';

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    className?: string;
}

export const Pagination = ({
    currentPage,
    totalPages,
    onPageChange,
    className
}: PaginationProps) => {
    if (totalPages <= 1) return null;

    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className={cn("flex items-center justify-center gap-4 mt-16", className)}>
            <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-slate-200 text-slate-700 rounded-full hover:bg-slate-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <ChevronLeft size={16} />
                <span>Sebelumnya</span>
            </button>

            <span className="text-sm text-slate-600">
                Halaman {currentPage} dari {totalPages}
            </span>

            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-slate-200 text-slate-700 rounded-full hover:bg-slate-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <span>Berikutnya</span>
                <ChevronRight size={16} />
            </button>
        </div>
    );
};