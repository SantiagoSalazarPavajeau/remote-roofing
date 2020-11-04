import React from 'react'
import Nav from 'react-bootstrap/Nav'
import '../App.css';
import roofinglogo from '../roofinglogo.png'

const MockNav = () => {
    return(
        // <Nav
        // justify={true}
        // activeKey="/home"
        // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        // >
        // <Nav.Item>
        //     <Nav.Link href="/home">Active</Nav.Link>
        // </Nav.Item>
        // <Nav.Item>
        //     <Nav.Link eventKey="link-1">Link</Nav.Link>
        // </Nav.Item>
        // </Nav>
        
        <span className="top-nav">
            <div className="logo-div">
            <img src={roofinglogo} height="30px" />
            </div>
            <div className="phone-number">
                <p> +1800-remote-roofing</p>
            </div>
        </span>
    )
}

export default MockNav