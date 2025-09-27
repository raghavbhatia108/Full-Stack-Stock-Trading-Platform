import React from 'react'

const Education = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col"><img src="media/images/education.svg" alt="" style={{width:'70%'}} /></div>
        <div className="col">
          <h2 className='fs-2'>Free and open market education</h2>
          <p className='fs-6 mt-4'> Varsity, the largest online stock market education book in the world
          covering everything from the basics to advanced trading.</p>
          <a href="" className='fs-6' style={{textDecoration:'none'}}>Versity <i class="fa-solid fa-arrow-right"></i></a>
          <p className='fs-6 mt-4'>TradingQ&A, the most active trading and investment community in
          India for all your market related queries.</p>
          <a href="" className='fs-6' style={{textDecoration:'none'}}>Trading Q&A <i class="fa-solid fa-arrow-right" ></i></a>
        </div>
      </div>
    </div>
  )
}

export default Education