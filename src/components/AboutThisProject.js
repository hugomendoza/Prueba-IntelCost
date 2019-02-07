import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Row, Col, Fade} from "reactstrap";

export default class AboutUs extends Component {
  render() {
    return (
    <Fade>
    <Row>
      <Col xs={12} className="mt-5">
          <h1  >About this project</h1>
      </Col>
    </Row>

    
        This was my first project in ReactJS during learnig this language.
        I use Pixabay free API to fetch data and display image in list.<br /><br />

        Tags:<br />
        <Link to="https://reactjs.org/" target="_blank">ReactJS</Link>  <br />
        <Link to="https://www.npmjs.com/package/react-router" target="_blank">React Router</Link><br />
        <Link to="https://reactstrap.github.io/" target="_blank">Reactstrap</Link><br />
        <Link to="http://neptunian.github.io/react-photo-gallery/" target="_blank">React Photo Gallery</Link><br />
        
        <br />
        You can find source code on <a href="#!">github</a>
        
    </Fade>
    )
  }
}
