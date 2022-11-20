import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByField',
})
export class SearchByFieldPipe implements PipeTransform {
  transform<T>(array: T[], value: string, field: string): T[] {
    return (array || []).filter((e: string | any) => {
      return (
        e[field] &&
        e[field]
          .toString()
          .toLowerCase()
          .indexOf(value ? value.toLowerCase() : '') > -1
      );
    });
  }
}
