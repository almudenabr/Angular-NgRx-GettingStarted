import { on, createReducer, createFeatureSelector, createSelector } from "@ngrx/store";
import * as AppState from '../../state/app.state'

import { User } from "../user";
import * as UserActions from "./user.actions"

export interface State extends AppState.State {
    users: UserState
}

export interface UserState {
    maskUserName: boolean;
    currentUser: User [];
}

const initialState : UserState = {
    maskUserName: true,
    currentUser: [],
}

const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getMaskUserName = createSelector(
    getUserFeatureState,
    state => state.maskUserName
)

export const getCurrentUser = createSelector(
    getUserFeatureState,
    state => state.currentUser
)

export const userReducer = createReducer<UserState>(
    initialState,
    on(UserActions.maskUserName, (state) : UserState => {
        console.log('original user state:' + JSON.stringify(state))
        return {
            ...state,
            maskUserName: !state.maskUserName
        }
    })
)