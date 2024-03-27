import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'censorship',
  standalone: true
})
export class CensorshipPipe implements PipeTransform {

  transform(value: string, wordToCensor: string, symbol : string = '*'): string {
    const symbolsLength = wordToCensor.length;
    return value.replaceAll(wordToCensor, new Array(symbolsLength).fill(symbol).join(''));
  }

}
