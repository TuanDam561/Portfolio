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
import { combineReducers } from "redux";

//Này lưu cả reducer
// const rootPersistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["modal","tabActive"], // chỉ lưu 2 reducer này
// };

const modalPersistConfig = {
  key: "modal",
  storage,
  whitelist: ["isOnMusic"], //trong modal chỉ lưu cái isOnMusic thôi
};

//  Toàn bộ tabActive được lưu
const tabActivePersistConfig = {
  key: "tabActive",
  storage,
};

//Viết để lưu nhanh
// const rootReducer = combineReducers({
//   modal: modalReducer,
//   tabActive: tabActiveReducer,
// });

const rootReducer = combineReducers({
  modal: persistReducer(modalPersistConfig, modalReducer),
  tabActive: persistReducer(tabActivePersistConfig, tabActiveReducer),
});

// const persistedReducer = persistReducer(rootPersistConfig, rootReducer); //này dùng nếu muốn lưu nhanh

export const store = configureStore({
  reducer: rootReducer,
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
