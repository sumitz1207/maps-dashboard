import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import samplePosts from './sample_data.js';
import axios from 'axios';
import Post from './components/Post.jsx';
import Feed from './components/Feed.jsx';
import * as moment from 'moment';

/*
  READ THESE COMMENTS AS A PART OF STEP TWO

  To manage switching among the different views in this application,
  we have implemented a "view switcher" in the `App` component.

  There are three key parts to the view switcher:
    1. The `view` property defined on the `App` component's `state`
    2. The `changeView` method defined on the `App` component
    3. The `renderView` method defined on the `App` component

  The value of the `view` property will determine which gets returned by the
  `renderView` method, which is invoked inside the `App` component's `render`.
  You can set the initial value of `view` in the `App` component's `constructor`
  function, determining what view gets rendered "by default".

  If you haven't modified this code yet, the view switcher observes the following rules:
  - The default view is 'feed'
  - If the view is set to 'feed', the `<Feed>` component is displayed
  - If the view is set to any other value, the `<Post>` component is displayed
  - The `changeView` function should change the value of `view` in the `App` component's state.

  You'll make some refactors and additions to this view switcher throughout the
  next steps of the assessment. When you're ready, return to the README.
*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'feed',
      posts: [],
    };
    this.changeView = this.changeView.bind(this);
  }

  componentDidMount() {
    $.get('api/blogs', (results) => {
    })
      .done(results => {
        this.setState({
          posts: results,
        });
      });
    console.log(this.state.posts);
    this.state.posts.sort(this.state.posts.createdAt);
  }

  changeView(option) {
    this.setState({
      view: option
    });
  }

  renderView() {
    const {view} = this.state;

    if (view === 'feed') {
      return <Feed posts={this.state.posts} handleClick={() => this.changeView('anypostview')}/>;
    } else {
      return <Post posts={this.state.posts}/>;
    }
  }
  render() {
    return (
      <div>
        <div className="nav">
          <span className="logo"
            onClick={() => this.changeView('feed')}>
            BLOGMODO
          </span>
          <span className={this.state.view === 'feed'
            ? 'nav-selected'
            : 'nav-unselected'}
          onClick={() => this.changeView('feed')}>
            See all Posts
          </span>
          <span className="nav-unselected">
            Write a Post
          </span>
          <span className="nav-unselected">
            Admin
          </span>
        </div>

        <div className="main">
          {this.renderView()}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('blogmodo'));
