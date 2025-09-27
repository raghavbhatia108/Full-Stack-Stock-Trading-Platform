import React from 'react'

const Brokerage = () => {
  return (
    <h1>
        <div className="container mt-5">
          <div className="row">
            <div className="col-8" style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
              <h1 className='text-center mb-5 fs-4' style={{color:"#3C8CE7"}}>Brokerage Calculator</h1>
              <ul
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
            className="text-muted"
          >
            <li>
              Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
            </div>
            <div className="col-4">
              <h1 className='text-center mb-5 fs-4' style={{color:"#3C8CE7"}}>List of Charges</h1>

            </div>
          </div>
        </div>
    </h1>
  )
}

export default Brokerage