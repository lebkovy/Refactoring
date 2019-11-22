import { Component } from '@angular/core';

@Component({
    selector: 'better-card',
    templateUrl: './better-card.component.html',
    styleUrls: ['./better-card.component.scss']
})
export class BetterCardComponent {
    discount = 20;
    stars = this.returnArray(5);
    rate = 3;
    productTitle = 'Nike free run v2';
    productSubtitle = 'Men Orangeblow Darken Sportswear Sneakers';
    oldPrice = 178.47;
    newPrice = 74.59;
    sizes = [38, 39, 41, 42];
    selectedSize = 39;

    returnArray(length: number): Array<any> {
        return Array.from({ length }, (v, k) => k + 1);
    }

    selectSize(size: number) {
        this.selectedSize = size;
    }

    rateProduct(rate: number) {
        this.rate = rate;
    }
}
