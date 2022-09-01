import { createAction, on, createReducer } from "@ngrx/store";

export const userReducer = createReducer(
    { maskUserName: true },
    on(createAction('[User] Mask User Name'), state => {
        console.log('original user state:' + JSON.stringify(state))
        return {
            ...state,
            maskUserName: !state.maskUserName
        }
    })
)