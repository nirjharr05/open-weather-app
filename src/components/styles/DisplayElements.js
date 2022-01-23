import styled, { css } from "styled-components";

//Containers
export const Container = styled.div`
  backdrop-filter: blur(5px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
//Top Banner
export const TopBanner = styled.div`
  transform: translateY(-50%);
  color: #595c5a;
  justify-content: center;
  flex-direction: column;
  line-height: 0.5;
  height: 10%;
  width: 100%;
`;
export const CityCom = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: 800;
`;
export const DateCom = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
`;
//Bottom Banner
export const BottomBanner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 70%;
  width: 100%;
  backdrop-filter: blur(5px);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
`;

//CARD
export const CardWrapper = styled.div`
  background-color: rgba(89, 92, 90, 0.6);
  border-radius: 15px;
  display: flex;
  width: 95%;
  height: 95%;
`;
export const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;
export const Image = styled.img`
  width: 300px;
  height: 300px;
`;
//CARD TEXT
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const TextHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  font-size: 100px;
`;
export const TextSubtitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 40px;
`;

//WIDGETS
export const Row = styled.div`
  display: flex;
  padding-bottom: 5px;
  height: 50%;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
export const Item = styled.div`
  background-color: rgba(89, 92, 90, 0.6);
  border-radius: 15px;
  font-size: 20px;
  word-wrap: break-word;
  color: white;
  margin: 10px;
  padding-top: 20px;
  height: 80%;
  width: 50%;
  align-items: center;
  text-align: center;
  justify-content: center;
`;
export const DataContainer = styled.h2`
  transform: translateY(-40%);
  font-size: 50px;
  font-weight: 600;
`;
