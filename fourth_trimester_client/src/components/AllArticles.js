import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchArticleDetails } from '../actions/articleActions'


const axios = require ('axios')
class AllArticles extends Component {
    
    componentDidMount() {
       this.props.fetchArticleDetails()
    }
    render(){
        const { title, content, week, image } = this.props.data;
        console.log(this.props.data)
        // if (error) {
        //     return <div>Error! {error.message}</div>;
        // }
        // if (loading) {
        //     return<div>Loading...</div>;
        // }
        // const articleItems = this.props.articles.map(article => (
        //     <div key={article.id}>
        //         <h3>{article.title}</h3>
        //         <p>{article.body}</p>
        //     </div>
        // ));
        // console.log(articles)
        return(
            <main>
                <h1>topics</h1>
                {/* {articleItems} */}
            </main>
        )
    }
}
// AllArticles.propTypes = {
//     fetchArticles: PropTypes.func.isRequired,
//     articles: PropTypes.array.isRequired
// }

// const mapStateToProps = (state) => ({
//     articles: state.articles.items,
//     loading: state.articles.loading,
//     error: state.articles.error
// })




// export default connect(mapStateToProps)(AllArticles);

// export default App;
const mapStateToProps = ({ data = {} }) => ({
  data
});
export default connect(
  mapStateToProps,
  {
    fetchArticleDetails
  }
)(AllArticles);