/*
 *
 * VendorPage reducer
 *
 */
import { fromJS, toJS } from 'immutable';
import {
  SET_PRODUCT_QUANTITY,
  SET_PRODUCT_TYPE,
  SET_ORDER_SLIP,
  REMOVE_ORDER_SLIP_ITEM,
  OPEN_MODAL,
  CLOSE_MODAL,
  OPEN_ERROR_MODAL,
  CLOSE_ERROR_MODAL,
  CLEAR_ORDER_SLIP,
  SET_PRODUCT_NOTE,
  SET_DELIVERY,
  CLEAR_DELIVERY,
  SHOW_SNACKBAR,
  CLEAR_SNACKBAR,
  CREATE_INITIAL_ORDER_SLIP,
} from './constants';

// switch to immutableJS when you can
// load in products to initialize size of orderslip array
const initialState = fromJS({
  orderSlipQuants: [],
  orderSlipPrices: [],
  modalIsOpen: false,
  errorModalIsOpen: false,
  productNote: '',
  productNotes: [],
  orderSlipIndex: 0,
  isShowingSnackbar: false,
});

function vendorPageReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_INITIAL_ORDER_SLIP:
      // check to see if orderslip already exists
      if (!state.get(action.vendorId)) {
        return state.set(action.vendorId, fromJS({orderSlipIndex: 0, orderSlip: []}));
      } else {
        return state;
      }
    case SET_PRODUCT_QUANTITY:
      const orderSlipQuants = state.get('orderSlipQuants');
      const newOrderSlipQuants = orderSlipQuants.set(action.productIndex, parseInt(action.quantity));
      console.log('orderSlipQuants', newOrderSlipQuants);
      return state.set('orderSlipQuants', newOrderSlipQuants);
    case SET_PRODUCT_TYPE:
      const orderSlipPrices = state.get('orderSlipPrices');
      const newOrderSlipPrices = orderSlipPrices.set(action.productIndex, parseInt(action.price));
      return state.set('orderSlipPrices', newOrderSlipPrices);
    case SET_ORDER_SLIP:
      const index = action.productIndex;
      const product = action.product;
      const quantity = state.get('orderSlipQuants').get(index);
      const price = state.get('orderSlipPrices').get(index);
      const vendorId = action.vendorId;
      const orderSlipIndex = state.get(vendorId).get('orderSlipIndex');
      console.log('vendorId in reducer', vendorId)
      let orderSlip;
      (!state.get(vendorId)) ? orderSlip = fromJS([]) : orderSlip = state.get(vendorId);
      const newOrderSlipItem = fromJS({
        product,
        quantity,
        price,
        total: quantity * price,
      });
      const newOrderSlip = orderSlip.setIn(['orderSlip', orderSlipIndex], newOrderSlipItem)
                                    .set('orderSlipIndex', orderSlipIndex + 1);;
      return state.set(vendorId, newOrderSlip)
    case SET_PRODUCT_NOTE:
      const productNotes = state.get('productNotes');
      const newProductNotes = productNotes.set(action.productIndex, action.note);
      return state.set('productNotes', newProductNotes);
    case REMOVE_ORDER_SLIP_ITEM:
      const idx = action.productIndex;
      const orderSlip2 = state.get(action.vendorId).get('orderSlip');
      const newOrderSlip2 = orderSlip2.delete(idx);
      const orderSlipIndex2 = state.get(action.vendorId).get('orderSlipIndex');
      return state.set(action.vendorId, newOrderSlip2)
                  .setIn([action.vendorId, 'orderSlipIndex'], orderSlipIndex2 - 1);
    case CLEAR_ORDER_SLIP:
      return state.delete(action.vendorId);
    case SET_DELIVERY:
      return state.set('isDeliveryAdded', fromJS(action.payload));
    case CLEAR_DELIVERY:
      return state.set('isDeliveryAdded', fromJS(action.payload));
    case OPEN_MODAL:
      return state.set('modalIsOpen', fromJS(action.payload));
    case CLOSE_MODAL:
      return state.set('modalIsOpen', fromJS(action.payload))
             .set('isDeliveryAdded', fromJS(false));
    case OPEN_ERROR_MODAL:
      return state.set('errorModalIsOpen', fromJS(action.payload));
    case CLOSE_ERROR_MODAL:
      return state.set('errorModalIsOpen', fromJS(action.payload));
    case SHOW_SNACKBAR:
      return state.set('isShowingSnackbar', fromJS(action.payload));
    case CLEAR_SNACKBAR:
      return state.set('isShowingSnackbar', fromJS(action.payload));
    default:
      return state;
  }
}

export default vendorPageReducer;
