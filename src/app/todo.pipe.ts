import { Pipe, PipeTransform, ɵConsole } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'todo'
})
export class TodoPipe implements PipeTransform {

  transform(value: moment.Moment): String {
    moment.locale('pl');
    const now = moment();
    const minuteAgo = moment().subtract("00:00:10");
    const hourAgo = moment().subtract("01:00:00");
    const yesterday = moment().subtract(1, 'day');

    //value = moment().subtract("00:00:00");

    if (!value) {
      return null;
    }
    else if (minuteAgo.isSameOrBefore(value)) {
      return 'kilka sekund temu';

    }
    else if (hourAgo.isSameOrBefore(value)) {
      return 'mniej niż godzinę temu';

    }
    else if (now.isSame(value, 'day')) {
      return 'Dzisiaj';
    }

    else if (yesterday.isSame(value, 'day')) {
      return 'Wczoraj';
    }
    else {
      return moment(value).format('LLL');
    }
  }
}
