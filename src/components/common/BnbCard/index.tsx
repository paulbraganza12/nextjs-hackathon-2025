import { ImageCarousel } from "../ImageCarousel";
import { BnbCardProps } from "./BnbCard";

export default function BnbCard({ property }: BnbCardProps) {
  return (
    <ImageCarousel
      images={property.imageUrls}
      tag={property.tag}
    >
      <div className="px-4 pt-3">
        <div className="mb-1 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">{property.name}</h3>
          <div className="flex items-center text-sm text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="mr-1 h-4 w-4 text-gray-800"
            >
              <path
                fill-rule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.334 2.01a1.5 1.5 0 001.405-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.753-.382-1.83-4.401z"
                clip-rule="evenodd"
              />
            </svg>
            {property.rating}
          </div>
        </div>
        <p className="text-sm text-gray-600">{property.description}</p>
        <p className="mb-1 text-sm text-gray-600">{property.nextAvailableWeek}</p>
        <p className="text-base font-medium text-gray-900 underline">{property.price} total</p>
      </div>
    </ImageCarousel>
  );
}
