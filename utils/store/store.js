import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // or any other storage

import rootReducer from './root-reducer/reducers';

// Configure Redux Persist
const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer
})

// Create the persisted store
const persistor = persistStore(store);

export { store, persistor };
