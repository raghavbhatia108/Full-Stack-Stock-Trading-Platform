import React from 'react'

const Universe = () => {
  return (
    <div className="container text-center mt-5">
      <div className="row mt-5">
      <h1>The Zerodha Universe</h1>
      <p>Extend your trading and investment experience even further with our partner platforms</p>
      </div>
      <div className="row mt-5" style={{display:'flex', alignItems:'center'}}>
        <div className="col-4">
        <img src="media/images/smallcaseLogo.png" alt=""  className="mb-2"/>
        <p className="text-small text-muted">Thematic Investment Plan</p>

        </div>
        <div className="col-4">
        <img src="media/images/streakLogo.png" alt="" style={{width:'40%'}}  className="mb-2"/>
        <p className="text-small text-muted">Algo & Strategy Platform</p>
        </div>

        <div className="col-4">
          <img src="media/images/sensibullLogo.svg" alt="" style={{width:'50%'}}  className="mb-2"/>
          <p className="text-small text-muted">Options Trading Platform</p>
        </div>
      </div>
      <div className="row mt-5" style={{display:'flex', alignItems:'center'}}>
        <div className="col">
          <img src="media/images/zerodhaFundHouse.png" alt="" style={{width:"50%"}}  className="mb-2"/>
          <p className="text-small text-muted">Asset Management</p>
        </div>
        <div className="col">
          <img src="media/images/goldenpiLogo.png" alt="" style={{width:'50%'}} className="mb-2"/>
          <p className="text-small text-muted">Bonds Trading Platform</p>
        </div>
        <div className="col">
          <img src="media/images/dittoLogo.png" alt="" style={{width:"40%"}} className="mb-2"/>
          <p className="text-small text-muted">Insurance</p>
        </div>
      </div>
      <button className='btn btn-primary fs-6 mt-5' style={{width:'15%', margin:'0 auto', padding:'10px 4px'}}>Signup Now</button>
    </div>
     
  )
}

export default Universe
{/* <img src="media/images/zerodhaFundHouse.png" alt="" />
<p>Asset Management</p>
          <img src="media/images/goldenpiLogo.png" alt="" />
          <p>Bonds Trading Platform</p> */}