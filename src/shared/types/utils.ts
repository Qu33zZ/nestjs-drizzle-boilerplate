export type TClassProperties<C> = {
  [Key in keyof C as C[Key] extends (...args: any[]) => any
    ? never
    : Key]: C[Key];
};
