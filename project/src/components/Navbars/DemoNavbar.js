import { useState } from "react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
} from "reactstrap";
import routes from "routes.js";
import Button from 'react-bootstrap/Button';
import axios from "axios";

function Header(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [dropdownOpen2, setDropdownOpen2] = React.useState(false);

  const [color, setColor] = React.useState("transparent");

  const [isLogin, setIsLogin] = React.useState(false)
  const sidebarToggle = React.useRef();

  const location = useLocation();
  const toggle = () => {
    if (isOpen) {
      setColor("transparent");
    } else {
      setColor("dark");
    }
    setIsOpen(!isOpen);
  };

  const dropdownToggle = (e) => {
    setDropdownOpen(!dropdownOpen);
  };

  const dropdownToggle2 = (e) => {
    setDropdownOpen2(!dropdownOpen2);
  };


  const handleLogout = async (e) => {
    try {
      e.preventDefault();
        const response = await axios.post('http://127.0.0.1:3000/api/user/logout');
        console.log(response.data);
        sessionStorage.removeItem("authToken");
        sessionStorage.removeItem("nickname");
        console.log("삭제 완료");
    } catch (error) {
        console.error("Error during logout:", error);
        alert('실패');
    }
};



  


  const getBrand = () => {
  
    let brandName = "Default Brand";
    routes.map((prop, key) => {
      if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
        brandName = prop.name;
      }
      return null;
    });
    return brandName;
  };
  const openSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
    sidebarToggle.current.classList.toggle("toggled");
  };
  // function that adds color dark/transparent to the navbar on resize (this is for the collapse)
  const updateColor = () => {
    if (window.innerWidth < 993 && isOpen) {
      setColor("dark");
    } else {
      setColor("transparent");
    }
  };
  React.useEffect(() => {
    window.addEventListener("resize", updateColor.bind(this));
  });
  React.useEffect(() => {
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      sidebarToggle.current.classList.toggle("toggled");
    }
  }, [location]);
  return (
    // add or remove classes depending if we are on full-screen-maps page or not
    <Navbar
      color={
        location.pathname.indexOf("full-screen-maps") !== -1 ? "dark" : color
      }
      expand="lg"
      className={
        location.pathname.indexOf("full-screen-maps") !== -1
          ? "navbar-absolute fixed-top"
          : "navbar-absolute fixed-top " +
            (color === "transparent" ? "navbar-transparent " : "")
      }
    >
      <Container fluid>
        <div className="navbar-wrapper">
          <div className="navbar-toggle">
            <button
              type="button"
              ref={sidebarToggle}
              className="navbar-toggler"
              onClick={() => openSidebar()}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <NavbarBrand href="/">{getBrand()}</NavbarBrand>
        </div>
        <NavbarToggler onClick={toggle}>
          <span className="navbar-toggler-bar navbar-kebab" />
          <span className="navbar-toggler-bar navbar-kebab" />
          <span className="navbar-toggler-bar navbar-kebab" />
        </NavbarToggler>
        
        <Collapse isOpen={isOpen} navbar className="justify-content-end">
        
          {/* 찾기메뉴 */}
          <form>
            <InputGroup className="no-border">
              <Input placeholder="Search..." />
              <InputGroupAddon addonType="append">
                <InputGroupText>
                  <i className="nc-icon nc-zoom-split" />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </form>
          <Nav navbar style={{ display: 'flex', alignItems: 'center' }}>
    
            {/* 알람 */}
            <NavItem>
              <Link to="#pablo" className="nav-link btn-rotate">
              <i className="nc-icon nc-bell-55" />
                <p>
                  <span className="d-lg-none d-md-block">Some Actions</span>
                </p>
              </Link>
            </NavItem>

            {/* 유저메뉴 */}
            {sessionStorage.getItem("authToken") !== null ?
            <Dropdown nav isOpen={dropdownOpen}toggle={(e) => dropdownToggle(e)}>
              <DropdownToggle caret nav>

                <i className="nc-icon nc-single-02" />
                <p>
                  <span className="d-lg-none d-md-block">Account</span>
                </p>
              </DropdownToggle>
              <DropdownMenu right>
                <Link to={"/admin/profile"}>
                    <DropdownItem tag="a">Profile</DropdownItem>
                </Link>
                <DropdownItem tag="a" href="/admin/profile">Another Action</DropdownItem>
                <DropdownItem tag="a">Setting</DropdownItem>
                <Link to={"/admin/dashboard"}>
                    <DropdownItem tag="a"onClick={() => handleLogout}
                    >Logout</DropdownItem>
                </Link>
              </DropdownMenu>
            </Dropdown>
            : <Link to={"/admin/login"}><Button style={{borderRadius:"100px"}}variant="outline-primary">Login</Button></Link>}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
