import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logginWithEmailAndPassword } from "../auth/firebase";
import FormCard from "./FormCard";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleLogin = () => {
    logginWithEmailAndPassword(email, password);
  };

  const formFields = [
    {
      label: "Email address",
      type: "email",
      value: email,
      onChange: (e) => setEmail(e.target.value),
      placeholder: "Enter your email address",
      required: true,
      controlId: "formBasicEmail",
    },
    {
      label: "Password",
      type: "password",
      value: password,
      onChange: (e) => setPassword(e.target.value),
      placeholder: "Enter your password",
      required: true,
      controlId: "formBasicPassword",
    },
  ];
  return (
    // <Container className="mt-5">
    //   <Row className="justify-content-center">
    //     <Card style={{ width: "30rem" }}>
    //       <Card.Img
    //         variant="top"
    //         src={logo}
    //         style={{ width: "150px", alignSelf: "center", marginTop: "20px" }}
    //       />
    //       <Card.Body className="text-center">
    //         <Card.Title>Welcome Back! </Card.Title>
    //         <Card.Text>
    //           Plase enter your details to login to your account
    //         </Card.Text>
    //       </Card.Body>
    //       <Row className="d-flex justify-content-center text-center">
    //         <Col>
    //           <Button
    //             variant="outline-info"
    //             style={{ padding: "10px 24px " }}
    //             onClick={handleOpenText}
    //             aria-expanded={open}
    //             aria-controls="fade-text"
    //           >
    //             <FaApple />
    //           </Button>
    //         </Col>
    //         <Col>
    //           <Button
    //             variant="outline-info"
    //             style={{ padding: "10px 24px " }}
    //             onClick={handleOpenText}
    //             aria-controls="fade-text"
    //             aria-expanded={open}
    //           >
    //             <FaGoogle />
    //           </Button>
    //         </Col>
    //         <Col>
    //           <Button
    //             variant="outline-primary"
    //             style={{ padding: "10px 24px " }}
    //             onClick={handleOpenText}
    //             aria-controls="fade-text"
    //             aria-expanded={open}
    //           >
    //             <FaFacebook />
    //           </Button>
    //         </Col>
    //         <Fade in={openTex}>
    //           <div className="fade-text text-muted" size="sm">
    //             This feature is not available right now. Please login with your
    //             eamil address and password. Thank you.
    //           </div>
    //         </Fade>
    //         <p className="text-center">____________ OR _____________</p>
    //       </Row>
    //       <Card.Body>
    //         <Form>
    //           <Form.Group className="mb-3" controlId="formBasicEmail">
    //             <Form.Label>Email address</Form.Label>
    //             <Form.Control
    //               type="email"
    //               value={email}
    //               onChange={(e) => setEmail(e.target.value)}
    //               placeholder="Enter email"
    //               required
    //             />
    //           </Form.Group>
    //           <Form.Group className="mb-3" controlId="formBasicPassword">
    //             <Form.Label>Password</Form.Label>
    //             <Form.Control
    //               type="password"
    //               value={password}
    //               onChange={(e) => setPassword(e.target.value)}
    //               placeholder="Password"
    //               required
    //             />
    //           </Form.Group>
    //         </Form>
    //       </Card.Body>

    //       <Card.Body className="text-center">
    //         <Button
    //           style={{
    //             padding: "10px 14px",
    //             width: "100%",
    //             fontSize: "1.5rem",
    //           }}
    //           variant="primary"
    //           type="submit"
    //           onClick={handleLogin}
    //         >
    //           Login
    //         </Button>
    //         <p className="text-center mt-3">
    //           Don&apos;t have an account?{" "}
    //           <Link to="/register">Register here.</Link>
    //         </p>
    //       </Card.Body>
    //     </Card>
    //   </Row>
    // </Container>
    <FormCard
      title="Login"
      subTitle="Please enter your details to login"
      handleSubmit={handleLogin}
      formFields={formFields}
      buttonText="Login"
      linkText="Register here"
      linkTo="/register"
      linkDescription="Don't have an account?"
    />
  );
};

export default Login;
