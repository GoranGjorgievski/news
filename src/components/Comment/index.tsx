import React, { Component } from 'react';
import './Comment.css';

const Comment = (props: any) => {
    return (
      <div className="comment">
        {props.content}
      </div>
    );
}

export default Comment;