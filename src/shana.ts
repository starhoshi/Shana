import * as FirebaseFirestore from '@google-cloud/firestore'

/**
 * observe reference with timeout
 * @param documentRef FirebaseFirestore.DocumentReference
 * @param callback When resolved, call `resolve()`.
 * @param timeout default: 30000
 */
export const observe = <T>(documentRef: FirebaseFirestore.DocumentReference, callback: (data: T, resolve: any, reject: any) => void, timeout: number = 30000) => {
  var timer: NodeJS.Timer
  var index = 0
  var observer = Function()

  return new Promise((resolve, reject) => {
    documentRef.get().then(s => {
      callback(s.data() as T, resolve, reject)
    }, error => {
      reject(error)
    })

    observer = documentRef.onSnapshot(s => {
      callback(s.data() as T, resolve, reject)
    }, error => {
      reject(error)
    })

    timer = setTimeout(() => {
      reject(`timeout ${timeout}`)
    }, timeout)
  }).then(() => {
    clearTimeout(timer)
    observer() // dispose
    return Promise.resolve()
  }).catch(error => {
    clearInterval(timer)
    observer() // dispose
    return Promise.reject(error)
  })
}
