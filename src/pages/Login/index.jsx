import React, { useState } from "react";
import { Container, ContainerForm, Label, Form } from "./styled";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { AppAuth } from "../../context/AppAuth";

const Login = () => {
    const auth = AppAuth();
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({ 
            email, 
            password });
            try {
                await auth.authenticate(email, password);
            } catch (error) {
                console.error("Erro ao autenticar:", error);
            }
            
     auth.authenticate(email, password);
    };

    return (
        <Container>
            <ContainerForm>
                <Form onSubmit={handleSubmit}>
                    <h2>Acesse sua conta</h2>
                    <p>Entre com seu e-mail e senha!</p>
                    <Label>E-mail</Label>
                    <Input
                        type="email"
                        name="email"
                        placeholder="Informe seu E-mail"
                        value={email} // Controlled input
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Label>Senha</Label>
                    <Input
                        type="password"
                        name="password"
                        placeholder="Informe sua senha"
                        value={password} // Controlled input
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button type="submit">Fazer Login</Button>
                    <p></p>
                    <Button>Cadastrar-se</Button>
                    
                </Form>
            </ContainerForm>
        </Container>
    );
};

export default Login;
