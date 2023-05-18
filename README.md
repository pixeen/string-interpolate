# String Interpolate

It's a function that takes a string, a data object and a regular expression as arguments. The regular expression is used
to match the string against the data object. If the string matches the regular expression, it returns the string with
the data object interpolated into it. If the string doesn't match the regular expression, it returns the string
unchanged.

## Usage

### Basic

```javascript
interpolate('Hello {name}!', { name: 'World' })
// => 'Hello World!'
```

### With a custom Regex matcher

```javascript
// Match on double curly braces (instead of single)
const myRegExp = /\{{([^}]+)}}/g
interpolate('Hello {{name}}!', { name: 'World' }, myRegExp)
// => 'Hello World!'
```

### The String prototype

If you extend the String prototype, you can use the function as a method on any string like in this example:

```javascript
'Hello {name}!'.interpolate({ name: 'World' })
// => 'Hello World!'
```

#### Here is how you would do it

```typescript
import interpolate from './interpolate'

declare global {
  interface String {
    interpolate(data: { [key: string]: string }, regexp: RegExp): string
  }
}

String.prototype.interpolate = function (
  data: { [key: string]: string },
  regexp
): string {
  return interpolate(String(this), data, regexp)
}
```
