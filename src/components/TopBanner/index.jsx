import React from "react";
import { Container, Text } from "./styles";

const TopBanner = ({tipo, descricao, thumb} ) => {
    const imgUrl = `%{urlApi}/uploads/${thumb}`;
    return (
        <Container style={{ backgroundImage: `url(${imgUrl})`}}>
            <Text>
                <h2>{tipo}</h2>
                <p>{descricao}</p>
            </Text>
        </Container>
    )
}

export default TopBanner