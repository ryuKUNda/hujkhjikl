export function serialize(item: any) {
  return `(${Object.entries(item)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([k, v]) => `${k}=${v}`)
    .join(',')})`;
}

export function shallowEquals(item: any, otherItem: any) {
  return Object.entries(item)
    .map(([k, v]) => [v, otherItem[k as keyof any]])
    .every(([a, b]) => a === b);
}
