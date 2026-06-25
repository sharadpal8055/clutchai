import {
 analyzeTask
}
from "../services/gemini/taskAnalyzer.js";

export const analyzeTaskController =
 async (req,res)=>{

 try{

  const {
   title,
   description
  } = req.body;

  const analysis =
   await analyzeTask(
    title,
    description
   );

  res.status(200).json({
   success:true,
   data:analysis
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