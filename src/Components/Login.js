import { useState } from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

function Login2() {
  let history = useHistory();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChangeUser = (event) => {
    const { name, value } = event.target;
    setUser((preUser) => ({
      ...preUser,
      [name]: value,
    }));
  };
  // console.log(user);

  const handleLogin = (e) => {
    e.preventDefault();
    const ambilUser = localStorage.getItem("user");
    const userLokal = JSON.parse(ambilUser);
    console.log(user);
    console.log(userLokal);

    if (
      user.email === userLokal.email &&
      user.password === userLokal.password
    ) {
      localStorage.setItem("isLogin", "true");
      // IsLogin(true)
      history.push("/profile")
      // const isLogin = JSON.stringify(userLokal)
      // localStorage.setItem("userLocal", isLogin);
      // console.log(true)
    } else {
      alert("email dan password salah");
    }
  };

  return (
    <div className="Login2">
      <Container>
        <Form>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="email"
                placeholder="Masukan Email Anda"
                value={user.email}
                name="email"
                onChange={handleChangeUser}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="password"
                placeholder="Masukan Password Anda"
                value={user.password}
                name="password"
                onChange={handleChangeUser}
              />
            </Col>
          </Form.Group>
          {/* <Form.Group as={Row} className="mb-3">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
          <Button variant="primary" type="submit" onClick={handleLogin}>
            Login
          </Button>
        </Form>
      </Container>
    </div>
  );
}
export default Login2;
