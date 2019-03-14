import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Story.css';


const Story = (props: any) => {
    return (
      <Link to={`/article/${props.id}`} >
       <div className="story">
        <h3>{props.title}</h3>
        <p className='story-text'>{props.text}</p>
       </div>
      </Link>
    );
}

export default Story;