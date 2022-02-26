import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'btcToUsd'
})
export class BtcToUsdPipe implements PipeTransform {
  transform(amount: number, isBtcToUsd: boolean = true): number {
    if (isBtcToUsd)
      return amount * 39190;
    else
      return amount / 39190;
  }
}
