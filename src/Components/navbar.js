import React from 'react'
import PropTypes from 'prop-types';
// import {Link} from 'react-router-dom'
export default function Navbar(props){
  // const navbar = {
  //   darkmode:props.mode,
  //   greenmode: props.mode2
  // }
  // const bg = {
  //   darkmode:props.mode,
  //   greenmode:props.mode2
  // }
    return (
        

<nav className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/about">{props.aboutText}</Link>
          </li> */}
          </ul>
 
        {/* <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-primary" type="submit">Search</button>
    </form> */}
        <div className={`form-check form-switch mx-3 text-${props.mode === 'light'?'black':'white'}`}>
    <input className="form-check-input" onClick={props.toggleMode2} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
    <label className="form-check-label" for="flexSwitchCheckDefault">green dark mode</label>
    </div>
        <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle dark mode</label>
</div>
    
  
        
        
      </div>
    </div>
  </nav>


    )
}



Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string 
}

// Navbar.defaultProps = {
//   title:'set title here',
//   aboutText : "about text here"
// }