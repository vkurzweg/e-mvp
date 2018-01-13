import Cart from 'assets/images/cart_jordy_36.png';
import CartActive from 'assets/images/cart_white.png';
import Chat from 'assets/images/chat_jordy_32.png';
import ChatActive from 'assets/images/chat_white.png';
import Party from 'assets/images/popper_jordy_32.png';
import Vendors from 'assets/images/vendors_white.png';
import Profile from 'assets/images/profile_jordy_32.png';
import ProfileActive from 'assets/images/user_white.png';

export const navMobileLinks = [
  { url: '/vendors', name: 'Vendors', alt: "blue party emoji", src: Party, src_active: Vendors },
  { url: '/messages', name: 'Messages', alt: "blue chat emoji", src: Chat, src_active: ChatActive },
  { url: '/orders', name: 'Orders', alt: "blue cart emoji", src: Cart, src_active: CartActive },
  { url: '/profile', name: 'Profile', alt: "blue user emoji", src: Profile, src_active: ProfileActive },
]
