export class FloatformatValueConverter {
    toView(value, precision = 2) {
       if (isNaN(value) ) {
            return value;
        }

        return value.toPrecision(precision);
    }
}


/**
 * Usage
 *
 * <require from="numeric-floatformat"></require>
 * myNumber = 13.3714;
 * <h1 textContent.bind="myNumber | floatformat">13</h1>
 * <h1 textContent.bind="myNumber | floatformat:4">13.37</h1>
 */
