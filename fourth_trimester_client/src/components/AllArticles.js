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
        console.log(this.props.articles)
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
// const mapStateToProps = ({ data = {} }) => ({
//   data
// });

const mapStateToProps = state => ({
  articles: state.articles
})

const mapDispatchToProps = dispatch => {
  return{
    fetchArticleDetails: () => dispatch(fetchArticleDetails())
  }
}
export default connect(
  mapStateToProps, mapDispatchToProps
)(AllArticles);