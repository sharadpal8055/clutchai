import {
  createTaskPipeline
}
from "../services/aiPipeline.js";

import db from "../config/firebase.js";

export const createTaskController =
async(req,res)=>{

try{

const taskData =
 req.body;

const finalTask =
 await createTaskPipeline(
  taskData
 );

const doc = await db
  .collection("tasks")
  .add(finalTask);

res.status(201).json({

 success:true,

 id:doc.id,

 data:finalTask

});

}

catch(error){

console.log(error);

res.status(500).json({

 success:false,

 message:error.message

});

}

};