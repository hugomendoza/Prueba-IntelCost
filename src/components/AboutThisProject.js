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
        <a title="ReactJS" href="https://reactjs.org/" target="_blank">ReactJS</a>  <br />
        <a title="React Router" href="https://www.npmjs.com/package/react-router" target="_blank">React Router</a><br />
        <a title="Reactstrap" href="https://reactstrap.github.io/" target="_blank">Reactstrap</a><br />
        <a title="React Photo Gallery" href="http://neptunian.github.io/react-photo-gallery/" target="_blank">React Photo Gallery</a><br />
        
        <br />
        You can find source code on <a href="https://github.com/tibor-markucz/pixabay-reactjs" target="_blank" title="ReactJS - pixabay-com API">GITHUB</a>
        
    </Fade>
    )
  }
}
