import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatestr'
})
export class ConcatestrPipe implements PipeTransform {

  transform(firstn:String, lastn:String, gender:String): String {
    let returnStr: String="";
    if(gender==="F"){
      returnStr = "Mrs. "+firstn+" "+lastn;
    }else{
      returnStr = "Mr. "+firstn+" "+lastn;
    }
    // returnStr = "Mr. "+firstn;
    return returnStr;
  }

}
