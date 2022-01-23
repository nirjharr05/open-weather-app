import styled from "styled-components";

//Containers
export const Container = styled.div`
  background: linear-gradient(90deg, #754d8b 0%, #4e5992 100%);
  font-size: 18px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;
export const ContainerSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  width: 100%;
`;
export const ContainerDisplay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 500px;
  width: 100%;
  margin-top: 20px;
`;

//Headers
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  line-height: 0.2;
`;
export const H1 = styled.h1`
  font-size: 2rem;
  text-transform: uppercase;
  font-family: "Open sans";
  letter-spacing: 15px;
  color: white;
`;
export const H2 = styled.h2`
  font-size: 1rem;
  font-family: "Open sans";
  letter-spacing: 3px;
  color: white;
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
