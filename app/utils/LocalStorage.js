export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return {};
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.log(err);
  }
};

export const saveUserState = (state) => {
  try {
    const serializedState = JSON.stringify(state.get('auth'));
    localStorage.setItem('auth', serializedState);
  } catch (err) {
    console.log(err);
  }
};

export const loadUserState = () => {
  try {
    const serializedState = localStorage.getItem('auth');
    if (serializedState === null) {
      return {};
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveVendorAuthState = (state) => {
  try {
    const serializedState = JSON.stringify(state.get('vendorAuth'));
    localStorage.setItem('vendorAuth', serializedState);
  } catch (err) {
    console.log(err);
  }
};

export const loadVendorAuthState = () => {
  try {
    const serializedState = localStorage.getItem('vendorAuth');
    if (serializedState === null) {
      return {};
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export function clearAuthState() {
  localStorage.removeItem('auth');
}
