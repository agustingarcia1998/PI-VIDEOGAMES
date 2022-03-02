import styled from "styled-components";

export const Div = styled.div`
background-image: url('https://i0.wp.com/www.marcelopedra.com.ar/blog/wp-content/uploads/2013/10/animated-gifs-of-fighting-game-backgrounds-27.gif?resize=800%2C336&ssl=1');
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
color: white;
font-family: 'PT Sans Narrow', sans-serif;
font-size: 20px;
text-shadow: 6px 3px 6px black;

.detailback{
    display: flex;
    justify-content: center;
    margin: 0px;

}

.title{
    padding-top: 5px;
    margin-top: 0px;
    font-family: 'Bebas Neue', cursive;
    text-shadow: 6px 3px 6px purple;
}

.contdetail{
    width: 500px;
    background-color: rgba(99, 97, 97, 0.692);
    margin-bottom: 10px;
}

.buttonback{
    margin-top: 15px;
    margin-bottom: 15px;
    border-radius: 10px;
    box-shadow: 2px 2px 10px white;
    height: 40px;
    width: 100px;
    font-size: 20px;
    color: rgba(255, 255, 255, 0.644);
    background-color: #232323;
    text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px rgba(36, 0, 199, 0.644), 0 0 30px rgb(38, 0, 200), 0 0 40px rgb(38, 0, 200), 0 0 55px rgb(38, 0, 200), 0 0 75px rgb(38, 0, 200);
    cursor: pointer;
}

`