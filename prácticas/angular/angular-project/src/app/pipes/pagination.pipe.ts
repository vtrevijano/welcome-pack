import { Pipe, PipeTransform } from '@angular/core'
import { Character } from '../shared/model/shared'

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {
  transform (list: Character[], filter: number) {
    if (filter < list.length) {
      const splicedList: Character[] = list.splice(0, filter)

      return splicedList
    } else {
      return list
    }
  }
}
