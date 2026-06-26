import axios
from "axios";

const API = import.meta.env.VITE_API_URL;

export const createAITask =
async(task)=>{

const response=
await axios.post(

`${API}/api/tasks/create`,

task

);

return response.data.data;

};
export const updateAITask = async (id, task) => {
  const response = await axios.put(
    `${API}/api/tasks/update/${id}`,
    task
  );

  return response.data.data;
};