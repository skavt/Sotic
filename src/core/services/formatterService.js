class Formatter {
  static toUpperCaseFirst(value) {
    return value ? value.charAt(0).toUpperCase() + value.slice(1) : '';
  }
}

export {
  Formatter
};
