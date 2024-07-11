import React from "react";
import { useState } from "react";

function App() {
  const [title, settitle] = useState("");        // variable for task of title
  const [des, setdes] = useState("");            // variable for task of description
  const [mainTask, setmainTask] = useState([]);    // array of objects which have title and description  

  //Make a function to which apply on form when task and description is written
  const submitHandler = (e) => {
    e.preventDefault();       // to avoid reload of form page we use preventDefault() func
    setmainTask([...mainTask, { title, des }]);    // pass the value of new added task title and des to array (ham push kr rhe h paghale wale array mai , isiley we use  spread operator)
    settitle("");   // reset the title name 
    setdes("");     // reset the des name 
  };  


const deleteHandler=(index)=>{
      let copyTask=[...mainTask]
      copyTask.splice(index,1)
      setmainTask(copyTask)
}

  let renderTask = <h2>No Task available</h2>;       // make a variable which will display our written task and des

  if (mainTask.length > 0) {      // agr length array ki badi hogi 0 se => koi n koi elem add hua h matlb tab tum display kr dena 
    renderTask = mainTask.map((value, index) => {     // use map func to print the all elem of array (bassicaly jo new elem add hog wo display ho jayega )
      return (
        <li key={index} className="flex items-center justify-between mb-7">
          <div className="flex items-center justify-between mb-5 gap-x-7 ">
            <div className=" text-xl font-bold bg-slate-400 ">
              {value.title}           
            </div>
            <div className="text-lg font-semibold">{value.des}</div>
          </div>
          <button onClick={()=>deleteHandler(index)} className="bg-red-400 text-white px-4 py-2 rounded font-bold">Delete</button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-zinc-600  text-center p-5 text-2xl font-bold text-violet-50 ">
        TO DO LIST
      </h1>

      {/* Apply the  onSubmit function on form*/}
      <form onSubmit={submitHandler}>    

        {/* Create a input box for task title and description */}
        <input
          type="text"
          placeholder="Enter youy task"
          value={title}   
          onChange={(e) => {
            settitle(e.target.value);
          }}
          className="border-zinc-700 border-2 m-5 px-4 py-1"
        />

        <input
          type="text"
          placeholder="Enter description"
          value={des}
          onChange={(e) => {
            setdes(e.target.value);
          }}
          className="border-zinc-700 border-2 m-5 px-4 py-1"
        />
        <button className="bg-black text-white p-4 py-2 rounded-lg font-bold m-5">
          Add Task
        </button>
      </form>

      {/* creating  a display section */}
      <hr />
      <div className="p-5 bg-slate-500">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
}

export default App;


