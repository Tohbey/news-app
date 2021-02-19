import { registerRootComponent } from 'expo';
import React from 'react'
import configureStore from './src/redux/store'
import { AppRegistry } from 'react-native';
import App from './App';
import { Provider } from 'react-redux';

const store = configureStore()

const app = () => {
    return(
        <Provider store={store}>
           <App /> 
        </Provider>
    )
}
AppRegistry.registerComponent('main', () => app);

// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
// registerRootComponent(App);
