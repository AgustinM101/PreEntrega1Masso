import styled, { keyframes } from "styled-components";

const borderAnimation = keyframes`
  0% {
    border-color:rgb(0, 0, 0); /* Color inicial del borde */
  }
  50% {
    border-color:rgb(29, 24, 21); /* Color intermedio del borde */
  }
  100% {
    border-color:rgb(0, 0, 0); /* Color final del borde */
  }
`;

const StyledImage = styled.img`
  width: 30%; /* Ajustar el ancho de la imagen */
  height: auto;
  border: 3px solid #d1d1d1;
  animation: ${borderAnimation} 5s infinite;
  border-radius: 10px;
  margin: 0 auto; /* Centrar la imagen horizontalmente */
  display: block; /* Asegurar que la imagen sea un bloque */
`;

export default StyledImage;
