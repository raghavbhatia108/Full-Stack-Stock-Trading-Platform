import React from 'react'

const Awards = () => {
  return (
   <div className="container mt-5 mb-5">
    <div className="row">
        <div className="col">
            <img src="media/images/LargestBroker.svg" alt="Largest Stock Broker" style={{width:''}} />
        </div>
        <div className="col mt-3">
            <h1>Largest Stock Broker in India</h1>
            <p className='pb-4'>2+ Million Zerodha Clients contribute to over 15% of all retail order <br /> volume in India daily by trading and investing in:</p>
            <div className="row pb-3">
                <div className="col">
                    <ul style={{ paddingLeft: '20px' }}>
                        <li className='p-2'>Futures and Options</li>
                        <li className='p-2'>Commodity Derivatives</li>
                        <li className='p-2'>Currency Derivatives</li>
                    </ul>
                </div>
                <div className="col">
                <ul>
                        <li className='p-2'>Stocks & IPOs</li>
                        <li className='p-2'>Direct Mutual Funds</li>
                        <li className='p-2'>Bonds & Govt. securities</li>
                    </ul>
                </div>
            </div>
            <img src="media/images/pressLogos.png" style={{width:'90%'}} alt="" />
        </div>
    </div>
   </div>
  )
}

export default Awards