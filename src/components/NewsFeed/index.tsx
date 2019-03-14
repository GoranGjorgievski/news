import React, { Component } from 'react';
import {connect} from 'react-redux';
import './NewsFeed.css';

import Story from '../Story';

type Props = {
  news: Array<{id:number, title:string, isTopNews:boolean, text:string, comments: Array<string>}>
};
type State = {};

class NewsFeed extends Component<Props,State> {

  render() {
    return (
      <div className="news-feed">
        <h2>Top stories</h2>
        <section className='top-stories'>
        {
          this.props.news
          .filter(item=> item.isTopNews)
          .map(item => <Story key={`story-${item.id}`} {...item}/>)
        }
        
        </section>
        <hr className="style-seven"></hr>
        <h2>Other stories</h2>
        <section className='other-stories'>
        {
          this.props.news
          .filter(item=> !item.isTopNews)
          .map(item => <Story key={`story-${item.id}`} {...item} />)
        }
        </section>
      </div>
    );
  }
}

export const mapStateToProps = (state:any) => {
  return {
      news: state.news.data
  };
};

export default connect(mapStateToProps, {})(NewsFeed);