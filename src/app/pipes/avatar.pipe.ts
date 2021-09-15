import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'avatar'
})
export class AvatarPipe implements PipeTransform {

  transform(value: unknown, defaultAv: string): unknown {
    console.log(value)
    console.log(defaultAv)
    // return null;
    let hoder;
    if(value) {
      hoder = value;
    } else {
      hoder = defaultAv;
    }
    return hoder;
  }

}
