import styled, { css } from "styled-components";

//Containers
export const Container = styled.div`
  background: url("https://images.unsplash.com/photo-1500491460312-c32fc2dbc751?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80");
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
export const ContainerSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20vh;
`;
export const ContainerDisplay = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 80vh;
`;

//Headers
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  line-height: 0.2;
`;
export const H1 = styled.h1`
  font-size: 30px;
`;
export const H2 = styled.h2`
  font-size: 20px;
`;

//Search
export const Search = styled.div`
  display: flex;
  width: 50%;
  position: relative;
  height: 50px;
  border-radius: 50px;
  border: 4px solid #393e46;
  padding: 5px;
  background: #222831;
  transition: all 0.5s;

  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.74);
  border: 4px solid #00adb5;
`;

export const Input = styled.input`
  position: relative;
  border-radius: 50px;
  border: 4px solid #393e46;
  width: 100%;

  text-align: center;
  line-height: 30px;
  font-size: 30px;
  display: block;
`;

export const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
