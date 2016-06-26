
export const add = (x: number, y: number) => x + y;
export const subtract = (x: number, y: number) => x - y;
export const multiply = (x: number, y: number) => x * y;
export const divide = (x: number, y: number) => x / y;
export const pow = (x: number, y: number) => x ** y;

export const and = (x: number, y: number) => x && y;
export const or = (x: number, y: number) => x || y;

export const  moreThan = (x: number, y: number) => x > y ? 1 : 0;
export const  lessThan = (x: number, y: number) => x < y ? 1 : 0;
export const  moreOrEqualThan = (x: number, y: number) => x >= y ? 1 : 0;
export const  lessOrEqualThan = (x: number, y: number) => x <= y ? 1 : 0;

export const  equal = (x: number, y: number) => x == y ? 1 : 0;
export const  notEqual = (x: number, y: number) => x != y ? 1 : 0;
