import React from 'react'
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'
import '../App.css';
import roofinglogo from '../roofinglogo.png'

const MockNav = () => {
    return(
        
        <>
        <div class="top-container-padding">
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
            <Nav.Link href="/home"> Active </Nav.Link>
            <Nav.Link eventKey="link-1"> FAQ </Nav.Link>
            <Nav.Link eventKey="disabled" disabled> Services </Nav.Link>
        </Nav>
        </div>

        <div className="title">
            <h1 class="title-text">Free Roof Repair Inspection & Local Roofing Quote</h1>
        </div>

        <div className="subtitle">
            <h2 class="subtitle-text">Get your roof inspected remotely and connect with our trusted roofers</h2>
        </div>

        <div class="address-form-div">
            <input type="text"/>
            <button >Get Inspection</button>
        </div>
        </div>
        
        </>
    )
}

export default MockNav