import  moment from "moment";

export class DateFormatValueConverter {
   toView(value) {

      if (value)
         return moment(value).format("MM/DD/YYYY , h:mm:ss a"); 
      else return "";

   }
}