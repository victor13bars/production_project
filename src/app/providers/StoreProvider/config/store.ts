import {configureStore} from "@reduxjs/toolkit";
import {StateSchema} from "./StateShema";
import {counterReducer} from "app/entities/Counter";

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            counter:counterReducer
        },
        devTools: __IS_DEV__,
        preloadedState:initialState,
    })
}
