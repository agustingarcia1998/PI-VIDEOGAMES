import styled from "styled-components";

export const Div = styled.div`
background-image: url('https://i0.wp.com/www.marcelopedra.com.ar/blog/wp-content/uploads/2013/10/animated-gifs-of-fighting-game-backgrounds-27.gif?resize=800%2C336&ssl=1');
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;

.loadpage{
    background-color: black;
    padding-bottom: 125px;
}

h1{
    color:rgba(141, 141, 145, 0.5);
    text-shadow: 5px 0 5px black, 5px 0 10px grey, 5px 0 15px grey, 0 0 20px rgb(38, 0, 255), 0 0 30px rgb(38, 0, 255), 0 0 40px rgb(38, 0, 255), 0 0 55px rgb(38, 0, 255), 0 0 75px rgb(38, 0, 255);
    font-size: 40px;
    margin: 0px;
    padding-top: 20px;
    font-family: 'Secular One', sans-serif;
}

.allcards{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
    padding: 2rem;
    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        padding: 4rem;
    }
    
}

.link{
    text-decoration: none;
    
}

.contbuttons{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.buttoncreate{
    border-radius: 30px;
    height: 30px;
    margin-bottom: 10px;
    font-size: 15px;
    color: #FFF;
    background-color: #232323;
    text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px rgb(38, 0, 255), 0 0 30px rgb(38, 0, 255), 0 0 40px rgb(38, 0, 255), 0 0 55px rgb(38, 0, 255), 0 0 75px rgb(38, 0, 255);
    cursor: pointer;
    
}

.buttonallg{
    border-radius: 30px;
    height: 30px;
    margin-bottom: 10px;
    font-size: 15px;
    color: #FFF;
    background-color: #232323;
    text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px rgb(38, 0, 255), 0 0 30px rgb(38, 0, 255), 0 0 40px rgb(38, 0, 255), 0 0 55px rgb(38, 0, 255), 0 0 75px rgb(38, 0, 255);
    cursor: pointer;
}

.contfilters{
    background-color: rgb(11, 0, 27);
    padding: 10px;
    display: flex;
    justify-content: center;
    
    
}

.selectfilter{
    height: 25px;
    border-radius: 10px;
    margin-right: 20px;
    cursor: pointer;
    
}

.notfound{
    color: white;
}







`