export const test = (val: number): number => {
  return val * 2
}

export const arr = (val: number): (string | number)[] => {
  return [val, val]
}

export const obj = (val: number): Record<string, unknown> => {
  return { test: val }
}
