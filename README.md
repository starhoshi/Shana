# Shana
Testing utilities for Cloud Functions.

## Observe update event with timeout

```ts
import * as Shana from 'shana'

test('user.name is Yukari Hirai', () => {
  // fire Cloud Functions
  ...

  observe<string>({} as any, (user, resolve, reject)=> {
    if (user.name === 'Yukari Hirai'){
      return resolve()
    } else if (user.name === 'Kazumi Yoshida') {
      return reject()
    }
  }, 20000)
})
```
