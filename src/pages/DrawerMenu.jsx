import React from "react";
import ReactDOM from "react-dom";
// import "./styles.css";
import "rsuite/dist/rsuite.css";
import "../../src/pages/drawerstyle.css";
import ListGroup from "react-bootstrap/ListGroup";
import demo1 from "../assets/images/demo1.webp";
import demo2 from "../assets/images/demo2.webp";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import { List, WhatweDo } from "../../DummyData";

import {
  Drawer,
  RadioGroup,
  Radio,
  ButtonToolbar,
  Button,
  IconButton,
  Placeholder,
} from "rsuite";
import AngleRightIcon from "@rsuite/icons/legacy/AngleRight";
import AngleLeftIcon from "@rsuite/icons/legacy/AngleLeft";
import AngleDownIcon from "@rsuite/icons/legacy/AngleDown";
import AngleUpIcon from "@rsuite/icons/legacy/AngleUp";
import { useState } from "react";

const styles = {
  radioGroupLabel: {
    padding: "8px 12px",
    display: "inline-block",
    verticalAlign: "middle",
  },
};

const DrawerMenu = () => {
  const [size, setSize] = React.useState("lg");
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();
  const [openDiv, setOpenDiv] = useState(false);
  const [hoverlist, setHoverlist] = useState(false);
  const [data, setData] = useState();

  console.log("list dummy data", List);

  const handleOpen = (key) => {
    setOpen(true);
    setPlacement(key);
  };
  const handleOpenInfoDiv = () => {
    setOpenDiv(true);
  };
  const mouseOverlist1 = (list) => {
    console.log("function mouseOverlist1", list);
    setHoverlist(true);
    setData(list);
  };
  const mouseOutlist1 = () => {
    setHoverlist(false);
  };
  return (
    <>
      {/* <RadioGroup inline appearance="picker" value={size} onChange={setSize}>
        <span style={styles.radioGroupLabel}>Size: </span>

        <Radio value="lg">Large</Radio>
      </RadioGroup> */}
      <hr />
      <ButtonToolbar>
        {/* <IconButton
          icon={<AngleRightIcon />}
          onClick={() => handleOpen("left")}
        >
          Left
        </IconButton> */}
        {/* <IconButton
          icon={<AngleLeftIcon />}
          onClick={() => handleOpen("right")}
        >
          Right
        </IconButton> */}
        <IconButton icon={<AngleDownIcon />} onClick={() => handleOpen("top")}>
          Top
        </IconButton>
        {/* <IconButton icon={<AngleUpIcon />} onClick={() => handleOpen("bottom")}>
          Bottom
        </IconButton> */}
      </ButtonToolbar>

      <Drawer
        size={size}
        placement={placement}
        open={open}
        onClose={() => setOpen(false)}
      >
        <Drawer.Header>
          <Drawer.Title>Drawer Title</Drawer.Title>
          <Drawer.Actions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => setOpen(false)} appearance="primary">
              Confirm
            </Button>
          </Drawer.Actions>
        </Drawer.Header>
        <Drawer.Body>
          {/* <Placeholder.Paragraph rows={8} /> */}

          <div className="DrawerContainer">
            <Tab.Container
              id="list-group-tabs-example"
              //   defaultActiveKey="#link1"
            >
              <div className="leftDrawer">
                <div className="list" onClick={handleOpenInfoDiv}>
                  <ListGroup variant="flush">
                    <ListGroup.Item className="item" action href="#link1">
                      About Us
                    </ListGroup.Item>
                    <ListGroup.Item className="item" action href="#link2">
                      What We Do
                    </ListGroup.Item>
                    <ListGroup.Item className="item" action href="#link3">
                      Our Commitments
                    </ListGroup.Item>
                    <ListGroup.Item className="item">
                      Intelligence
                    </ListGroup.Item>
                    <ListGroup.Item className="item">Careers</ListGroup.Item>
                    <ListGroup.Item className="item">
                      Investor Relations
                    </ListGroup.Item>
                    <ListGroup.Item className="item">
                      Media Relations
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </div>
              <div className="rightDrawer">
                {!openDiv ? (
                  <div className="info">
                    <div className="cardinfo">
                      <div className="card1">
                        <img height="200px" src={demo1} alt="demo1" />
                        <p>Accelerating Transition</p>
                      </div>
                      <div className="card2">
                        <img height="200px" src={demo2} alt="demo2" />
                        <p>Patrick Cantlay</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="detailleft1">
                      <Col sm={12}>
                        <Tab.Content>
                          <Tab.Pane eventKey="#link1">
                            <div className="list AboutHower">
                              <ListGroup variant="flush">
                                {List.map((item) => (
                                  // console.log("map list item: ", item.Titile);

                                  <ListGroup.Item
                                    className="item"
                                    onMouseOver={() => {
                                      mouseOverlist1(item);
                                    }}
                                    onMouseOut={mouseOutlist1}
                                  >
                                    {item.Titile}
                                  </ListGroup.Item>
                                ))}

                                {/* <ListGroup.Item className="item">
                                  {List.Titile}
                                </ListGroup.Item>
                                <ListGroup.Item className="item">
                                  People and Leadership
                                </ListGroup.Item>
                                <ListGroup.Item className="item">
                                  Commitment to Client Service
                                </ListGroup.Item>
                                <ListGroup.Item className="item">
                                  Culture of Innovation
                                </ListGroup.Item> */}
                              </ListGroup>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="#link2">
                            <div className="list">
                              <ListGroup variant="flush">
                                {WhatweDo.map((item) => (
                                  <ListGroup.Item
                                    className="item"
                                    onMouseOver={() => {
                                      mouseOverlist1(item);
                                    }}
                                    onMouseOut={mouseOutlist1}
                                  >
                                    {item.Titile}
                                  </ListGroup.Item>
                                ))}
                                {/* <ListGroup.Item className="item">
                                  Overview
                                </ListGroup.Item>
                                <ListGroup.Item className="item">
                                  Discover Goldman Sachs
                                </ListGroup.Item>
                                <ListGroup.Item className="item">
                                  Asset & Wealth Management
                                </ListGroup.Item>
                                <ListGroup.Item className="item">
                                  Global Banking & Markets
                                </ListGroup.Item>
                                <ListGroup.Item className="item">
                                  Platform Solutions
                                </ListGroup.Item> */}
                              </ListGroup>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="#link3">
                            <div className="list">
                              <ListGroup variant="flush">
                                <ListGroup.Item className="item">
                                  Diversity & Inclusion
                                </ListGroup.Item>
                                <ListGroup.Item className="item">
                                  Community Engagement
                                </ListGroup.Item>
                                <ListGroup.Item className="item">
                                  Sustainability
                                </ListGroup.Item>
                              </ListGroup>
                            </div>
                          </Tab.Pane>
                        </Tab.Content>
                      </Col>
                    </div>
                    <div className="detailleft2">
                      {hoverlist ? (
                        <div>
                          <h3> {data.Titile} </h3>
                          <br></br>
                          <p>{data.Discription}</p>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </>
                )}
              </div>
            </Tab.Container>
          </div>
        </Drawer.Body>
      </Drawer>
    </>
  );
};

export default DrawerMenu;
