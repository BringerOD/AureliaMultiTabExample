/**
 * Array Filter Value Converter
 *
 * Allows for an array to be filtered using parameters and sorting keys
 *
 */
export class ExcludeDeletedValueConverter {
    toView(array) {
     
       
        let filtered = array.filter(item => {
           if (item.ObjectState !== 3) {
              return true;
           } else {
              return false;
           }
        });

       return filtered;
        
    }
}
