import styled from "styled-components";

export const Container = styled.div`
padding: 50px 150px;
position: relative;
background-size: cover;
background-position: center;
background-image: url(https://www.toziimoveis.com.br/assets/blog/9-1e397c7a9726cbf88244bccb62cc5247.jpg);

:before{
    background-color: rgba(0,0,0,.6);
    contemt: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}
    

`
export const Text = styled.div`
    width: 55%;
    position: relative;
    z-index: 1;
    h2 {
        color: var(--white);
        font-size: 3.875rem;
        margin-bottom: 25px;
    }
    p {
        color: var(--white);
        margin-bottom: 25px;
    }
`;
