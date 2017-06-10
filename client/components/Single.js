import React from 'react';
import Photo from './Photo';
import Comment from './Comments'

export default class Single extends React.Component {

  render() {
  	// need index of the post
  	const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
  	// get the post
  	const post = this.props.posts[i];
  	console.log(post);

    return (
      <div className = "single-photo">
      	<Photo i={i} post={post} {...this.props} />
      	<Comment />
      </div>
    );
  }
};
