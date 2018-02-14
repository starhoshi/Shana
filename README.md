# Shana

[![Build Status](https://travis-ci.org/starhoshi/Shana.svg?branch=master)](https://travis-ci.org/starhoshi/Shana)
[![npm version](https://badge.fury.io/js/shana.svg)](https://badge.fury.io/js/shana)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

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
