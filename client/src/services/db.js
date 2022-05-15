import { get, ref, child, push } from "firebase/database";
import { db } from "./firebase";

export function getUserData(userId) {
    const dbRef = ref(db);
    return get(child(dbRef, `user_data/${userId}`))
}

export function addNewDrugSession(session, userId) {
    const drugSessionListRef = ref(db, `drug_sesssions/${userId}`);
    return push(drugSessionListRef, session)
}