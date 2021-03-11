import React from 'react';

const Comment = ({comment}) => {
    const {name,email} = comment;
    return (
        <div>
            <h2>Comment Name : {name}</h2>
            <p>Comment Email : {email}</p>
        </div>
    );
};

export default Comment;