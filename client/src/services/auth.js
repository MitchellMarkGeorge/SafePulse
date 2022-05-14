import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase";

export function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

export function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

export function signOut() {
    return signOut(auth);
}