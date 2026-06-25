import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
  query,
  where,
   onSnapshot
} from "firebase/firestore";

import { db } from "../firebase/firebase";
import { useEffect } from "react";
// useEffect(() => {

//  if(!user) return;

//  const q = query(
//   collection(db,"tasks"),
//   where("userId","==",user.uid)
//  );

//  const unsubscribe =
//   onSnapshot(q,(snapshot)=>{

//    const taskList =
//     snapshot.docs.map(doc=>({

//       id:doc.id,
//       ...doc.data()

//     }));

//    setTasks(taskList);

//   });

//  return unsubscribe;

// },[user]);

export const createTask = async (taskData) => {
  const docRef = await addDoc(
    collection(db, "tasks"),
    taskData
  );

  return docRef.id;
};

export const getUserTasks = async (
  userId
) => {
  const q = query(
    collection(db, "tasks"),
    where("userId", "==", userId)
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const deleteTask = async (
  taskId
) => {
  await deleteDoc(
    doc(db, "tasks", taskId)
  );
};

export const updateTask = async (
  taskId,
  updatedData
) => {
  await updateDoc(
    doc(db, "tasks", taskId),
    updatedData
  );
};