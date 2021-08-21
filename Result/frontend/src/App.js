import React, { Component } from 'react';
import './App.css';

import Top from './components/Top';
import Title from './components/Title';
import Content from './components/Content';
import Bottom from './components/Bottom';

class App extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    try { 
      const res = await fetch('http://127.0.0.1:8000/blog/');
      const posts = await res.json();
      this.setState({
        posts
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        {this.state.posts.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <span>{item.content}</span>
          </div>
        ))}
      </div>
      // <div className="App">
      //   <Top 
      //     name="일주일 프백디"
      //   ></Top>
      //   <Title 
      //     large_category="대분류" 
      //     small_category="소분류" 
      //     content_title="게시글 이름" 
      //     uploader="게시자" 
      //     upload_date="게시일"
      //   ></Title>
      //   <Content></Content>
      //   <Bottom
      //     nickname="오늘" 
      //     email="toda1213@naver.com"
      //   ></Bottom>
      // </div>
    );
  }
}

export default App;
