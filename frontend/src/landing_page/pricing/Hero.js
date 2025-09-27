import React from 'react'

const Hero = () => {
  return (
  <div className="container text-center mt-5">
   <h1 className='mb-4'>Pricing</h1>
   <p className='text-muted mb-5'>Free equity investments and flat ₹20 intraday & F&O Trades</p>
   <div className="border-bottom"></div>
   <div className="row mt-5">
    <div className="col">
      <img src="media/images/pricing0.svg" style={{width:'70%'}} alt="" />
      <h1 className="fs-3">Free equity delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
      </div>
    <div className="col"><img src="media/images/intradayTrades.svg" style={{width:'70%'}} alt="" />
    <h1 className="fs-3">Intraday and F&O trades</h1>
          <p className="text-muted">
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
    </div>
    <div className="col"><img src="media/images/pricingMF.svg" style={{width:'70%'}} alt="" />
    <h1 className="fs-3">Free direct MF</h1>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
    </div>
   </div>
   </div>
  )
}

export default Hero