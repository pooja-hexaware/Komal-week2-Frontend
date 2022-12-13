import { configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import storeSlice from "../main/store/slices/storeSlice"
import itemSlice from "../main/store/slices/itemSlice"
import cartSlice from "../main/store/slices/cartSlice"
import toppingsSlice from "../main/store/slices/toppingsSlice"
import notificationReducer from '../middleware/notification/store/notificationSlice'

let middlewares = []
if (process.env.NODE_ENV === `development`) {
    const logger = createLogger({
        collapsed: (getState, action, logEntry) => !logEntry.error,
    })
    middlewares.push(logger)
}

export default configureStore({
    reducer: {
        notification: notificationReducer,
        storeSlice,
        itemSlice,
        toppingsSlice,
        cartSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(middlewares),
    devTools: process.env.NODE_ENV !== 'production',
})
