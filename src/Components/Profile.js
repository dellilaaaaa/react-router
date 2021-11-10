import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Col,
  Container,
  Card,
} from "react-bootstrap";

function Profile() {
  
  // let [dataProfile, setDataProfile] = useState({
  // name :  "",
  // email: "",
  // password: "",
  // address: "",
  // birthdate: "",
  // gender: "",
  // skills: ""
  // })
  const ambilLogin = localStorage.getItem("user");
  const dataLogin = JSON.parse(ambilLogin);
  console.log(dataLogin);

  return (
    <div>
      <Container>
        <Card>
          <Card.Header className="text-center">
            <h3>Data Profile</h3>
          </Card.Header>
          <Card.Body>
            <Col>
              <Card.Title>Nama: {dataLogin.name}</Card.Title>
              <Card.Title>Email: {dataLogin.email}</Card.Title>
              <Card.Title>Password: {dataLogin.password}</Card.Title>
              <Card.Title>Addres: {dataLogin.address}</Card.Title>
              <Card.Title>Birthdate: {dataLogin.birthdate}</Card.Title>
              <Card.Title>Gender: {dataLogin.gender}</Card.Title>
              <Card.Title>Skills: {dataLogin.skills}</Card.Title>
            </Col>
          </Card.Body>
        </Card>
      </Container>
      {/* <h2>Ini Profile Anda</h2>
      <h4>Nama: {dataLogin.name}</h4>
      <h4>Email: {dataLogin.email}</h4>
      <h4>Password: {dataLogin.password}</h4>
      <h4>Address: {dataLogin.address}</h4>
      <h4>Birthdate: {dataLogin.birthdate}</h4>
      <h4>Gender: {dataLogin.gender}</h4>
      <h4>Skills: {dataLogin.skills}</h4> */}
    </div>
  );
}
export default Profile;
