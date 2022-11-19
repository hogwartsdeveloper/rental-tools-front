import {NgModule} from "@angular/core";
import {PriceComponent} from "./price.component";
import { PriceDetailComponent } from './price-detail/price-detail.component';

@NgModule({
    declarations: [
        PriceComponent,
        PriceDetailComponent
    ],
    imports: [],
    exports: [
        PriceComponent
    ],
    providers: []
})
export class PriceModule {}