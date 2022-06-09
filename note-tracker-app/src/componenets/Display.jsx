import axios from 'axios';
import React, {Component,useState} from 'react';

function Display(props){



function del(e){
  axios.delete("http://localhost:5000/note/"+e.target.id)
  .then(res => console.log(res.data));
}


  return (
  
<div className="card"  key={props.id} style={{width: "18rem"}}>
  
  <div className="card-body">
    <h5 className="card-title">Title :{props.title}</h5>
    <p className="card-text">{props.des}</p>

<hr />
<p className="card-text">Tags:{props.tags}</p>
<hr />
<p className="card-text">created on{props.date} by <b>{props.author}</b></p>

    <div className="d-flex justify-content-between">
    <a  className="btn btn-primary" onClick={del} id={props.id}>Delete</a>
    </div>
  </div>
</div>
    );
  }
export default Display;

