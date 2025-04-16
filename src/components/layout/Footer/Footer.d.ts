export interface TabList {
  category: string;
  items: {
    place: string;
    type?: string;
  }[];
}

export interface MenuItems {
  title: string;
  items: {
    title: string;
    link: string;
  }[];
}
