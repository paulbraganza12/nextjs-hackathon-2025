import { PropertyType } from "@/shared/domain/property";
import { PropertyTypeJson } from "./responses";

export const mapProperty = (property: PropertyTypeJson): PropertyType => {
  return {
    id: property.id,
    name: property.name,
    description: property.description,
    imageUrls: property.imageUrls,
    price: property.price,
    rating: property.rating,
    nextAvailableWeek: property.nextAvailableWeek,
    tag: property.tag,
  };
};

export const mapProperties = (properties: PropertyTypeJson[]): PropertyType[] => {
  return properties.map(mapProperty);
};
