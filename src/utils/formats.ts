export const formatClassNames = (...classes: string[]) =>
  classes.filter(Boolean).join(" ");
