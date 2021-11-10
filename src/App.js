import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Navbar,
  Nav,
  Form,
  Offcanvas,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Alihan from "./Components/Alihan";
import Product from "./Components/Product";
import Profile from "./Components/Profile";

function App() {
  let ambilIsLogin = localStorage.getItem("isLogin");
  let dataIsLogin = JSON.parse(ambilIsLogin);
  console.log(dataIsLogin);

  return (
    <Router>
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Brand>
            <h3>Website</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link>
                  <Link to="/" className="me-5">
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  {dataIsLogin ? <></> :  <Link to="/Login" className="me-5">
                    Login
                  </Link>}
                  {/* <Link to="/Login" className="me-5">
                    Login
                  </Link> */}
                </Nav.Link>
                <Nav.Link>
                  {" "}
                  <Link to="/Register" className="me-5">
                    Register
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  {" "}
                  <Link to="/Profile" className="me-5">
                    Profile
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  {" "}
                  <Link to="/Product" className="me-5">
                    Product
                  </Link>
                </Nav.Link>
                <NavDropdown title="Contact" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#email">Email</NavDropdown.Item>
                  <NavDropdown.Item href="#instagram">Instagram</NavDropdown.Item>
                  <NavDropdown.Item href="#favebook">Facebook</NavDropdown.Item>
                  <NavDropdown.Item href="#whatsApp">whatsApp</NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path="/">
          <div className="text-center">
            <h1>Selamat Datang</h1>
            <h3>Ini website Dellila</h3>
          </div>
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
        <Route path="/Profile">
          {(dataIsLogin = true ? <Profile /> : <Redirect to="/Login" />)}
          {/* {(dataIsLogin = false ? <Login /> : <Redirect to="/Profile" />)} */}
        </Route>
        <Route path="/Product">
          <Product />
        </Route>
        <Route path="/:Alihan">
          <Alihan />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
