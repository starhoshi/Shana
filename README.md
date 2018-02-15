# Shana [![npm version](https://badge.fury.io/js/shana.svg)](https://badge.fury.io/js/shana) [![Build Status](https://travis-ci.org/starhoshi/Shana.svg?branch=master)](https://travis-ci.org/starhoshi/Shana) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/8dabe6672f8c44409b283e4be1c1c012)](https://www.codacy.com/app/kensuke1751/Shana?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=starhoshi/Shana&amp;utm_campaign=Badge_Grade) [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

Testing utilities for Cloud Functions.

## Observe update event with timeout

```ts
import * as Shana from 'shana'

test('user.name is Yukari Hirai', () => {
  // fire Cloud Functions
  ...

  observe<User>(userReference, (user, resolve, reject)=> {
    if (user.name === 'Yukari Hirai'){
      return resolve()
    } else if (user.name === 'Kazumi Yoshida') {
      return reject()
    }
  }, 20000)
})
```
