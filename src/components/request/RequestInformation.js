import React, { useState } from "react";
import "./RequestInformation.css";
import { RiArrowDownSLine } from "react-icons/ri";
import Navbar from "../navbar/Navbar";

const RequestInformation = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <Navbar />
      <div className='request-info-container'>
        <div className='request-info-title'>Request Information</div>
        <div className='request-info-datas'>
          <div className='request-info-data'>
            <div className='data-one'>
              <h3>Request Type</h3>
              <p>Post-Con</p>
            </div>
            <div className='data-one'>
              <h3>Customer Name</h3>
              <p>Peter Abu-Ekpeshie</p>
            </div>
            <div className='data-one'>
              <h3>Cleaning Date</h3>
              <p>
                09<span>&#8226;</span>10<span>&#8226;</span>2019
              </p>
            </div>
          </div>

          <div className='request-info-data'>
            <div className='data-one'>
              <h3>Invoice Status</h3>
              <p className='special'>Ungenerated</p>
            </div>
            <div className='data-one'>
              <h3>Request Date</h3>
              <p>
                09<span>&#8226;</span>10<span>&#8226;</span>2019
              </p>
            </div>
            <div className='data-one'>
              <h3>Request Time</h3>
              <p>8:00 A.M</p>
            </div>
          </div>

          <div className='request-info-data'>
            <div className='data-one'>
              <h3>Location</h3>
              <p>
                8, Yovi street, <br />
                Iwaya, Onike, Yaba.
              </p>
            </div>
            <div className='data-one'>
              <h3>Request Type</h3>
              <p>Post-Con</p>
            </div>
            <div className='data-one'>
              <h3>House-Type</h3>
              <p>5-Bedroom Duplex</p>
            </div>
          </div>

          <div>
            <hr />
          </div>

          <div className='request-info-action'>
            <span className='first'>Action</span>
            <span className='second' onClick={handleClick}>
              <RiArrowDownSLine />
            </span>
          </div>

          <div
            className={
              click ? "request-info-dropdown active" : "request-info-dropdown"
            }
          >
            <ul>
              <li>Contact customer</li>
              <hr />
              <li>Generate invoice</li>
              <hr />
              <li>Reject request</li>
            </ul>
            <div className='arrow-down'></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestInformation;
