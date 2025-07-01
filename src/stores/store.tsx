// import { configureStore } from "@reduxjs/toolkit";
// import modalReducer from "./reducers/ModalAction";
// import tabActive from "./reducers/TabActive";

// export const store = configureStore({
//   reducer: {
//     modal: modalReducer,
//     tabActive: tabActive,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// store.ts
import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./reducers/ModalAction";
import tabActiveReducer from "./reducers/TabActive";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage

const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: ["modal", "tabActive"], // chỉ lưu 2 reducer này
};

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  modal: modalReducer,
  tabActive: tabActiveReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
