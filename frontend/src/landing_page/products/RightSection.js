import React from 'react'

const RightSection = ({imageUrl, productName, productDescription, learnMore}) => {
  return (
    <>
    <div className="container mt-5 px-5">
      <div className="row">
        <div className="col mt-5 pt-5">
          <h1 className='mb-3'>{productName}</h1>
          <p className='text-muted'>{productDescription}</p>
          <a href={learnMore} style={{textDecoration:'none'}}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
        </div>
        <div className="col">
          <img src={imageUrl} style={{width:"80%"}} alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default RightSection