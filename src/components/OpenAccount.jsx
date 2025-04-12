import React from "react";

const OpenAccount = () => {
  return (
    <section>
      <div className="container start-trading">
        <div className="row mt-3">
          <div className="col-md-12 d-flex">
            <div className="box-card card-shrink card-2  bgt-primary half">
              <div className="row d-flex">
                <div className="col-md-6 box-left">
                  <h3>Start Trading Now</h3>
                </div>
                <div className="col-md-6 box-right">
                  <div className="inner-img">
                    <a
                      href="/account-comparison"
                      className="btn-one rounded-btn white-btn"
                    >
                      Open Account Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenAccount;
