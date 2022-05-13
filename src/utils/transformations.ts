function makeCn(classnames: Array<string>): string {
  return classnames.filter(Boolean).join(" ");
}

export default { makeCn };
