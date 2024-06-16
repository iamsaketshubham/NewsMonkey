import React, { Component } from 'react'
import NewsItems from './NewsItems'
import PropTypes from 'prop-types';
import Spinner from './Spinner';

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
  }
  
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
  capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
    constructor(){
        super();
        console.log("Hello I am a constructor from news component");
        this.state={
            articles:[],
            loading:false,
            page:1
        }
    }
    async updateNews(){
      const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=98215b3d97574841a87ac442e8f20649&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
        let data= await fetch(url);
        let parsedData = await data.json()
        this.setState({loading:false});
        this.setState({articles:parsedData.articles, totalResults:parsedData.totalResults})
    }
   async componentDidMount(){
    this.updateNews()
     
    }

        handlePrevClick = async ()=>{
           
          this.setState({page:this.state.page-1});
          this.updateNews()
        }
        handleNextClick = async ()=>{
            
          this.setState({page:this.state.page+1});
          this.updateNews()
        }

    
    render() {
        return (
            <div className="container my-4">
              <h1 className="text-center " style={{marginBottom:'-0.5rem',lineHeight:'3.2'}} >NewsMonkey-Top Headlines</h1>
                    {this.state.loading && <Spinner/> }       
                  
                <div className="row">
                {this.state.articles.map((element)=>{
                  return  <div className="col-md-4" keys={element.url} >
                    <NewsItems title={element.title?element.title.slice(0,45):""} description={ element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                </div>
                })}
                    
                    
                </div>
                <div className=" container d-flex justify-content-between my-5" >
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark " onClick={this.handlePrevClick} >&larr; Previous</button>
                <button disabled={this.state.page+1> Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick} >Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
