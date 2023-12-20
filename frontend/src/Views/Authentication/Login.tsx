import React, { useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ContentContainer } from "../ContentContainer/ContentContainer"
import ShadowBox from "../../Components/Controls/ShadowBox"
import Auth from "../../Utilities/Auth";
import Alert from 'react-bootstrap/Alert';


export const LoginComponent: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [displayAlert, setDisplayAlert] = useState(false);

    const handleSubmit = async (event: any) => {
        console.log(username, password);
        event.preventDefault();
        Auth.login(username, password).then(result => {
            console.log("RESULT", result);
            if (result.token) {
                Auth.setAuthToken(result.token);
                window.location.href = "/admin";
            } else {
                setDisplayAlert(true);
            }
        });
    }

    return (
        <ContentContainer>
            {displayAlert &&
                <Alert variant="danger" dismissible onClose={() => setDisplayAlert(false)}>
                    <Alert.Heading>Invalid Credentials</Alert.Heading>
                    <p>
                        Please try again
                    </p>
                </Alert>
            }
            <ShadowBox mode="form">
                <Form className="input-form" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicUserName">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter user name" value={username} onChange={e => setUsername(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                    </Form.Group>
                    <br />
                    <Button variant="primary" type="submit" className="input-form-button">
                        Submit
                    </Button>
                </Form>
            </ShadowBox>
        </ContentContainer>
    )
}


const FrameStyle = {
    "maxWidth": "80vw",
    "textAlign": "center" as const,
    "margin": "auto",
}