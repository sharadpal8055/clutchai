import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import {
  doc,
  setDoc,
} from "firebase/firestore";

import {
  auth,
  db,
} from "../firebase/firebase";

const provider = new GoogleAuthProvider();

export const loginWithGoogle =
  async () => {

    const result =
      await signInWithPopup(
        auth,
        provider
      );

    const user = result.user;

    await setDoc(
      doc(
        db,
        "users",
        user.uid
      ),
      {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        createdAt:
          new Date()
      },
      {
        merge: true
      }
    );

    return user;
};

export const logoutUser =
  async () => {
    await signOut(auth);
};