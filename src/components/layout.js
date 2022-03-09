/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import {useState} from "react";

const Layout = ({ children }) => {
    const [show, setShow] = useState('')
    
  return (
    <>
        <div
            style={{
                position: 'absolute',
                fontFamily: 'helvetica',
                fontWeight: '700',
                fontStyle: 'italic',
                color: '#d7d7d7',
                paddingLeft: 40,
                fontSize: 45,
                marginTop: '4%'
            }}
        >
            <div style={{display: 'flex'}}>
                <p
                    onMouseEnter={() => setShow('about')}
                    onMouseLeave={() => setShow('')}
                    className="numero"
                    style={{cursor: 'pointer', margin: 0}}
                >
                    1
                </p>
                {show === 'about' && <p className="nav-texto">About</p>}
            </div>
            
            <p className="numero" style={{marginTop: 30, cursor: 'pointer'}}>2</p>
                <p className="nav-texto"></p>
            <p className="numero" style={{marginTop: 30, cursor: 'pointer'}}>3</p>
                <p className="nav-texto"></p>
            <p className="numero" style={{marginTop: 30, cursor: 'pointer'}}>4</p>
                <p className="nav-texto"></p>
            <p className="numero" style={{marginTop: 30, cursor: 'pointer'}}>5</p>
                <p className="nav-texto"></p>
            <p className="numero" style={{marginTop: 30, cursor: 'pointer'}}>6</p>
                <p className="nav-texto"></p>
            <p className="numero" style={{marginTop: 30, cursor: 'pointer'}}>7</p>
                <p className="nav-texto"></p>
        </div>
        <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
