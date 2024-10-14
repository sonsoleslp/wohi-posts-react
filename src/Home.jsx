import { useState } from "react";
import { CardBody, Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import { Navigate } from "react-router-dom";
// https://react-bootstrap.netlify.app/docs/forms/overview/
export default function Home(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = () => {
        // Here we would check the credentials in the server
        if ((email == "example@example.org") && (password == "1234")){
            props.setAuthenticated(true);
        }
    }
    return (<Container>
        <Row>
            <Col>
                <Card>
                    <CardBody>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" value={email} placeholder="Enter email" onChange={e=>setEmail(e.target.value)} />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" value={password}  placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Container>);
}