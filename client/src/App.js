import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';
const API=process.env.REACT_APP_API_URL || "http://localhost:5000";

function App() {

  //state to store the value from database
  const[people,setPeople]=useState([]);
  const [form,setForm]=useState({name:"",age:""});
  // State to track which record is being edited
  const [editId, setEditId] = useState(null);
  //read from databasse
  useEffect (()=>{
    loadPeople();
  },[]);

  const loadPeople= async()=>{
    const res = await axios.get(API);
    setPeople(res.data);
  };

  //create person
  const addPerson= async()=>{
    if(!form.name || !form.age)
      return alert("enter name and age!");
    const res=await axios.post(API,{name:form.name ,age: Number(form.age)});
    setPeople([...people,res.data]);
    setForm({name:"",age:""});
  }

   // Start editing a person
  const startedit = (p) => {
    setEditId(p._id);
    setForm({ name: p.name, age: p.age });
  };

  // Update existing person
  const updatePerson = async () => {
    //  FIX: wrong URL string interpolation
    const res = await axios.put(`${API}/${editId}`, form);

    setPeople(people.map(p =>
      p._id === editId ? res.data : p
    ));

    setEditId(null);
    setForm({ name: "", age: "" });
  };
  //delete function
  const deletePerson=async(id)=>{
    await axios.delete(`${API}/${id}`);
    setPeople(people.filter(p=> p._id !== id));
  };
  return (
    <>
      <h3>MERN STACK CRUD - APPLICATION</h3>

      {/* Name input */}
      <input
        type="text"
        placeholder="Enter Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      {/* Age input */}
      <input
        type="number"
        placeholder="Enter Age"
        value={form.age}
        onChange={(e) => setForm({ ...form, age: e.target.value })}
      />

      {/* FIX: Buttons cannot be inside input tag
          FIX: Typo in function names */}
      {editId ? (
        <button onClick={updatePerson}>Update</button>
      ) : (
        <button onClick={addPerson}>Add</button>
      )}

      {/* Display people list */}
      {people.map(p => (
        <div key={p._id}>
          <b>{p.name}</b> - {p.age}
          {/* Edit button already existed logically, just using your function */}
          <button onClick={() => startedit(p)}>Edit</button>
          <button onClick={()=>deletePerson(p._id)}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default App;
