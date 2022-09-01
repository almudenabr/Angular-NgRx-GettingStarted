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

const initialState : ProductState = {
    showProductCode: true,
    currentProduct: null,
    products: [],
}

export const productReducer = createReducer<ProductState>(
    initialState,
    on(createAction('[Product] Toggle Product Code'), (state) : ProductState => {
       console.log('original state:' + JSON.stringify(state))
        return{
            ...state,
            showProductCode: !state.showProductCode
        }
    }
    )
)