import React, { useState } from 'react';
import link from "react-router-dom"
import axios from 'axios';

function Form(){
const [title, setTitle] = useState("");
const [des, setDes] = useState("");
const [tag, setTag] = useState("");
const [auth, setAuth] = useState("Self");

function titlechange(e){
  setTitle(e.target.value)
}

function deschange(e){
  setDes(e.target.value)
}

function tagchange(e){
  setTag(e.target.value)
}

function submitval(e){
  e.preventDefault();
  

  const vals=({"title": title,
                 "author":auth,
                 "des": des,
                 "tag": tag
                 });
  axios.post('http://localhost:5000/note/add',vals)
  .then(res => console.log(res.data) +alert("Note added"));
}

function clearval(){
  setTitle("")
  setDes("")
  setTag("")
 }


  return (
    <div className="container">
<div className="mb-3">
  <label  className="form-label">Title</label>
  <input className="form-control" placeholder="Homework" value={title} onChange={titlechange}/>
</div>
<div className="mb-3">
  <label  className="form-label">Author</label>
  <input  className="form-control" placeholder="Self" value={auth} readOnly/>
</div>
<div className="mb-3">
  <label  className="form-label">Description</label>
  <textarea className="form-control" rows="3" value={des} onChange={deschange}></textarea>
</div>
<div className="mb-3">
  <label  className="form-label">Tags</label>
  <input className="form-control" placeholder="School" value={tag} onChange={tagchange}/>
</div>

<div className="d-flex justify-content-between">
<button type="button" className="btn btn-primary btn-lg" onClick={clearval}>Clear</button>
<button type="button" className="btn btn-primary btn-lg" onClick={submitval}>Create</button>
</div>
    </div>);
}
 export default Form;




