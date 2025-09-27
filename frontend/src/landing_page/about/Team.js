import React from 'react'

const Team = () => {
  return (
    <div className="container ">
      <div className="row border-top" style={{width:'80%', margin:'0 auto'}}>
        <h1 className='mt-5 mb-5 text-center'>People</h1>
      </div>
      <div className="row " style={{width:'80%', margin:'0 auto'}}>
        <div className="col p-3 text-center text-muted">
          <img src="media/images/nithinKamath.jpg" alt=""  style={{borderRadius:"50%", width:"60%" ,margin:'0 auto' }}/>
          <h2 className='fs-4 mt-3'>Nithin Kamath</h2>
          <p className='fs-6'>Founder, CEO</p>
        </div>
        <div className="col p-3 text-muted" style={{lineHeight:'1.9'}}>
        <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Team