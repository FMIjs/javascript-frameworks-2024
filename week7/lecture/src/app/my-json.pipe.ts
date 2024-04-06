import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myJson',
  standalone: true,
})
export class MyJsonPipe implements PipeTransform {
  transform(
    value: object | null | undefined,
    replacerFn?: (this: any, key: string, value: any) => any,
    indent?: number
  ): unknown {
    if (value === null || value === undefined) return '';
    return JSON.stringify(value, replacerFn, indent);
  }
}

// In the html we can use the pipe like this:
// {{someValue | myJson : replacerFn : index}}
