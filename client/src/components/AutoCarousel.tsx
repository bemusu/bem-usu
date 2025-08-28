'use client'

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Kita menggunakan props 'children' agar komponen ini bisa diisi konten apa saja
export function AutoCarousel({ children }: { children: React.ReactNode }) {
  // Inisialisasi plugin Autoplay
  const autoplay = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  )

  // Inisialisasi Embla Carousel
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true }, // loop: true membuat carousel berputar tanpa henti
    [autoplay.current]
  );

  // Fungsi untuk ke slide sebelumnya
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  // Fungsi untuk ke slide selanjutnya
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="relative">
      {/* Ini adalah kontainer utama carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        {/* Kontainer untuk semua slide */}
        <div className="flex">
          {/* Kita map semua children (misal: MemberCard) ke dalam slide */}
          {React.Children.map(children, (child) => (
            // Setiap slide akan mengambil 100% lebar dan tidak akan menyusut
            <div className="flex-grow-0 flex-shrink-0 w-full min-w-0 px-2">
              {child}
            </div>
          ))}
        </div>
      </div>
      
      {/* Tombol Navigasi "Sebelumnya" */}
      <button 
        className="absolute top-1/2 left-0 md:-left-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-slate-800 rounded-full p-2 shadow-md transition z-10"
        onClick={scrollPrev}
      >
        <ChevronLeft size={24} />
      </button>

      {/* Tombol Navigasi "Selanjutnya" */}
      <button 
        className="absolute top-1/2 right-0 md:-right-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-slate-800 rounded-full p-2 shadow-md transition z-10"
        onClick={scrollNext}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  )
}