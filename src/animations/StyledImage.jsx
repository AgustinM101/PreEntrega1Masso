import styled, { keyframes } from "styled-components";

const borderAnimation = keyframes`
  0% {
    border-color: #5d4037; /* Color inicial del borde */
  }
  50% {
    border-color:rgb(189, 133, 106); /* Color intermedio del borde */
  }
  100% {
    border-color: #d7a86e; /* Color final del borde */
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
