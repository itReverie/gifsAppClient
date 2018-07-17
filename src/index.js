import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import colors from './styles/colors';


const reduxStore=configureStore();


const render = () => {
ReactDOM.render(
        <ThemeProvider theme={colors}>
                <Provider store={reduxStore.store}>
                    <PersistGate persistor={reduxStore.persistor}>
                        <App />
                    </PersistGate>
                </Provider>
         </ThemeProvider>,
        document.getElementById('root'));
        registerServiceWorker();
}

render()