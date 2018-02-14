import * as FirebaseFirestore from '@google-cloud/firestore';
/**
 * observe reference with timeout
 * @param documentRef FirebaseFirestore.DocumentReference
 * @param callback When resolved, call `resolve()`.
 * @param timeout default: 30000
 */
export declare const observe: <T>(documentRef: FirebaseFirestore.DocumentReference, callback: (data: T, resolve: any, reject: any) => void, timeout?: number) => Promise<void>;
