/* Module Imports */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

/* Local Module Imports */
import { store, persistor } from './app/store';
import Routes from './routes/routes';

/* Local custom CSS Import */
import './styles/index.scss';
/* Reset HTML elements default styles */
import 'normalize.css';

/* App */
const App = () => {
    return (
        <ReduxProvider store={store}>
            <PersistGate persistor={persistor}>
                <Routes />
            </PersistGate>{' '}
        </ReduxProvider>
    );
};

/* Render Application */
ReactDOM.render(<App />, document.getElementById('root'));
