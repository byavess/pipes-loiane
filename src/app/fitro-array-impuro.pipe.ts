import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fitroArrayImpuro'
})
export class FitroArrayImpuroPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
