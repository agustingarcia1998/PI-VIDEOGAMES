import styled from "styled-components";

export const Div = styled.div`
background-image: url('https://www.solofondos.com/wp-content/uploads/2016/01/imagenes-de-videojuegos-para-fondo-de-pantalla-hd.jpg');
background-size: cover;
height: 100vh;
h1{
    margin: 0;
    padding-top: 50px;
    font-family: 'Press Start 2P', cursive;
    
}
.divButton{
    display: flex;
    justify-content: center;
    margin-top: 200px;

}
.buttonLanding{
   
   width: 200px;
   height: 60px;
   font-size: 170%;
   border-radius: 20px;
   color: #FFF;
   background: linear-gradient(green, white);
   text-shadow: 0 0 5px black, 0 0 10px black, 0 0 15px #FFF, 0 0 20px rgb(38, 0, 255), 0 0 30px rgb(38, 0, 255), 0 0 40px rgb(38, 0, 255), 0 0 55px rgb(38, 0, 255), 0 0 75px rgb(38, 0, 255);
   box-shadow: 2px 2px 15px 3px white;
}

.buttonLanding:hover{
    transition: 5s;
    background: linear-gradient(black, green);
}

`