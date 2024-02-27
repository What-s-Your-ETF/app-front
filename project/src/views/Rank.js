/*!

=========================================================
* Paper Dashboard React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
// reactstrap components
import {
  UncontrolledAlert,
  Alert,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const developers = [
  {
    name: "짱구",
    photourl:
      "https://upload.wikimedia.org/wikipedia/ko/thumb/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png/230px-%EC%8B%A0%EC%A7%B1%EA%B5%AC.png",
    oneline: "떡잎방범대 개발자",
  },
  {
    name: "철수",
    photourl:
      "https://i.namu.wiki/i/Cv48b-WvD-d_C4Yt8LpyWygbM368tnEZ0XGbIcZw5ZaQxBlwHHu76LVJZrsMiP5DyEahwXyKkQJAnBHwsS2pyg.webp",
    oneline: "떡잎방범대 개발자",
  },
  {
    name: "맹구",
    photourl:
      "https://i.namu.wiki/i/hWLEwQhnjvdoRZQhrgHMKAZjiSVPO5D86_nBD6OCVLHamm0dM7Ssv2KTfYgjJj-V_X3hMsgV-LeIgI7lmbqzhA.webp",
    oneline: "떡잎방범대 개발자",
  },
  {
    name: "철수",
    photourl:
      "https://i.namu.wiki/i/zfd-NOPP39XJ49BUBLXu8d3SAPsYnpvqYviuQHzSe8FqI6DhYAaHp5Nx30dWi_Q5XGUcbczMfuSp1lOMAN3NvA.webp",
    oneline: "떡잎방범대 개발자",
  },
];

function Rank() {
  const notificationAlert = React.useRef();
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h4>Developers</h4>
                </div>
              </CardHeader>
              <CardBody style={{ display: "flex", gap:"1%"}}>
                {developers.map((info, id) => (
                  <Card style={{ flex: 1, width: "18rem" }}>
                    <Card.Img variant="top" src={info.photourl}  style={{ height: '150px' }}/>
                    <Card.Body>
                      <Card.Title>{info.name}</Card.Title>
                      <Card.Text>{info.oneline}</Card.Text>
                      <Button variant="primary">Git Hub</Button>
                    </Card.Body>
                  </Card>
                ))}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Rank;
