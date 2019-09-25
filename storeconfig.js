import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import reducer from './src/reducer';

export const store = createStore(reducer, {}, compose(
    applyMiddleware(ReduxThunk)
    ));
