import styled from "styled-components";

export const Main = styled.div`
  width: 43%;
  height: 400px;
  border-radius: 5px;
  border: 1px solid white;
  padding: 20px;
  margin: 10px;
  font-size: 18px;
  overflow: scroll;
`

export const MovieList = styled.ol`
  margin: 20px;
  & li{
    margin-top: 10px;
  }
`

export const NominateButton = styled.button`
  background-color: white;
  color: black;
  cursor: pointer;
`