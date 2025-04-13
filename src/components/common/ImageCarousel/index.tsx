"use client";

import {
  Carousel,
  CarouselContent,
  CarouselIndicator,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ImageCarouselProps } from "./image-carousel";

export const ImageCarousel = ({ images, children, tag }: ImageCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <div className="group relative flex h-[400px] cursor-pointer flex-col overflow-hidden rounded-xl">
        {tag && (
          <div className="absolute top-3 left-3 z-10 rounded-full bg-white/80 px-3 py-1 text-sm font-medium text-gray-800 backdrop-blur-sm">
            {tag}
          </div>
        )}
        <div className="h-full">
          <Carousel
            setApi={setApi}
            className="h-full w-full"
          >
            <CarouselContent className="h-full">
              {images.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="flex items-center"
                >
                  <div className="relative aspect-[4/3] w-full max-w-sm sm:max-w-md md:max-w-lg lg:aspect-[3/3] lg:max-w-xl">
                    <Image
                      src={image}
                      alt="Gloucestershire, UK - Isis Lake"
                      fill
                      priority
                      className="rounded-xl object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {current > 1 && (
              <CarouselPrevious className="left-[10px] cursor-pointer opacity-0 transition-opacity duration-200 group-hover:opacity-70 hover:scale-[1.1] hover:bg-white hover:text-gray-900 hover:opacity-90" />
            )}
            {current < count && (
              <CarouselNext className="right-[10px] cursor-pointer opacity-0 transition-opacity duration-200 group-hover:opacity-70 hover:scale-[1.1] hover:bg-white hover:text-gray-900 hover:opacity-90" />
            )}
            <CarouselIndicator className="flex justify-center gap-2">
              {[...Array(count)].map((_, index) => (
                <span
                  key={index}
                  className={`h-2 w-2 rounded-full ${current === index + 1 ? "bg-white" : "bg-gray-300"}`}
                ></span>
              ))}
            </CarouselIndicator>
          </Carousel>
        </div>
        {children}
      </div>
    </>
  );
};
