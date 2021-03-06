import styled from "styled-components";

export const Main = styled.div`
  height: 400px;
  width: 40%;
  border-radius: 5px;
  border: 1px solid white;
  padding: 20px;
  margin: 10px;
  font-size: 18px;
  overflow: scroll;
`

export const NominationList = styled.ol`
  margin: 20px;
  & li{
    margin-top: 10px;
  }
`
export const RemoveButton = styled.button`
  font-weight: bold;
  background-color: white;
  color: black;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid black;
`
export const Banner = styled.div`
    height: 30px;
    width: 60px;
    background: green;
    color: white;
    font-size: 20px;
    text-align: center;
    z-index: 10;
`
