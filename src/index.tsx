import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/styles/global.sass';
import App from './app/App';
import {ContextProvider} from "./Context/Context";
import {Provider} from "react-redux";
import {store} from "./redux/redux";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ContextProvider>
                <App/>
            </ContextProvider>
        </Provider>
    </React.StrictMode>
);
