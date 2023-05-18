declare interface String {
  interpolate(data: { [key: string]: string | number }, regexp?: RegExp): string
}
