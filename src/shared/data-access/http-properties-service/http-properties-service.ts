import { propertyData } from "@/app/api/mocks/property.mock";
import { mapProperties } from "./mapping";

export const getRecommendedProperties = async () => {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 100));
    const properties = mapProperties(propertyData);
    return properties;
  } catch (e) {
    console.error("Error in getRecommendedProperties: ", e);
    return [];
  }
};
