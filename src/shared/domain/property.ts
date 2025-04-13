export type PropertyType = {
  id: number;
  name: string;
  description: string;
  imageUrls: string[];
  price: string;
  rating: number;
  nextAvailableWeek?: string;
  tag?: string;
};
