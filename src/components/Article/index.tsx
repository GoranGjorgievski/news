import React, { Component } from 'react';
import {connect} from 'react-redux';
import { number } from 'prop-types';
import {Link} from 'react-router-dom';
import './Article.css';

import Comment from '../Comment';

type Props = {
    match: {
        params:{
            id: number,
        }
    },
    news: [{
        id: number,
        title: string,
        text: string,
        comments: Array<string>,
    }]
};
type State = {};

class Article extends Component<Props,State> {
  render() {
    const article = this.props.news.filter(item => item.id == this.props.match.params.id); //do this with selectors better and not using hardcoded [0] -- bad pratice :)
    return (
      <>
      <Link className='back-button' to='/'>Home</Link>
      <div className="article">
        <h2>{article[0].title}</h2>
        <p className='article-text'>{article[0].text}</p>
        <hr></hr>
        <div className='article-comments'>
            <h3>Comments</h3>
            {article[0].comments.map((item,i) => <Comment key={`comment-${i}`} content={item} className='comment' />)}
        </div>
      </div>
      </>
    );
  }
}
export const mapStateToProps = (state:any) => {
    return {
        news: state.news.data,
    };
};

export default connect(mapStateToProps,{})(Article);
