import moment from 'moment';

class Formatter {
  static toDate(value, format) {
    if (format) {
      return moment(value).format(format);
    } else {
      return moment(value).format(SYSTEM_DATE_FORMAT);
    }
  }
}

export {
  Formatter
};
export const SYSTEM_DATE_FORMAT = 'DD MMMM YYYY';
