import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./InvoiceInfo.css";

const InvoiceInfo = () => {
  return (
    <>
      <Navbar />
      <div className='invoice-info-container'>
        <div className='request-info-title'>Generate invoice</div>
        <div className='request-info-subtitle'>ENTER YOUR INVOICE</div>

        <div className='invoice-form'>
          <form>
            <div className='invoice-form-one'>
              <div className='form-col'>
                <label>Customer/Company name</label>
                <input type='text' name='name' placeholder='Spleet Limited' />
              </div>

              <div className='mid-col'>
                <div className='form-col'>
                  <label>Email address</label>
                  <input type='text' name='name' placeholder='info@spleet.ng' />
                </div>
                <div className='form-col'>
                  <label>Phone number</label>
                  <input type='text' name='name' placeholder='08062540732' />
                </div>
              </div>

              <div className='form-col'>
                <label>Home/ Building Address</label>
                <input
                  type='text'
                  name='name'
                  placeholder='51, Iwaya Road, Onike, Iwaya'
                />
              </div>
            </div>

            <div>
              <div className='invoice-form-two'>
                <div className='mid-col'>
                  <div className='form-col'>
                    <label>Issue date</label>
                    <input type='text' name='name' placeholder='08/10/2020' />
                  </div>
                  <div className='form-col'>
                    <label>Due date</label>
                    <input type='text' name='name' placeholder='08/10/2020' />
                  </div>
                </div>

                <div className='mid-col'>
                  <div className='form-col'>
                    <label>Invoice number</label>
                    <input type='text' name='name' placeholder='00000001' />
                  </div>
                  <div className='form-col'>
                    <label>V.A.T %</label>
                    <input type='text' name='name' placeholder='7.5%' />
                  </div>
                </div>

                <div className='form-col'>
                  <label>Service description</label>
                  <input
                    type='text'
                    name='name'
                    placeholder='5 Beedroom Duplex post-con cleaning'
                  />
                </div>

                <div className='mid-col'>
                  <div className='form-col'>
                    <label>Service amount</label>
                    <input type='text' name='name' placeholder='NGN 45,000' />
                  </div>
                  <div className='form-col amount'>
                    <label>Total amount</label>
                    <div className='field'>
                      <p>NGN 48,375</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='actions'>
                <div className='go-back'>
                  <Link to='/' className='nav-links'>
                    <input type='submit' value='CANCEL' />
                  </Link>
                </div>
                <div className='customer'>
                  <Link to='/preview-invoice' className='nav-links'>
                    <input type='submit' value='CREATE INVOICE' />
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default InvoiceInfo;
