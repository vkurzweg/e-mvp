import Placeholder from 'components/vendorsCategory/Vendor/placeholder.jpg';
import Shrimp from './shrimp.jpg';
import PartyTray from './partytray.jpg';
import Tartlettes from './tartlettes.jpg';


const vendors = [
  {
    categoryName: 'Catering',
    vendorName: 'ABC Catering',
    vendorSrc: Placeholder,
    vendorId: 1,
    url: '/vendors/caterers/1',
    budget: 1,
    description: 'Family-owned catering shop located in Santa Monica.',
    location: {
      address: '929 N Colorado Ave',
      city: 'Santa Monica',
      state: 'CA',
      zip: '90401',
      lat: 34.024212,
      lng: -118.496475,
    },
    deliveryArea: [90401, 90405, 90403, 90404],
    products: [
      { productName: 'Peppery Cocktail Shrimp', productSize: 'Large Tray', productFeeds: '10-15', productPrice: 50, productSrc: Shrimp, productDesc: 'These shrimp are delicious.', productId: 11 },
      { productName: 'Party Tray', productSize: 'Large Tray', productFeeds: '10-15', productPrice: 50, productSrc: PartyTray, productDesc: 'This party tray is delicious.', productId: 12 },
      { productName: 'Tartlettes', productSize: 'Small Tray', productFeeds: '5-8', productPrice: 30, productSrc: Tartlettes, productDesc: 'These tartlettes are delicious.', productId: 13 },
    ],
  }, {
    categoryName: 'Catering',
    vendorName: 'XYZ Catering',
    vendorSrc: Placeholder,
    vendorId: 2,
    url: '/vendors/caterers/2',
    budget: 2,
    description: 'Family-owned catering shop located in Santa Monica.',
    location: {
      address: '929 N Colorado Ave',
      city: 'Santa Monica',
      state: 'CA',
      zip: '90401',
      lat: 35.024212,
      lng: -118.496475,
    },
    deliveryArea: [90401, 90405, 90403, 90404],
    products: [
      { productName: 'Peppery Cocktail Shrimp', productSize: 'Large Tray', productFeeds: '10-15', productPrice: 50, productSrc: Shrimp, productDesc: 'These shrimp are delicious.', productId: 11 },
      { productName: 'Party Tray', productSize: 'Large Tray', productFeeds: '10-15', productPrice: 50, productSrc: PartyTray, productDesc: 'This party tray is delicious.', productId: 12 },
      { productName: 'Tartlettes', productSize: 'Small Tray', productFeeds: '5-8', productPrice: 30, productSrc: Tartlettes, productDesc: 'These tartlettes are delicious.', productId: 13 },
    ],
  }, {
    categoryName: 'Catering',
    vendorName: 'More Catering',
    vendorSrc: Placeholder,
    vendorId: 3,
    url: '/vendors/caterers/3',
    budget: 3,
    description: 'Family-owned catering shop located in Santa Monica.',
    location: {
      address: '929 N Colorado Ave',
      city: 'Santa Monica',
      state: 'CA',
      zip: '90401',
      lat: 33.024212,
      lng: -118.496475,
    },
    deliveryArea: [90401, 90405, 90403, 90404],
    products: [
      { productName: 'Peppery Cocktail Shrimp', productSize: 'Large Tray', productFeeds: '10-15', productPrice: 50, productSrc: Shrimp, productDesc: 'These shrimp are delicious.', productId: 11 },
      { productName: 'Party Tray', productSize: 'Large Tray', productFeeds: '10-15', productPrice: 50, productSrc: PartyTray, productDesc: 'This party tray is delicious.', productId: 12 },
      { productName: 'Tartlettes', productSize: 'Small Tray', productFeeds: '5-8', productPrice: 30, productSrc: Tartlettes, productDesc: 'These tartlettes are delicious.', productId: 13 },
    ],
  }, {
    categoryName: 'Catering',
    vendorName: 'All the Catering',
    vendorSrc: Placeholder,
    vendorId: 4,
    url: '/vendors/caterers/4',
    budget: 4,
    description: 'Family-owned catering shop located in Santa Monica.',
    location: {
      address: '929 N Colorado Ave',
      city: 'Santa Monica',
      state: 'CA',
      zip: '90401',
      lat: 34.024212,
      lng: -118.6,
    },
    deliveryArea: [90401, 90405, 90403, 90404],
    products: [
      { productName: 'Peppery Cocktail Shrimp', productSize: 'Large Tray', productFeeds: '10-15', productPrice: 50, productSrc: Shrimp, productDesc: 'These shrimp are delicious.', productId: 11 },
      { productName: 'Party Tray', productSize: 'Large Tray', productFeeds: '10-15', productPrice: 50, productSrc: PartyTray, productDesc: 'This party tray is delicious.', productId: 12 },
      { productName: 'Tartlettes', productSize: 'Small Tray', productFeeds: '5-8', productPrice: 30, productSrc: Tartlettes, productDesc: 'These tartlettes are delicious.', productId: 13 },
    ],
  },
];

export default vendors;
