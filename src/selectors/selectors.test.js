import expect from 'expect';
import { authorsFormattedForDropdown } from './selectors';

describe('Author Selectors', () => {
  it('authorsFormattedForDropdown', () => {
    const authors = [
      { id: "cory-house", firstName: "Alex", lastName: "Sh" },
      { id: "john-skeet", firstName: "Ivan", lastName: "Gd" }
    ];

    const result = authorsFormattedForDropdown(authors);

    expect(result).toEqual([
      { value: "cory-house", text: "Alex Sh" },
      { value: "john-skeet", text: "Ivan Gd" }
    ]);
  });
});