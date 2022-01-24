import styled, { css } from "styled-components";

//Containers
export const Container = styled.div`
  backdrop-filter: blur(5px);
  font-family: "Open Sans", sans-serif;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

//Top Banner City Container
export const CityCom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  color: #c5cdcf;
  font-size: 40px;
  font-weight: 800;
  margin-top: -50px;
  margin-bottom: 20px;
`;

//Data card
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f8fa;
  height: 450px;
  width: 40%;
  border-radius: 10px;
`;

export const Image = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  width: 70%;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
export const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #2e3336;
  height: 30%;
  width: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
export const TextHeader = styled.h2`
  display: flex;
  flex-direction: column;
  color: #c5cdcf;
  font-family: "Open Sans";
  font-weight: 200;
  font-size: 2.5em;
`;
export const TextSubtitle = styled.h3`
  display: flex;
  color: #8f9b9d;
  font-family: "Open Sans";
  text-transform: uppercase;
  font-weight: 200;
  font-size: 2.5rem;
`;
export const DateCom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  background-color: #4dbde2;
  text-transform: uppercase;
  font-size: 1rem;
  color: white;
  height: 100%;
  width: 22%;
  border-bottom-right-radius: 10px;
`;

//Widgets

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 30px;
`;
export const Row = styled.div`
  display: flex;
  margin: 10px auto;
  max-height: 400px;
  width: 80%;
  align-items: center;
  justify-content: space-around;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 30%;
`;
export const DataHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2e3336;
  font-family: "Open Sans";
  font-weight: 200;
  font-size: 1.75em;
  line-height: 1;
  color: #f0f8fa;
  text-align: center;
  overflow-wrap: break-word;
  height: 30%;
  width: 100%;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
export const DataContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f8fa;
  height: 70%;
  width: 100%;
  font-size: 70px;
  font-weight: 400;

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

//FORECAST STUFF
export const ForecastContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 50px;
`;
export const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 250px;
  margin-left: 1%;
  margin-right: 1%;
  padding-bottom: 1%;
  width: 90%;
  height: 90%;

  background-color: #2e3336;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const Day = styled.div`
  display: flex;
  width: 100%;
  flex: 1;

  font-family: "Open Sans", sans-serif;
  background-color: #4dbde2;
  color: white;
  font-size: 1.5rem;
  font-style: bold;
  text-transform: uppercase;
  font-weight: 600;

  justify-content: center;
  align-items: center;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
export const TempHolder = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1.5;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 1%;
  line-height: 0.05;
`;
export const TempHeader = styled.h2`
  font-family: "Open Sans", sans-serif;

  display: flex;
  width: 100%;
  font-size: 1.1rem;
  font-style: bold;
  text-transform: uppercase;
  font-weight: 400;
  margin-bottom: 0;
  color: #8f9b9d;

  text-align: center;
  justify-content: center;
  align-items: center;
`;
export const TempText = styled.h3`
  font-family: "Open Sans", sans-serif;

  display: flex;
  width: 100%;
  font-size: 1.7rem;
  text-transform: uppercase;
  font-weight: 600;
  color: #c5cdcf;

  text-align: center;
  justify-content: center;
  align-items: center;
`;
