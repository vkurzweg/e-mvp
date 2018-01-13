import Caterer from './caterer.jpg';
import Bakery from './bakery.jpg';
import DJ from './dj.png';
import Mixologist from './bartender.jpg';
import Florist from './florist.png';
import Party from './party_supplies.jpg';
import FoodTruck from './foodtruck.jpg';
import Restaurant from './restaurant.jpg';
import Cafe from './cafe.jpg';
import Caviar from './caviar.jpg';
import Liquor from './liquor.jpg';
import Organic from './organic.jpg';
import IceCream from './icecream.jpg';
import EventSpace from './eventspace.jpg';
import Staff from './staff.jpg';
import Kosher from './kosher.jpg';
import Patisserie from './patisserie.jpg';
import Beverage from './beverage.jpg';
import Beers from 'assets/images/beers.png';
import Corporate from 'assets/images/corporate.jpg';



const OccasionCategories = {
  birthday: [
    [
      { src: Caterer, categoryName: 'Catering', alt: 'Caterer', url: '/vendors/caterers', isEmpty: false },
      { src: FoodTruck, categoryName: 'Food Trucks', alt: 'Food truck', url: '/vendors/foodtrucks', isEmpty: false },
      { src: Beers, categoryName: 'Breweries', alt: 'Beer', url: '/vendors/breweries', isEmpty: true },
    ],
    [
      { src: Florist, categoryName: 'Florists', alt: 'Florist', url: '/vendors/florists', isEmpty: false },
      { src: Caviar, categoryName: 'Caviar Shops', alt: 'Caviar', url: '/vendors/caviar', isEmpty: true },
      { src: Party, categoryName: 'Party Rentals', alt: 'Party supplies', url: '/vendors/partysupplies', isEmpty: false },
    ],
    [
      { src: Organic, categoryName: 'Organic', alt: 'Organic food', isEmpty: true },
      { src: Bakery, categoryName: 'Bakeries', alt: 'Bakery', url: '/vendors/bakeries', isEmpty: true },
      { src: DJ, categoryName: 'DJs', alt: 'DJ headphones', url: '/vendors/djs', isEmpty: true },
    ],
    [
      { src: Liquor, categoryName: 'Liquor', alt: 'Liquor', url: '/vendors/liquor', isEmpty: true },
      { src: IceCream, categoryName: 'Ice Cream', alt: 'Ice cream', isEmpty: true },
      { src: EventSpace, categoryName: 'Event Spaces', alt: 'Event space', url: '/vendors/eventspaces', isEmpty: true },
    ],
    [
      { src: Restaurant, categoryName: 'Restaurants', alt: 'Restaurant', url: '/vendors/restaurants', isEmpty: true },
      { src: Staff, categoryName: 'Staffing', alt: 'Waiter', isEmpty: true },
      { src: Mixologist, categoryName: 'Mixologists', alt: 'Mixologist', url: '/vendors/mixologists', isEmpty: true },
    ],
  ],
  kidBirthday: [
    [
      { src: Caterer, categoryName: 'Catering', alt: 'Caterer', url: '/vendors/caterers', isEmpty: false },
      { src: Bakery, categoryName: 'Bakeries', alt: 'Bakery', url: '/vendors/bakeries', isEmpty: true },
      { src: FoodTruck, categoryName: 'Food Trucks', alt: 'Food truck', url: '/vendors/foodtrucks', isEmpty: false },
    ],
    [
      { src: Party, categoryName: 'Party Rentals', alt: 'Party supplies', url: '/vendors/partysupplies', isEmpty: false },
      { src: Restaurant, categoryName: 'Restaurants', alt: 'Restaurant', url: '/vendors/restaurants', isEmpty: true },
      { src: IceCream, categoryName: 'Ice Cream', alt: 'Ice cream', url: '/vendors/icecream', isEmpty: true },
    ],
    [
      { src: Florist, categoryName: 'Florists', alt: 'Florist', url: '/vendors/florists', isEmpty: false },
      { src: EventSpace, categoryName: 'Event Spaces', alt: 'Event Space', url: '/vendors/eventspaces', isEmpty: true },
      { src: Cafe, categoryName: 'Cafes', alt: 'Cafe', url: '/vendors/cafes', isEmpty: true },
    ],
    [
      { src: Kosher, categoryName: 'Kosher', alt: 'Kosher food', url: '/vendors/kosher', isEmpty: true },
      { src: Organic, categoryName: 'Organic', alt: 'Organic food', isEmpty: true },
      { src: Staff, categoryName: 'Staffing', alt: 'Waiter', url: '/vendors/staffing', isEmpty: true },
    ],
    [
      { src: Patisserie, categoryName: 'Patisserie', alt: 'Patisserie', url: '/vendors/patisseries', isEmpty: true },
      { src: Beverage, categoryName: 'Beverage', alt: 'Beverage', url: '/vendors/beverages', isEmpty: true },
    ],
  ],
  corporate: [
    [
      { src: Caterer, categoryName: 'Catering', alt: 'Caterer', url: '/vendors/caterers', isEmpty: false },
      { src: Restaurant, categoryName: 'Restaurants', alt: 'Restaurant', url: '/vendors/restaurants', isEmpty: true },
      { src: Corporate, categoryName: 'Corporate', alt: 'Corporate Party', url: '/vendors/corporate', isEmpty: true },
    ],
    [
      { src: Party, categoryName: 'Party Rentals', alt: 'Party supplies', url: '/vendors/partysupplies', isEmpty: false },
      { src: FoodTruck, categoryName: 'Food Trucks', alt: 'Food truck', url: '/vendors/foodtrucks', isEmpty: false },
      { src: Bakery, categoryName: 'Bakeries', alt: 'Bakery', url: '/vendors/bakeries', isEmpty: true },
    ],
    [
      { src: DJ, categoryName: 'DJs', alt: 'DJ headphones', url: '/vendors/djs', isEmpty: true },
      { src: Beverage, categoryName: 'Beverage', alt: 'Beverage', url: '/vendors/beverages', isEmpty: true },
      { src: Florist, categoryName: 'Florists', alt: 'Florist', url: '/vendors/florists', isEmpty: false },
    ],
    [
      { src: Patisserie, categoryName: 'Patisserie', alt: 'Patisserie', url: '/vendors/patisseries', isEmpty: true },
      { src: Staff, categoryName: 'Staffing', alt: 'Waiter', url: '/vendors/staffing', isEmpty: true },
      { src: EventSpace, categoryName: 'Event Spaces', alt: 'Event Space', url: '/vendors/eventspaces', isEmpty: true },
    ],
    [
      { src: Cafe, categoryName: 'Cafes', alt: 'Cafe', url: '/vendors/cafes', isEmpty: true },
      { src: Beers, categoryName: 'Breweries', alt: 'Beer', url: '/vendors/breweries', isEmpty: true },
    ],
  ],
  babyShower: [
    [
      { src: Caterer, categoryName: 'Catering', alt: 'Caterer', url: '/vendors/caterers', isEmpty: false },
      { src: Party, categoryName: 'Party Rentals', alt: 'Party supplies', url: '/vendors/partysupplies', isEmpty: false },
      { src: Patisserie, categoryName: 'Patisserie', alt: 'Patisserie', url: '/vendors/patisseries', isEmpty: true },
    ],
    [
      { src: FoodTruck, categoryName: 'Food Trucks', alt: 'Food truck', url: '/vendors/foodtrucks', isEmpty: false },
      { src: Restaurant, categoryName: 'Restaurants', alt: 'Restaurant', url: '/vendors/restaurants', isEmpty: true },
      { src: Cafe, categoryName: 'Cafes', alt: 'Cafe', url: '/vendors/cafes', isEmpty: true },
    ],
    [
      { src: Beverage, categoryName: 'Beverage', alt: 'Beverage', url: '/vendors/beverages', isEmpty: true },
      { src: IceCream, categoryName: 'Ice Cream', alt: 'Ice cream', url: '/vendors/icecream', isEmpty: true },
      { src: Bakery, categoryName: 'Bakeries', alt: 'Bakery', url: '/vendors/bakeries', isEmpty: true },
    ],
    [
      { src: Caviar, categoryName: 'Caviar Shops', alt: 'Caviar', url: '/vendors/caviar', isEmpty: true },
      { src: Staff, categoryName: 'Staffing', alt: 'Waiter', url: '/vendors/staffing', isEmpty: true },
      { src: EventSpace, categoryName: 'Event Spaces', alt: 'Event Space', url: '/vendors/eventspaces', isEmpty: true },
    ],
    [
      { src: Florist, categoryName: 'Florists', alt: 'Florist', url: '/vendors/florists', isEmpty: false },
      { src: Kosher, categoryName: 'Kosher', alt: 'Kosher food', url: '/vendors/kosher', isEmpty: true },
    ],
  ],
  default: [
    [
      { src: Caterer, categoryName: 'Catering', alt: 'Caterer', url: '/vendors/caterers', isEmpty: false },
      { src: Restaurant, categoryName: 'Restaurants', alt: 'Restaurant', url: '/vendors/restaurants', isEmpty: true },
      { src: FoodTruck, categoryName: 'Food Trucks', alt: 'Food truck', url: '/vendors/foodtrucks', isEmpty: false },
    ],
    [
      { src: Florist, categoryName: 'Florists', alt: 'Florist', url: '/vendors/florists', isEmpty: false },
      { src: Party, categoryName: 'Party Rentals', alt: 'Party supplies', url: '/vendors/partysupplies', isEmpty: false },
      { src: Beers, categoryName: 'Breweries', alt: 'Beer', url: '/vendors/breweries', isEmpty: true },
    ],
    [
      { src: Caviar, categoryName: 'Caviar Shops', alt: 'Caviar', url: '/vendors/caviar', isEmpty: true },
      { src: Corporate, categoryName: 'Corporate', alt: 'Corporate Party', url: '/vendors/corporate', isEmpty: true },
      { src: DJ, categoryName: 'DJs', alt: 'DJ headphones', url: '/vendors/djs', isEmpty: true },
    ],
    [
      { src: Bakery, categoryName: 'Bakeries', alt: 'Bakery', url: '/vendors/bakeries', isEmpty: true },
      { src: IceCream, categoryName: 'Ice Cream', alt: 'Ice cream', url: '/vendors/icecream', isEmpty: true },
      { src: EventSpace, categoryName: 'Event Spaces', alt: 'Event space', url: '/vendors/eventspaces', isEmpty: true },
    ],
    [
      { src: Cafe, categoryName: 'Cafes', alt: 'Cafe', url: '/vendors/cafes', isEmpty: true },
      { src: Staff, categoryName: 'Staffing', alt: 'Waiter', url: '/vendors/staffing', isEmpty: true },
      { src: Mixologist, categoryName: 'Mixologists', alt: 'Mixologist', url: '/vendors/mixologists', isEmpty: true },
    ],
    [
      { src: Kosher, categoryName: 'Kosher', alt: 'Kosher food', url: '/vendors/kosher', isEmpty: true },
      { src: Patisserie, categoryName: 'Patisserie', alt: 'Patisserie', url: '/vendors/patisseries', isEmpty: true },
      { src: Beverage, categoryName: 'Beverage', alt: 'Beverage', url: '/vendors/beverages', isEmpty: true },
    ],
    [
      { src: Liquor, categoryName: 'Liquor', alt: 'Liquor', url: '/vendors/liquor', isEmpty: true },
      { src: Organic, categoryName: 'Organic', alt: 'Organic food', url: '/vendors/organic', isEmpty: true },
    ],
  ],
};

export default OccasionCategories;
