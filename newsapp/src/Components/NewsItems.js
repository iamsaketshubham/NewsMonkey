import React from 'react'

const NewsItems = (props)=>{

    let {title,description,imageUrl,newsUrl,author,date,source} = props;
    return (
      <div>
        <div className="card" >
        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'87%' , zIndex:'1'}}>{source}
        </span>
  <img src={!imageUrl ? "https://img.paisawapas.com/ovz3vew9pw/2022/10/20113253/Rectangle-1English-Newspapers-in-India-1.png": imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title} </h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small class="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl}  rel="noreferrer"  target="_blank" className="btn btn-sm btn-dark">Read more</a>
  </div>
</div>
      </div>
    )
  
}

export default NewsItems
