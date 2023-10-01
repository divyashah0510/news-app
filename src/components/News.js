import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';



export class News extends Component {
  static defaultProps = {
    country: 'in',
    pagesize: 10
  }
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
  }
  constructor() {
    super();
    console.log("Constructor of new component")
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0

    }
  }
  async updateNews() {
    // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pagesize}`
    // this.setState({loading:true});
    // let data = await fetch(url);
    // console.log(data)
    // let parsedata = await data.json();
    // console.log(parsedata)
    // this.setState({ articles: parsedata.articles, totalResults: parsedata.totalResults,loading:false })
  }
  async componentDidMount() {
    this.updateNews()
  }
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4237de624ca84657aefa0567acfd5a91&page=${this.state.page}&pageSize=${this.props.pagesize}`
    let data = await fetch(url);
    console.log(data)
    let parsedata = await data.json();
    console.log(parsedata)
    this.setState({
      articles: this.state.articles.concat(parsedata.articles),
      totalResults: parsedata.totalResults,
    })
  };

  render() {
    return (
      <div className='container my-2'>
        <h1 className='text-center'>News-App Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={this.state.loading && <Spinner />}
        ></InfiniteScroll>
        <div className='container'>
          <div className='row'>
            {this.state.articles.map((element) => {
              return <div className='col-md-4' key={element.url}>
                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageurl={element.urlToImage ? element.urlToImage : "https://www.livemint.com/lm-img/img/2023/09/29/1600x900/ve_1696001380670_1696001380951.JPG"} newsurl={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt ? element.publishedAt : "Unknown"} source={element.source.name} />
              </div>
            })}
          </div>

        </div>
      </div>
    )
  }
}

export default News
