import { get, ref, child } from "firebase/database";
import { db } from "./firebase";

export function getUserData(userId) {
    const dbRef = ref(db);
    return get(child(dbRef, `user_data/${userId}`))
}