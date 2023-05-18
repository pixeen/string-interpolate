# String Interpolate

It's a function that takes a `string`, a `data object`, and a `regular expression` as arguments.

- If the input string matches the regular expression, the function will return the string with the data object
  interpolated into it.
- However, if the input string does not match the regular expression, the function will simply return the original
  string unchanged.

The default regular expression is `/{{([^}]+)}}/g`, which matches on single curly braces. You can pass in your own
regular expression if you want to match on something else.

## Usage

```javascript
stringInterpolate('Hello {name}!', { name: 'World' })
// => 'Hello World!'
```

### Extending the String prototype

If you extend the String prototype, you can use the function as a method on any string like in this example:

```javascript
'Hello {name}!'.interpolate({ name: 'World' })
// => 'Hello World!'
```

#### Here is how you would do it

```typescript
import stringInterpolate from './stringInterpolate'

declare global {
  interface String {
    interpolate(data: { [key: string]: string }, regexp: RegExp): string
  }
}

String.prototype.interpolate = function (
  data: { [key: string]: string },
  regexp
): string {
  return stringInterpolate(String(this), data, regexp)
}
```

### Custom regular expression

For example match on double curly braces (instead of single)

```javascript
stringInterpolate('Hello {{name}}!', { name: 'World' }, /\{{([^}]+)}}/g)
// => 'Hello World!'
```
