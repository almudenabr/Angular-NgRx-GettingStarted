import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";
import { ProductService } from "./product.service";
import * as ProductActions from "./state/product.actions";

@Injectable()
export class ProductEffects {

    constructor(private action$: Actions,
                private productService: ProductService) {}

    loadProducts$ = createEffect(() => {
        return this.action$.pipe(
            ofType(ProductActions.loadProducts),
            mergeMap(action => 
                this.productService.getProducts().pipe(
                    map(products => 
                        ProductActions.loadProductsSuccess({products})
                    )
                )
            )
        )
    })
}