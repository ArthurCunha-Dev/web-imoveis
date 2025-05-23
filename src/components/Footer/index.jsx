import React, { Fragment } from "react";
import { Container, Copy, Item } from "./styles";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import LogoImg from"../../assets/07349f40-1d1f-4e38-9c58-46c355e60fdd-removebg-preview (1).png";

const Footer = ( ) => {
    return (
        <Fragment>
            <Container>
            <Item>
                <img src={LogoImg} alt="ImobExpress Logo" />
                <p>Usando a ImobExpress você pode mostrar seus imóveis para mais pessoas, ou encontrar o seu imóvel dos sonhos, a ImobExpress é líder da indústria da região </p>
                <ul>
                    <li >
                        <span>
                        <FaFacebook size={32} />
                        </span>
                    </li>
                    <li>
                        <span>
                        <FaInstagram size={32} />
                        </span>
                    </li>
                    <li>
                        <span>
                        <FaWhatsapp size={32} />
                        </span>
                    </li>
                </ul>
            </Item>
            <Item>
                <h3>Our Services</h3>
                <ul>
                    <p><span>Comprar</span></p>
                    <p><span>Alugar</span></p>
                    <p><span>Vender</span></p>
                </ul>                
            </Item>
            <Item>
                <h3>Our Services</h3>
                <ul>
                    <p><span>Comprar</span></p>
                    <p><span>Alugar</span></p>
                    <p><span>Vender</span></p>
                </ul>                
            </Item>
            <Item>
                <h3>Our Services</h3>
                <ul>
                    <p><span>Comprar</span></p>
                    <p><span>Alugar</span></p>
                    <p><span>Vender</span></p>
                </ul>                
            </Item>
            
        </Container>
        <Copy>
            <p>© Copyright 2025</p>
            <ul>
                <p><span>Termos de uso</span></p>
                <p><span>Política de Privacidade</span></p>
                <p><span>Política de Cookies</span></p>
            </ul>
        </Copy>
        </Fragment>
        
    )
}

export default Footer;