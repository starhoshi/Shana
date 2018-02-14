"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * observe reference with timeout
 * @param documentRef FirebaseFirestore.DocumentReference
 * @param callback When resolved, call `resolve()`.
 * @param timeout default: 30000
 */
exports.observe = (documentRef, callback, timeout = 30000) => {
    var timer;
    var index = 0;
    var observer = Function();
    return new Promise((resolve, reject) => {
        documentRef.get().then(s => {
            callback(s.data(), resolve, reject);
        }, error => {
            reject(error);
        });
        observer = documentRef.onSnapshot(s => {
            callback(s.data(), resolve, reject);
        }, error => {
            reject(error);
        });
        timer = setTimeout(() => {
            reject(`timeout ${timeout}`);
        }, timeout);
    }).then(() => {
        clearTimeout(timer);
        observer(); // dispose
        return Promise.resolve();
    }).catch(error => {
        clearInterval(timer);
        observer(); // dispose
        return Promise.reject(error);
    });
};
