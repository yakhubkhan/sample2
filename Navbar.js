import React, { useState } from "react";
import { Nav, Container, Row, Col, Image } from "react-bootstrap";
//import Panel from "react-bootstrap";
import "../App.css";
import {
  SplitPane,
  SplitPaneProps,
  ResizerOptions,
  CollapseOptions,
  SplitPaneHooks,
} from "react-collapse-pane";
import Basictree from "./Basictree";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isHide, setIsHide] = useState(false);
  const [img, setImg] = useState(faAngleUp);
  const hideBelow = () => {
    setIsHide(!isHide);
    if (isHide) {
      setImg(faAngleUp);
    } else {
      setImg(faAngleDown);
    }
  };
  return (
    <>
      {/* <ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link " aria-current="page" href="/">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link " href="/Review">REVIEW</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/Analasys">ANALYSIS</a>
  </li>
  <li class="nav-item">
    <a class="nav-link ">PUBLISH</a>
  </li>
  <li class="nav-item">
    <a class="nav-link ">VERSION</a>
  </li>
  <li class="nav-item">
    <a class="nav-link ">CONFIGURE</a>
  </li>
 
</ul> */}
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Option 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="left">
          {/* <Image src="logo192.png" className="imageCls" /> */}
          <FontAwesomeIcon icon={img} onClick={hideBelow}></FontAwesomeIcon>
        </Nav.Item>
      </Nav>
      {isHide ? (
        <div className="downPanel">
          <Container fluid>
            <Row>
              <Col>fsdfdsfds</Col>
            </Row>
            <Row></Row>
          </Container>
        </div>
      ) : null}
      <SplitPane split="vertical" initialSizes={[1, 4]}>
        <div>
          <Basictree />
        </div>
        <div>This is the second div</div>
      </SplitPane>
    </>
  );
};

export default Navbar;
