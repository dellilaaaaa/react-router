import { useState } from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Col, Button, Row, Container } from "react-bootstrap";

function Register() {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    birthdate: "",
    gender: "",
    skills: [],
  });

  const handleChangeUser = (event) => {
    const { name, value } = event.target;
    setUser((preUser) => ({
      ...preUser,
      [name]: value,
    }));
  };
  console.log(user);

  const handleChangeData = (e) => {
    e.preventDefault();
    alert(
      `Name: ${user.name} \nEmail: ${user.email} \nPassword: ${user.password} \nAddress: ${user.address} \nBirthdate: ${user.birthdate} \nGender: ${user.gender} \nSkills: ${user.skills}`
    );
    const userJSON = JSON.stringify(user);
    console.log(userJSON);

    localStorage.setItem("user", userJSON);
    history.push("/Login")
  };
  // const submitData = (item) => {
  //   const inputAlert = alert(({setUser}) => {
  //     if (user == item) {
  //       return setUser;
  //     } else {
  //       return user;
  //     }
  //   });
  //   setUser(inputAlert);
  // };
  // console.log(submitData);

  return (
    <div className="Register">
      <Container>
        <Form>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Nama
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Masukan Nama Anda"
                value={user.name}
                name="name"
                onChange={handleChangeUser}
              />
            </Col>
          </Form.Group>

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
                value={user.password}
                name="password"
                onChange={handleChangeUser}
                placeholder="Tambahkan Password"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Address
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="textarea"
                value={user.address}
                name="address"
                onChange={handleChangeUser}
                placeholder="Tambahkan Address"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Birthdate
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="date"
                value={user.birthdate}
                name="birthdate"
                onChange={handleChangeUser}
                placeholder="Tambahkan Birthdate"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Gender
            </Form.Label>
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="Laki-laki"
                value="Laki-laki"
                name="gender"
                placeholder="gender"
                onChange={handleChangeUser}
              />

              <Form.Check
                type="radio"
                label="Perempuan"
                value="Perempuan"
                name="gender"
                placeholder="gender"
                onChange={handleChangeUser}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label as="legend" column sm={2}>
              Skills
            </Form.Label>
            <Col sm={10}>
              <Form.Check
                type="Checkbox"
                label="Coding"
                name="skills"
                value="Coding"
                placeholder="Skills"
                onChange={handleChangeUser}
              />
              <Form.Check
                type="Checkbox"
                label=" Design"
                name="skills"
                value="Design"
                placeholder="Skills"
                onChange={handleChangeUser}
              />
              <Form.Check
                type="Checkbox"
                label="Gaming"
                name="skills"
                value="Gaming"
                placeholder="Skills"
                onChange={handleChangeUser}
              />
            </Col>
          </Form.Group>
          <Button onClick={handleChangeData}>Submit</Button>
        </Form>
      </Container>
    </div>
  );
}
export default Register;
