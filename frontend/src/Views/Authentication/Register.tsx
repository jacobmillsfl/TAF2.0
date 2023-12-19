import React from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ContentContainer } from "../ContentContainer/ContentContainer"
import ShadowBox from "../../Components/Controls/ShadowBox"

export const RegisterComponent: React.FC = () => {

    return (
        <ContentContainer>
            <ShadowBox mode="form">
                <Form className="input-form">
                    <Form.Group className="mb-3" controlId="formBasicUserName">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter user name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
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
