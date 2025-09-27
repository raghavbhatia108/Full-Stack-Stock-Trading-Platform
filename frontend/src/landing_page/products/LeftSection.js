import React from 'react'

const LeftSection = ({imageUrl, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) => {
  return (
    <div className="container px-5 mt-5 mb-5">
      <div className="row">
        <div className="col">
          <img src={imageUrl} alt="" style={{width:"80%"}}/>
        </div>
        <div className="col mt-5">
          <h1 className='mb-3'>{productName}</h1>
          <p className='text-muted'>{productDescription}</p>
          <div className="row mb-4" >
            <div className="col-3"><a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i class="fa-solid fa-arrow-right"></i></a></div>
            <div className="col-3"><a href={learnMore} style={{textDecoration:"none"}}>Learn More <i class="fa-solid fa-arrow-right"></i></a></div>
          </div>
          <div className="row">
            <div className="col-3"><a href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt="" /></a></div>
            <div className="col-3"><a href={appStore}><img src="media/images/appstoreBadge.svg" alt="" /></a></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSection