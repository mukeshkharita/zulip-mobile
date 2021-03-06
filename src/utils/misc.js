/* @flow */

export const caseInsensitiveCompareFunc = (a: any, b: any): number =>
  a.toLowerCase().localeCompare(b.toLowerCase());

export const caseInsensitiveCompareObjFunc = (key: string) => (a: any, b: any): number =>
  a[key].toLowerCase().localeCompare(b[key].toLowerCase());
