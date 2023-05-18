declare global {
  interface String {
    interpolate(
      data: {
        [key: string]: string
      },
      regexp: RegExp
    ): string
  }
}
export {}
//# sourceMappingURL=global.d.ts.map
