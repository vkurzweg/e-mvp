
import {
  SET_OCCASION,
  // SET_DATE,
  // SET_ZIP,
} from './constants';

export function setOccasion(occasion) {
  return { type: SET_OCCASION, occasion };
}
