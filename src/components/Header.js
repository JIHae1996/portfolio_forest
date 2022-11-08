import React from 'react';
import { FaPlane, FaWifi, FaMoon, FaBluetoothB, FaBatteryFull } from "react-icons/fa";

import '../styles/Header.scss';
import '../styles/Common.scss';

function Header() {
  return (
    <>
    <div className='main_header'>
    <header className="header">
        <div className="status_bar">
            <div className="left_item">
                <FaPlane />
                <FaWifi />
            </div>
            <div className="center_item">
                <span>00</span>:<span>00</span>
            </div>
            <div className="right_item">
                <FaMoon />
                <FaBluetoothB />
                <span><span>100</span>%</span>
                <FaBatteryFull />
            </div>
        </div>
    </header>
    </div>
    </>
  )
}

export default Header