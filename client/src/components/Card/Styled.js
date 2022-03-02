import styled from "styled-components";

export const Div = styled.div`
// border: 1px solid black;
border-radius: 20px;
background-color: rgba(109, 109, 109, 0.507);
color: rgb(238, 228, 228);
height: 450px;


.namecard{
    color: rgba(230, 221, 221, 0.795);
    font-family: 'Bebas Neue', cursive;
    font-size: 30px;
    text-shadow: 6px 3px 6px rgba(23, 2, 58, 0.829);
}

.genrecards{
    color: rgba(230, 221, 221, 0.795);
    font-family: 'PT Sans Narrow', sans-serif;
    font-size: 20px;
    text-shadow: 6px 3px 6px rgba(23, 2, 58, 0.829);
}

.image{
    box-shadow: 5px 5px 5px rgba(23, 2, 58, 0.829);
    transition: 1s;

}

.image:hover{
    box-shadow: 5px 5px 5px rgba(84, 5, 212, 0.829);
}


`