import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';
import { ItemComponent } from './shop/item/item.component';
import { BinComponent } from './shop/bin/bin.component';

@NgModule({
    declarations: [ShopComponent, ItemComponent, BinComponent],
    exports: [
        ShopComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ShopModule { }
