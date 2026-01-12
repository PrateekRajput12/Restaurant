
import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Truffle Burrata',
    description: 'Creamy burrata, shaved black truffle, arugula, aged balsamic reduction.',
    price: 24,
    category: 'Starters',
    image: 'https://picsum.photos/seed/burrata/600/400',
    isChefSpecial: true,
  },
  {
    id: '2',
    name: 'Wagyu Beef Carpaccio',
    description: 'Thinly sliced wagyu, capers, parmesan crisps, truffle oil.',
    price: 28,
    category: 'Starters',
    image: 'https://picsum.photos/seed/wagyu/600/400',
  },
  {
    id: '3',
    name: 'Pan-Seared Sea Bass',
    description: 'Chilean sea bass, lemon-butter foam, asparagus, saffron risotto.',
    price: 42,
    category: 'Main Course',
    image: 'https://picsum.photos/seed/seabass/600/400',
    isChefSpecial: true,
  },
  {
    id: '4',
    name: 'Herb Crusted Rack of Lamb',
    description: 'New Zealand lamb, mint pea puree, fondant potatoes, red wine jus.',
    price: 48,
    category: 'Main Course',
    image: 'https://picsum.photos/seed/lamb/600/400',
  },
  {
    id: '5',
    name: 'Deconstructed Tiramisu',
    description: 'Mascarpone mousse, espresso-soaked ladyfingers, gold leaf.',
    price: 16,
    category: 'Desserts',
    image: 'https://picsum.photos/seed/tiramisu/600/400',
  },
  {
    id: '6',
    name: 'Valrhona Chocolate Fondant',
    description: 'Warm dark chocolate cake, raspberry coulis, vanilla bean gelato.',
    price: 18,
    category: 'Desserts',
    image: 'https://picsum.photos/seed/chocolate/600/400',
    isChefSpecial: true,
  },
  {
    id: '7',
    name: 'Signature Old Fashioned',
    description: 'Small-batch bourbon, house-made bitters, burnt orange peel.',
    price: 18,
    category: 'Drinks',
    image: 'https://picsum.photos/seed/cocktail/600/400',
  },
  {
    id: '8',
    name: 'Hibiscus Garden Fizz',
    description: 'Non-alcoholic botanical blend, hibiscus syrup, soda, fresh mint.',
    price: 14,
    category: 'Drinks',
    image: 'https://picsum.photos/seed/mocktail/600/400',
  },
];

export const NAVIGATION_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Reservation', href: '#reservation' },
  { name: 'Contact', href: '#contact' },
];
