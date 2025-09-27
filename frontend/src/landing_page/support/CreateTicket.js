import React from "react";

const CreateTicket = () => {
  return (
    <div className="container">
      <h1 className="fs-3">To create a ticket, select a relevant topic</h1>
      <div className="row mt-5">
        <div className="col">
          <h1 className="fs-5 mb-5">
            <i class="fa-solid fa-circle-plus" style={{paddingRight:'10px'}}></i>Account Opening
          </h1>
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Online Account Opening</a>
          <br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Offline Account Opening</a>
          <br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}> Company, Partnership and HUF Account</a>
          <br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>NRI Account Opening</a>
          <br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Charges at Zerodha</a>
          <br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Zerodha IDFC FIRST Bank 3-in-1 Account</a>
          <br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}> Getting Started</a>
          <br />
        </div>
        <div className="col">
          <h1 className="fs-5 mb-5">
            <i class="fa-solid fa-user" style={{paddingRight:'10px'}}></i>Your Zerodha Account{" "}
          </h1>
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Login Credentials</a>
          <br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Account Modification and Segment Addition</a>
          <br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>DP ID and Bank Details</a>
          <br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Your Profile</a>
          <br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Transfer and Conversion of shares</a>
          <br />
        </div>
        <div className="col">
          <h1 className="fs-5 mb-5">
            <i class="fa-solid fa-chart-column" style={{paddingRight:'10px'}}></i>Your Zerodha Account
          </h1>
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Margin/Leverage, Product&Orders</a><br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Kite Web and Mobile</a><br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Trading FAQs</a><br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Corporate Actions</a><br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Sentinel</a><br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Kite API</a><br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Pi & other Platforms</a><br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Stockreports+</a><br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>GTT</a><br />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col">
          <h1 className="fs-5 mb-5">
          <i class="fa-solid fa-credit-card" style={{paddingRight:'10px'}}></i>Funds
          </h1>
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Adding funds</a>
          <br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Fund Withdrawal</a>
          <br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>eMandates</a>
          <br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Adding Bank Accounts</a>
        </div>
        <div className="col">
          <h1 className="fs-5 mb-5">
          <i class="fa-solid fa-c" style={{paddingRight:'10px'}}></i>Console
          </h1>
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Reports</a>
          <br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Ledger</a>
          <br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Portfolio</a>
          <br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>60 Day Challenge</a>
          <br />
        </div>
        <div className="col">
          <h1 className="fs-5 mb-5">
          <i class="fa-regular fa-circle" style={{paddingRight:'10px'}}></i>Coin
          </h1>
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Understanding Mutual Funds</a><br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>About Coin</a><br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Buying & Selling through Coin</a><br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Starting an SIP</a><br />
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
