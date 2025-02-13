import React from "react";
import { Container, ContainerForm, Label, Form } from "./styled";
import Input from "../../components/Input"
import Button from "../../components/Button"

const Login = () => {
    return (
        <Container>
            <ContainerForm>
                <Form>
                <h2>Acesse sua conta</h2>
                <p>Entre com seu e-mail e senha!</p>
                    <Label>E-mail</Label>
                    <Input type="text" placeholder="Informe seu E-mail" />
                    <Label>Senha</Label>
                    <Input type="text" placeholder="Informe sua senha" />
                    <Button>Fazer Login</Button>
                </Form>
            </ContainerForm>
        </Container>
    );
};

export default Login;
