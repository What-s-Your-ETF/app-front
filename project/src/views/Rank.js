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
    name: "카리나",
    photourl:
    //   "https://upload.wikimedia.org/wikipedia/ko/thumb/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png/230px-%EC%8B%A0%EC%A7%B1%EA%B5%AC.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSHsnfJo4ldSYjXZt2vJhrA2PzmmuhZMpncA&usqp=CAU",

    oneline: "떡잎방범대 개발자",
  },
  {
    name: "차은우",
    photourl:
    //   "https://i.namu.wiki/i/Cv48b-WvD-d_C4Yt8LpyWygbM368tnEZ0XGbIcZw5ZaQxBlwHHu76LVJZrsMiP5DyEahwXyKkQJAnBHwsS2pyg.webp",
    "data:image/jpeg;base64,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",
    oneline: "떡잎방범대 개발자",
  },
  {
    name: "크리스 에반스",
    photourl:
    //   "https://i.namu.wiki/i/hWLEwQhnjvdoRZQhrgHMKAZjiSVPO5D86_nBD6OCVLHamm0dM7Ssv2KTfYgjJj-V_X3hMsgV-LeIgI7lmbqzhA.webp",
    "data:image/jpeg;base64,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",
    oneline: "떡잎방범대 개발자",
  },
  {
    name: "김수현",
    photourl:
    //   "https://i.namu.wiki/i/zfd-NOPP39XJ49BUBLXu8d3SAPsYnpvqYviuQHzSe8FqI6DhYAaHp5Nx30dWi_Q5XGUcbczMfuSp1lOMAN3NvA.webp",
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAACBQEDBAYHAP/EADUQAAIBAwMCBAIIBgMAAAAAAAECAwAEEQUhMRJRBhNBcWGRIjIzobHB0fAVUmKCwuEUQoH/xAAYAQEAAwEAAAAAAAAAAAAAAAAAAQMEAv/EABoRAQEAAwEBAAAAAAAAAAAAAAABAhEhAzH/2gAMAwEAAhEDEQA/AOZrVi0AqxakK9YmYARqNs/W/IUsRsNk70011doW9x+FK41LOABkk4AqAzimJsWAAUttkDc/CseG1uFO0bgtwcGty8N6QoWPzkBOOCOK3u30y3lVRJCjDsVqnL11eNGPjudcdfS7/wAkF4XKDnaoyzKECAIpxhht8q7vJp8fkhOhenHGNq0Txh4bQQSXthGEmj3dVH1x67Ux9e9MvHm45u/Xa3BcBkIIz08U8gZXhV14YZ5zS+8dJrJWOzgY2rK03qNjEWGP0q5QvYVXirTxQEVKELVi1WvFWpQYmrRGWyJH/Q9VU+H7ZWuVkfBxv7Vk38rRRgKgZWBDZrF0WKZ45PKZge49K4yvHeE7HStGRZOkrjArcba3IjDelcu02C2wAviAWsrceYds+9bnoV5f2DizvrgXKv8AZyLvke9ZrJOteNtbWCGjORvilF8iMGRuG2rC1y8vG6o7a7/4SL9aUkAD50qhtLyVupNdiuXU5+ieoex3py9N2Vy/W7R7bV5rFfSTC+x3H3U0RBHEka8KoA/8ptrOiXF54wuGiCBYrZZpHY4VcjH5UtlRo5GjcYZSQR8RWnC7jJnjq7VEUFGwoK7cBUVYvFVrRigKZQ9pPtuEOPu/3R+BWQX3lybg+lDuQQPXn41i2HVp+qxsDkPvVeU+rsMpx1SLw1ZuyOsUbIH8xVdAwVu4q8LGutW9ug+zbrJ7knf9/GrND1FZbZcnfFJLbVEh8Ts93a3ALykKyoSvSMYrN1q02vUtFttXSaCdVbnI7g1VbeG7SxSBliUC3QrH3Hqd+Tv3rP02586eeRYpYwrdOJU6SaHV74rCQOanfNIs6R2Eam+1OcxLmUJEJDyOjJ/zrm9/MtxezyxjCNISo+HpW1ap4mgTSmtLBnNw5KyOQQF747/D51p2McVd5Y2drP7Zy8gTQE0ZoKuUAFGONqECiXigMVjX5CGGTIyr/v8ACsgUs1wgJDuesE49v3iovUy6re/Dt8TEOg5PamFnrN0Lsj+GSON1IGCcH1yK5/4Z1ZIJxFO3T1cNXTdJ061uD5y3MkRbny2xmsuU1W7zzxs6aWOtzXEvlzWcsLdyNhWN4lv0tLCWUkdWMLvyx4q+8FrpVs88tyvloMl3beuX674jOsahFHHlbVJMj+o+hphjcqj0zknAYqDRUJrWwgNDmiNAeaAVNWCqxUtIkadUjBR3JoLBSzXQvRCc/SydvhUXOq8rbL/e36UrlZ5HLOxZjyTUAcU00/XNVsU6LW6dU9FIyB86WLmjUZP1R8zTW0y2fDC+1S+1Ej+IXkkoByFJwPlVMTKJEOPoqQcd6pUEcYHtRDY0nC3bYYpkmXKMD3HqKJqQKzLurFW7g1lRajIu0w6x/MNjUoMjQE70EVxFN9mwz24NFtQLptQJ2gGP6mFYTlpG6pGLHuagUVAIWvGPIoqmgpCEHajAb+UVYQDzXgo7UELn1wKnGKnAqfWgjeoxRVBoBxggjYjtVgup1GBJn3ANVmooP//Z",
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
                  <Card style={{ flex: 1, width: "18rem"}}>
                    <Card.Img variant="top" src={info.photourl}  style={{ height: '200px' }}/>
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
