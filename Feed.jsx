import React from 'react';
import * as moment from 'moment';

const Feed = (props) => (
  <div className="feed">
    {props.posts.map( (post) => {
      return (
        <li className="feed-list-item">
          <div className="feed-list-item-title" onClick={props.handleClick}>{post.title}</div>
          <div className="feed-list-item-byline"><span className="feed-list-item-byline-author">{post.author}</span> {moment(post.createdAt).fromNow()} </div>
          <img src={post.imageUrl} onClick={props.handleClick} className="feed-list-item-image"/>
          <span className="feed-list-item-lede">{post.body} </span>
        </li>
      );
    }
    )}
  </div>
);

export default Feed;
