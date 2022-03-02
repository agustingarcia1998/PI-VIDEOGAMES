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
padding-bottom: 26px;
display:flex;
justify-content:center;
padding-top:10px;

.titlecreate{
    font-family: 'Bebas Neue', cursive;
    text-shadow: 5px 5px 5px 5px black;
    
}

.cont-form{
    background-color: rgba(109, 109, 109, 0.507);
    width: 700px;
}

.buttonreturn{
    margin-top: 15px;
    border-radius: 15px;
    height: 35px;
    font-size: 18px;
    width: 85px;
    color: #FFF;
    background-color: #232323;
    text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px rgb(38, 0, 255), 0 0 30px rgb(38, 0, 255), 0 0 40px rgb(38, 0, 255), 0 0 55px rgb(38, 0, 255), 0 0 75px rgb(38, 0, 255);
    cursor: pointer;
}

.dates-col{
        
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 2rem;
        margin: 2rem;
        @media (min-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
            margin: 2rem;
            
            
    }
    
}

.checkbox-col{
    display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        margin: 1rem;
        @media (min-width: 768px) {
            grid-template-columns: repeat(4, 1fr);
            margin: 2rem;
    }
}


.buttonconfirm{
    margin-top: 15px;
    border-radius: 15px;
    height: 35px;
    font-size: 18px;
    width: 85px;
    color: #FFF;
    background-color: #232323;
    text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px rgb(38, 0, 255), 0 0 30px rgb(38, 0, 255), 0 0 40px rgb(38, 0, 255), 0 0 55px rgb(38, 0, 255), 0 0 75px rgb(38, 0, 255);
    cursor: pointer;
}

.error{
    color: red;
    font-size: 18px;
}

.divgen{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    @media (min-width: 768px) {
            grid-template-columns: repeat(4, 1fr);
            margin: 2rem;
    }
}

.buttonx{
    width: 25px;
    height: 20px;
    margin-top: 15px;
    margin-left: 10px;
    color: #FFF;
    background-color: #232323;
    text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px rgb(38, 0, 255), 0 0 30px rgb(38, 0, 255), 0 0 40px rgb(38, 0, 255), 0 0 55px rgb(38, 0, 255), 0 0 75px rgb(38, 0, 255);
    cursor: pointer;
}
`