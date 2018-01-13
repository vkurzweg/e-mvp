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
      { src: Caterer, categoryName: 'Catering', alt: 'Caterer', url: '/vendors/caterers' },
      { src: Restaurant, categoryName: 'Restaurants', alt: 'Restaurant', url: '/vendors/restaurants' },
      { src: Cafe, categoryName: 'Cafes', alt: 'Cafe', url: '/vendors/cafes' },
      { src: Caviar, categoryName: 'Caviar Shops', alt: 'Caviar', url: '/vendors/caviar' },
      { src: FoodTruck, categoryName: 'Food Trucks', alt: 'Food truck', url: '/vendors/foodtrucks' },
      { src: Liquor, categoryName: 'Liquor', alt: 'Liquor', url: '/vendors/liquor' },
      { src: Organic, categoryName: 'Organic', alt: 'Organic food' },
      { src: Bakery, categoryName: 'Bakeries', alt: 'Bakery', url: '/vendors/bakeries' },
      { src: DJ, categoryName: 'DJs', alt: 'DJ headphones', url: '/vendors/djs' },
      { src: IceCream, categoryName: 'Ice Cream', alt: 'Ice cream' },
      { src: EventSpace, categoryName: 'Event Spaces', alt: 'Event space', url: '/vendors/eventspaces' },
      { src: Florist, categoryName: 'Florists', alt: 'Florist', url: '/vendors/florists' },
      { src: Party, categoryName: 'Party Rentals', alt: 'Party supplies', url: '/vendors/partysupplies' },
      { src: Staff, categoryName: 'Staffing', alt: 'Waiter' },
      { src: Mixologist, categoryName: 'Mixologists', alt: 'Mixologist', url: '/vendors/mixologists' },
      { src: Beers, categoryName: 'Breweries', alt: 'Beer', url: '/vendors/breweries' },
  ],
  kidBirthday: [
      { src: EventSpace, categoryName: 'Event Spaces', alt: 'Event Space', url: '/vendors/eventspaces' },
      { src: Caterer, categoryName: 'Catering', alt: 'Caterer', url: '/vendors/caterers' },
      { src: Bakery, categoryName: 'Bakeries', alt: 'Bakery', url: '/vendors/bakeries' },
      { src: Kosher, categoryName: 'Kosher', alt: 'Kosher food', url: '/vendors/kosher' },
      { src: Restaurant, categoryName: 'Restaurants', alt: 'Restaurant', url: '/vendors/restaurants' },
      { src: IceCream, categoryName: 'Ice Cream', alt: 'Ice cream', url: '/vendors/icecream' },
      { src: FoodTruck, categoryName: 'Food Trucks', alt: 'Food truck', url: '/vendors/foodtrucks' },
      { src: Patisserie, categoryName: 'Patisserie', alt: 'Patisserie', url: '/vendors/patisseries' },
      { src: Cafe, categoryName: 'Cafes', alt: 'Cafe', url: '/vendors/cafes' },
      { src: Organic, categoryName: 'Organic', alt: 'Organic food' },
      { src: Party, categoryName: 'Party Rentals', alt: 'Party supplies', url: '/vendors/partysupplies' },
      { src: Staff, categoryName: 'Staffing', alt: 'Waiter', url: '/vendors/staffing' },
      { src: Florist, categoryName: 'Florists', alt: 'Florist', url: '/vendors/florists' },
      { src: Beverage, categoryName: 'Beverage', alt: 'Beverage', url: '/vendors/beverages' },
  ],
  corporate: [
      { src: Caterer, categoryName: 'Catering', alt: 'Caterer', url: '/vendors/caterers' },
      { src: Restaurant, categoryName: 'Restaurants', alt: 'Restaurant', url: '/vendors/restaurants' },
      { src: Cafe, categoryName: 'Cafes', alt: 'Cafe', url: '/vendors/cafes' },
      { src: DJ, categoryName: 'DJs', alt: 'DJ headphones', url: '/vendors/djs' },
      { src: Bakery, categoryName: 'Bakeries', alt: 'Bakery', url: '/vendors/bakeries' },
      { src: Patisserie, categoryName: 'Patisserie', alt: 'Patisserie', url: '/vendors/patisseries' },
      { src: Beverage, categoryName: 'Beverage', alt: 'Beverage', url: '/vendors/beverages' },
      { src: FoodTruck, categoryName: 'Food Trucks', alt: 'Food truck', url: '/vendors/foodtrucks' },
      { src: Florist, categoryName: 'Florists', alt: 'Florist', url: '/vendors/florists' },
      { src: Party, categoryName: 'Party Rentals', alt: 'Party supplies', url: '/vendors/partysupplies' },
      { src: Staff, categoryName: 'Staffing', alt: 'Waiter', url: '/vendors/staffing' },
      { src: EventSpace, categoryName: 'Event Spaces', alt: 'Event Space', url: '/vendors/eventspaces' },
      { src: Beers, categoryName: 'Breweries', alt: 'Beer', url: '/vendors/breweries' },
      { src: Corporate, categoryName: 'Corporate', alt: 'Corporate Party', url: '/vendors/corporate' },
  ],
  babyShower: [
      { src: Bakery, categoryName: 'Bakeries', alt: 'Bakery', url: '/vendors/bakeries' },
      { src: Patisserie, categoryName: 'Patisserie', alt: 'Patisserie', url: '/vendors/patisseries' },
      { src: Beverage, categoryName: 'Beverage', alt: 'Beverage', url: '/vendors/beverages' },
      { src: Caterer, categoryName: 'Catering', alt: 'Caterer', url: '/vendors/caterers' },
      { src: Restaurant, categoryName: 'Restaurants', alt: 'Restaurant', url: '/vendors/restaurants' },
      { src: Cafe, categoryName: 'Cafes', alt: 'Cafe', url: '/vendors/cafes' },
      { src: IceCream, categoryName: 'Ice Cream', alt: 'Ice cream', url: '/vendors/icecream' },
      { src: FoodTruck, categoryName: 'Food Trucks', alt: 'Food truck', url: '/vendors/foodtrucks' },
      { src: Caviar, categoryName: 'Caviar Shops', alt: 'Caviar', url: '/vendors/caviar' },
      { src: Party, categoryName: 'Party Rentals', alt: 'Party supplies', url: '/vendors/partysupplies' },
      { src: Staff, categoryName: 'Staffing', alt: 'Waiter', url: '/vendors/staffing' },
      { src: EventSpace, categoryName: 'Event Spaces', alt: 'Event Space', url: '/vendors/eventspaces' },
      { src: Florist, categoryName: 'Florists', alt: 'Florist', url: '/vendors/florists' },
      { src: Kosher, categoryName: 'Kosher', alt: 'Kosher food', url: '/vendors/kosher' },
  ],
  default: [
      { src: Caterer, categoryName: 'Catering', alt: 'Caterer', url: '/vendors/caterers' },
      { src: Beers, categoryName: 'Breweries', alt: 'Beer', url: '/vendors/breweries' },
      { src: Corporate, categoryName: 'Corporate', alt: 'Corporate Party', url: '/vendors/corporate' },
      { src: Restaurant, categoryName: 'Restaurants', alt: 'Restaurant', url: '/vendors/restaurants' },
      { src: Cafe, categoryName: 'Cafes', alt: 'Cafe', url: '/vendors/cafes' },
      { src: Caviar, categoryName: 'Caviar Shops', alt: 'Caviar', url: '/vendors/caviar' },
      { src: FoodTruck, categoryName: 'Food Trucks', alt: 'Food truck', url: '/vendors/foodtrucks' },
      { src: Liquor, categoryName: 'Liquor', alt: 'Liquor', url: '/vendors/liquor' },
      { src: Organic, categoryName: 'Organic', alt: 'Organic food', url: '/vendors/organic' },
      { src: Bakery, categoryName: 'Bakeries', alt: 'Bakery', url: '/vendors/bakeries' },
      { src: DJ, categoryName: 'DJs', alt: 'DJ headphones', url: '/vendors/djs' },
      { src: IceCream, categoryName: 'Ice Cream', alt: 'Ice cream', url: '/vendors/icecream' },
      { src: EventSpace, categoryName: 'Event Spaces', alt: 'Event space', url: '/vendors/eventspaces' },
      { src: Florist, categoryName: 'Florists', alt: 'Florist', url: '/vendors/florists' },
      { src: Party, categoryName: 'Party Rentals', alt: 'Party supplies', url: '/vendors/partysupplies' },
      { src: Staff, categoryName: 'Staffing', alt: 'Waiter', url: '/vendors/staffing' },
      { src: Mixologist, categoryName: 'Mixologists', alt: 'Mixologist', url: '/vendors/mixologists' },
      { src: Kosher, categoryName: 'Kosher', alt: 'Kosher food', url: '/vendors/kosher' },
      { src: Patisserie, categoryName: 'Patisserie', alt: 'Patisserie', url: '/vendors/patisseries' },
      { src: Beverage, categoryName: 'Beverage', alt: 'Beverage', url: '/vendors/beverages' },
  ],
};

export default OccasionCategories;
