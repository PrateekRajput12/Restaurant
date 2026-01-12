
export type Category = 'Starters' | 'Main Course' | 'Desserts' | 'Drinks';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  isChefSpecial?: boolean;
}

export interface ReservationData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  requests: string;
}

export interface ContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
