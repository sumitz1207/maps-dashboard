import React from 'react';

const Post = (props) => (
  <div className="post">
    <h1 className="post-title">Blog Post</h1>
    <div className="post-byline"><span className="post-byline-author">Ferd Zerding</span> 14 hours ago</div>
    <img src="http://placecorgi.com/800/450" className="post-image"/>
    <p>This components.</p>
    <p>Lo.</p>
    <p>Do.</p>
    <p>In.</p>
  </div>
);

export default Post;
