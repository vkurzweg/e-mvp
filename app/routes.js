// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';
// import AuthService from 'utils/AuthService';
import { browserHistory } from 'react-router';
import { loadState } from 'utils/LocalStorage';
import { store } from './app';
import { toJS } from 'immutable';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

// TODO: import from .env
// const auth = new AuthService('2wvCshvPHHNhyxOM8dlqmq2VvqBurYH8', 'eventmakr.auth0.com');
// TODO: MODULARIZE INTO UTILS MIDDLEWARE these 'onEnter' functions,
// validate authentication for private routes

const requireAuth = (nextState, replace) => {
  const pathAfterLogin = window.location.pathname
  if (store.getState().get('auth').get('isAuthenticated')) {
    console.log('authenticated')
  } else {
    browserHistory.push(`/login?next=${pathAfterLogin}`)
  }
};

const requireVendorAuth = (nextState, replace) => {
  console.log(" ************** This is required Vebdor Authentication **************");
}

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'landing',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/LandingPage/reducer'),
          System.import('containers/LandingPage/sagas'),
          System.import('containers/LandingPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('LandingPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/login',
      name: 'LoginPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/LoginPage/reducer'),
          System.import('containers/LoginPage/sagas'),
          System.import('containers/LoginPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('LoginPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/reset',
      name: 'PasswordResetPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/PasswordResetPage/reducer'),
          System.import('containers/PasswordResetPage/sagas'),
          System.import('containers/PasswordResetPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('PasswordResetPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/reset/:token',
      name: 'PasswordResetForm',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/VendorPortal/containers/PasswordResetForm/reducer'),
          System.import('containers/VendorPortal/containers/PasswordResetForm/sagas'),
          System.import('containers/VendorPortal/containers/PasswordResetForm'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('PasswordResetForm', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/profile',
      name: 'ProfilePage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/ProfilePage/reducer'),
          System.import('containers/ProfilePage/sagas'),
          System.import('containers/ProfilePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('ProfilePage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/orders',
      name: 'ordersPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/OrdersPage/reducer'),
          System.import('containers/OrdersPage/sagas'),
          System.import('containers/OrdersPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('OrdersPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/messages',
      name: 'messagesPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/MessagesPage/reducer'),
          System.import('containers/MessagesPage/sagas'),
          System.import('containers/MessagesPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('messagesPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/s',
      name: 'searchPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/SearchPage/reducer'),
          System.import('containers/SearchPage/sagas'),
          System.import('containers/SearchPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('SearchPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
      childRoutes: [
        {
          path: '/vendors',
          name: 'team',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              System.import('containers/VendorsPage/reducer'),
              System.import('containers/VendorsPage/sagas'),
              System.import('containers/VendorsPage'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('VendorsPage', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        }, {
          path: '/vendors/:category',
          name: 'vendorCategoryPage',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              System.import('containers/VendorCategoryPage/reducer'),
              System.import('containers/VendorCategoryPage/sagas'),
              System.import('containers/VendorCategoryPage'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('VendorCategoryPage', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });
            importModules.catch(errorLoading);
          },
        }, {
          path: '/vendors/:category/:vendorId',
          name: 'vendorPage',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              System.import('containers/VendorPage/reducer'),
              System.import('containers/VendorPage/sagas'),
              System.import('containers/VendorPage'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('VendorPage', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });
            importModules.catch(errorLoading);
          },
        },
      ],
    }, {
      path: '/signup',
      name: 'SignUp',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/SignUpPage/reducer'),
          System.import('containers/SignUpPage/sagas'),
          System.import('containers/SignUpPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('SignUpPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/event',
      name: 'eventPage',
      onEnter: requireAuth,
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/EventPage/reducer'),
          System.import('containers/EventPage/sagas'),
          System.import('containers/EventPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('EventPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/payment',
      name: 'paymentPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/PaymentPage/reducer'),
          System.import('containers/PaymentPage/sagas'),
          System.import('containers/PaymentPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('PaymentPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/v',
      name: 'vendorPortal',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/VendorPortal/reducer'),
          System.import('containers/VendorPortal/sagas'),
          System.import('containers/VendorPortal'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('vendorPortal', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
      childRoutes: [
        {
          path: 'landing',
          name: 'vendorLanding',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              System.import('containers/VendorPortal/containers/PortalLanding/reducer'),
              System.import('containers/VendorPortal/containers/PortalLanding/sagas'),
              System.import('containers/VendorPortal/containers/PortalLanding/'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('VendorLanding', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        }, {
          path: 'chat',
          name: 'chat',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              System.import('containers/VendorPortal/containers/VendorChatPage/reducer'),
              System.import('containers/VendorPortal/containers/VendorChatPage/sagas'),
              System.import('containers/VendorPortal/containers/VendorChatPage/'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('VendorsChatPage', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        }, {
          path: 'orders',
          name: 'orders',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              System.import('containers/VendorPortal/containers/VendorOrdersPage/reducer'),
              System.import('containers/VendorPortal/containers/VendorOrdersPage/sagas'),
              System.import('containers/VendorPortal/containers/VendorOrdersPage/'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('VendorOrdersPage', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        },
      ],
    }, {
      path: '/v/login',
      name: 'VendorLoginPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/VendorPortal/containers/LoginPage/reducer'),
          System.import('containers/VendorPortal/containers/LoginPage/sagas'),
          System.import('containers/VendorPortal/containers/LoginPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('loginPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/v/reset',
      name: 'PasswordResetPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/VendorPortal/containers/PasswordResetPage/reducer'),
          System.import('containers/VendorPortal/containers/PasswordResetPage/sagas'),
          System.import('containers/VendorPortal/containers/PasswordResetPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('passwordResetPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/v/reset/:token',
      name: 'PasswordResetForm',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/VendorPortal/containers/PasswordResetForm/reducer'),
          System.import('containers/VendorPortal/containers/PasswordResetForm/sagas'),
          System.import('containers/VendorPortal/containers/PasswordResetForm'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('PasswordResetForm', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/testing',
      name: 'testingPageForDev',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/TestingPageForDev/reducer'),
          System.import('containers/TestingPageForDev/sagas'),
          System.import('containers/TestingPageForDev'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('testingPageForDev', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
