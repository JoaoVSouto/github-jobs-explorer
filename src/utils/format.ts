class Format {
  labelToId(label: string) {
    const id = label.replace(/\s/g, '-').toLowerCase();

    return id;
  }

  capitalize(string: string) {
    return `${string[0].toUpperCase()}${string.slice(1)}`;
  }
}

export const format = new Format();
