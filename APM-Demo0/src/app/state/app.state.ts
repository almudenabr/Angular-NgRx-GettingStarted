import { ProductState } from "../products/state/product.reducer";

export interface State {
    products: ProductState;
    users: any;
}