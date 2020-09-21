import dayjs from '../services/dayjs';

class Format {
  labelToId(label: string) {
    const id = label.replace(/\s/g, '-').toLowerCase();

    return id;
  }

  capitalize(string: string) {
    return `${string[0].toUpperCase()}${string.slice(1)}`;
  }

  dateTime(dateTime: string) {
    return dayjs().to(dateTime);
  }
}

export const format = new Format();
