import {
 analyzeRisk
}
from "../services/risk/riskAnalyzer.js";

export const analyzeRiskController =
 async (req,res)=>{

 try{

  const result =
   await analyzeRisk(
    req.body
   );

  res.json({
   success:true,
   data:result
  });

 }
 catch(error){

  res.status(500).json({
   success:false,
   message:error.message
  });

 }

};