import React from 'react'
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'
import '../App.css';
import roofinglogo from '../roofinglogo.png'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';


const MockNav = () => {
    return(
        
        <>
        <div className="top-container-padding">
        <div className="top-nav">
            <div className="logo">
            <img src={roofinglogo} height="30px" />
            </div>
            <div className="phone-number">
                <p> +1800-remote-roofing</p>
            </div>
        </div>

        <div className="mid-nav">
         <Nav
        justify={true}
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            <h3>
            <Nav.Link href="/home"> Home </Nav.Link>
            <Nav.Link eventKey="link-1"> FAQ  </Nav.Link>
            <Nav.Link eventKey="disabled" disabled> Services </Nav.Link>
            </h3>
        </Nav>
        </div>

        <div className="title">
            <h1 className="title-text">Free Roof Repair Inspection & Local Roofing Quote</h1>
        </div>

        <div className="subtitle">
            <h2 className="subtitle-text">Get your roof inspected remotely and connect with our trusted roofers</h2>
        </div>

        <div className="address-form-div">
            {/* <input onFocus={handleFocus} type="text" autoComplete={addresses} /> */}

            <Autocomplete
                id="custom-input-demo"
                options={addresses}
                renderInput={(params) => (
                    <div ref={params.InputProps.ref}>
                    <input style={{ width: 300 }} type="text" {...params.inputProps} />
                    </div>
                )}
            />
            <button onClick={() => alert("hello")} >Get Inspection</button>
        </div>
        </div>
        
        </>
    )
}

export default MockNav


const addresses = [
    '150 West Griffin Street Lawndale, CA 90260',
'712 Anderson St. Holly Springs, NC 27540',
'7673 High Ridge St. Deer Park, NY 11729',
'63 Tower Street Riverview, FL 33569',
'7755 Wall Street Baldwinsville, NY 13027',
'434 West Monroe Road Camp Hill, PA 17011'
]