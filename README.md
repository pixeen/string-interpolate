# String Interpolate

It's a function that takes a string, a data object and a regular expression as arguments. The regular expression is used
to match the string against the data object. If the string matches the regular expression, it returns the string with
the data object interpolated into it. If the string doesn't match the regular expression, it returns the string
unchanged.

## Usage

```javascript
import interpolate from '@pixeen/string-interpolate'

const data = { name: 'World' }
const regexp = /\{{([^}]+)}}/g // Match on double curly braces
interpolate('Hello {{name}}!', data, regexp) // => 'Hello World!'
```
