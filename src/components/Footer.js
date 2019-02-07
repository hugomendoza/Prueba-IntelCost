import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Footer extends Component {
  render() {
    return (
        <footer className="footer">
            <div className="container">
                <span className="text-muted">Tibor Markucz</span>
                
                <span className="float-right">
                        <Link alt="GITHUB page" target="_blank" to="https://github.com/tibor-markucz/" > <i className="pr-3 fab fa-github"></i></Link>
                        <Link alt="LinkeIN page" target="_blank" to="https://www.linkedin.com/in/m%C3%A1rkucz-tibor-9b7aab11b/" ><i className="pr-3 fab fa-linkedin"></i></Link>
                </span>

                

            </div>
        </footer>
    )
  }
}
