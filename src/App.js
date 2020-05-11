import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import AppSetup from './app.setup';
import store from './store/index';

const App = () => (
  <Provider store={store}>
        <BrowserRouter>
            <AppSetup />
        </BrowserRouter>
    </Provider>
)

export default App;