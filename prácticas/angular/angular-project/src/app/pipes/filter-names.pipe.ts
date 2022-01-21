import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterNames' })
export class PriorityNamePipe implements PipeTransform {
  transform(list: any[], filter: any = '') {
    const lowerCaseFilter: any = filter.toLowerCase().trim();

    const filteredList: any[] = list.filter((el: any) => {
      return el.name.toLowerCase().includes(lowerCaseFilter);
    });

    return filteredList;
  }
}
