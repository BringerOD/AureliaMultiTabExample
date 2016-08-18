export class PercentageformatValueConverter {
    toView(value) {
       
       return Math.round(value*100);
    }
}


/**
 * Usage
 *
 * <require from="numeric-floatformat"></require>
 * myNumber = 13.3714;
 * <h1 textContent.bind="myNumber | Percentageformat">0.10</h1>
 
 */
