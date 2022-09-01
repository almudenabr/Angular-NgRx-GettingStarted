import { createAction, on, createReducer } from "@ngrx/store";
import * as AppState from '../../state/app.state'

import { Product } from "../product";

export interface State extends AppState.State {
    products: ProductState
}
export interface ProductState {
    showProductCode: boolean;
    currentProduct: Product;
    products: Product [];
}

export const productReducer = createReducer(
    {showProductCode: true},
    on(createAction('[Product] Toggle Product Code'), state => {
       console.log('original state:' + JSON.stringify(state))
        return{
            ...state,
            showProductCode: !state.showProductCode
        }
    }
    )
)