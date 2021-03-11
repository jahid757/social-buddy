import React from 'react';
import { useHistory } from 'react-router';

const Post = ({post}) => {

    const {id,title,body} = post;

    const style ={margin:'20px',padding:'20px'}
    const history = useHistory();
    const showComments = id => {
        const url = `post/${id}`;
        history.push(url)
    }
    
    return (
        <div style={style}>
            <h2><strong>ID: {id}</strong> {title}</h2>
            <p>{body}</p>
            <button onClick={() => showComments(id)}>Show Comments</button>
        </div>
    );
};

export default Post;