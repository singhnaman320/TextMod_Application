import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {   // using props here and giving it a value at the place of importing
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.presentMode} bg-${props.presentMode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            {/* To route to given Link use <link/> in plave of <a> and "to" in place of "href"*/}
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="/">{props.aboutText}</a>
          </li> */}
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
        {/* For DarkMode and LightMode */}
        {/* text-primary is css to changle text color to blue */}
        <div className={`form-check form-switch mx-3 text-${props.presentMode==='light'?'dark':'light'}`}>
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault" id='modeChangeText'>Enable Dark Mode</label>
        </div>
      </div>
    </div>
</nav>

  )

}

// Check for title, aboutText must be string. If any other datatype provided in place of string then an error will be shown to you.
// Navbar.propTypes: take care of letter case 
// isRequired : we have to set it
Navbar.propTypes = {title: PropTypes.string.isRequired,
                    aboutText: PropTypes.string.isRequired};

// When nothing is provided in place of title and aboutText then this default will be shown                    
Navbar.defaultProps = {title: "Set title here",
                      aboutText: "Set about section here"};                    

                    
