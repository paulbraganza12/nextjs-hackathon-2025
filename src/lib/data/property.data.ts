// TODO move this type
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
export const propertyData: PropertyType[] = [
  {
    id: 1,
    name: "Cottage Serenity",
    description: "Charming cottage in countryside.",
    imageUrls: [
      "https://a0.muscache.com/im/pictures/e636f3b7-20f1-4056-815c-6634ee3a5753.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/49633506/5610474b_original.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-3945272/original/423ae776-52d4-4671-8cd3-332de9684431.jpeg?im_w=720",
    ],
    price: "£450",
    rating: 4.51,
    nextAvailableWeek: "14 - 20 Jul",
    tag: "Guest favourite",
  },
  {
    id: 2,
    name: "Cityscape View",
    description: "Modern apartment with city views.",
    imageUrls: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-3945272/original/95036942-4c9f-4b2c-8e17-e8fc9ee4bf4a.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/8c8d65de-ef0c-4033-8e3f-ab5dfe7b6121.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/60479978/5b30cafd_original.jpg?im_w=720",
    ],
    price: "£375",
    rating: 4.23,
    nextAvailableWeek: "21 - 27 Jul",
    tag: "Best seller",
  },
  {
    id: 3,
    name: "Villa Oasis",
    description: "Spacious villa with private pool.",
    imageUrls: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-3945272/original/423ae776-52d4-4671-8cd3-332de9684431.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/e636f3b7-20f1-4056-815c-6634ee3a5753.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/49633385/d7beb749_original.jpg?im_w=720",
    ],
    price: "£500",
    rating: 4.92,
    nextAvailableWeek: "28 Jul - 03 Aug",
  },

  {
    id: 5,
    name: "Oceanfront Luxury",
    description: "Luxurious penthouse with ocean views.",
    imageUrls: [
      "https://a0.muscache.com/im/pictures/53585142/7e35bf74_original.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-3945272/original/bdb77a89-d180-4d1b-ad48-389d2065362a.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/81e7bf0c-3933-4fd0-9eb3-d78d878b8f7c.jpg?im_w=720",
    ],
    price: "£475",
    rating: 4.85,
    nextAvailableWeek: "11 - 17 Aug",
  },
  {
    id: 6,
    name: "Studio Haven",
    description: "Cozy studio apartment for couples.",
    imageUrls: [
      "https://a0.muscache.com/im/pictures/91271661/01c23310_original.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/e636f3b7-20f1-4056-815c-6634ee3a5753.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-3945272/original/2ec96746-9adb-41fe-9308-11a9b258d38a.jpeg?im_w=720",
    ],
    price: "£320",
    rating: 4.39,
    nextAvailableWeek: "18 - 24 Aug",
  },
  {
    id: 7,
    name: "Historic Charm",
    description: "Elegant townhouse in old town.",
    imageUrls: [
      "https://a0.muscache.com/im/pictures/airflow/Hosting-669261352206188843/original/0393fd6a-8a1c-42ff-bc50-57726e72f83d.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/49633557/399c6ec6_original.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/53585294/d0d07ed5_original.jpg?im_w=720",
    ],
    price: "£410",
    rating: 4.69,
    nextAvailableWeek: "25 - 31 Aug",
  },
  {
    id: 8,
    name: "Garden Bungalow",
    description: "Secluded bungalow with lush garden.",
    imageUrls: [
      "https://a0.muscache.com/im/pictures/91271661/01c23310_original.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/49633506/5610474b_original.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/53585294/d0d07ed5_original.jpg?im_w=720",
    ],
    price: "£395",
    rating: 4.47,
    nextAvailableWeek: "01 - 07 Sep",
  },
  {
    id: 9,
    name: "Urban Loft",
    description: "Stylish loft in trendy area.",
    imageUrls: [
      "https://a0.muscache.com/im/pictures/53585142/7e35bf74_original.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/53585256/f96f033a_original.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-3945272/original/d40c8a35-1639-4a9e-807c-fb5f6f023c58.jpeg?im_w=720",
    ],
    price: "£425",
    rating: 4.11,
    nextAvailableWeek: "08 - 14 Sep",
  },
  {
    id: 10,
    name: "Farmhouse Elegance",
    description: "Renovated farmhouse with charm.",
    imageUrls: [
      "https://a0.muscache.com/im/pictures/91271661/01c23310_original.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/53585142/7e35bf74_original.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-3945272/original/d40c8a35-1639-4a9e-807c-fb5f6f023c58.jpeg?im_w=720",
    ],
    price: "£495",
    rating: 4.75,
    nextAvailableWeek: "15 - 21 Sep",
    tag: "Best seller",
  },
  {
    id: 11,
    name: "Seaside Cottage",
    description: "Quaint cottage near the sea.",
    imageUrls: [
      "https://a0.muscache.com/im/pictures/53585294/d0d07ed5_original.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-3945272/original/bdb77a89-d180-4d1b-ad48-389d2065362a.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/53585256/f96f033a_original.jpg?im_w=720",
    ],
    price: "£380",
    rating: 4.62,
    nextAvailableWeek: "22 - 28 Sep",
  },
  {
    id: 12,
    name: "Mountain Lodge",
    description: "Cozy lodge in mountains.",
    imageUrls: [
      "https://a0.muscache.com/im/pictures/53585256/f96f033a_original.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/8c8d65de-ef0c-4033-8e3f-ab5dfe7b6121.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/81e7bf0c-3933-4fd0-9eb3-d78d878b8f7c.jpg?im_w=720",
    ],
    price: "£420",
    rating: 4.88,
    nextAvailableWeek: "29 Sep - 05 Oct",
    tag: "Hidden gem",
  },
  {
    id: 13,
    name: "Desert Oasis",
    description: "Luxury villa in desert.",
    imageUrls: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-3945272/original/d40c8a35-1639-4a9e-807c-fb5f6f023c58.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/53585142/7e35bf74_original.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/49633557/399c6ec6_original.jpg?im_w=720",
    ],
    price: "£465",
    rating: 4.71,
    nextAvailableWeek: "06 - 12 Oct",
  },
];
