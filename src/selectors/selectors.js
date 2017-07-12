export function authorsFormattedForDropdown(authors) {
  return authors.map(x => ({
    value: x.id,
    text: `${x.firstName} ${x.lastName}`
  }));
}