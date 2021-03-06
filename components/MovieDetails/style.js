import styled from "styled-components";

export const Drawer = styled.div`
  background: black;
  width: 100%;
  max-width: 768px;
  height: 100%;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999999;
  transform: ${(props) =>
    props.drawer ? "translateX(0px)" : "translateX(768px)"};
  transition: all 0.3s ease-in-out;
  color: white;
  -ms-overflow-style: none;
  scrollbar-width: none;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Icon = styled.div`
  width: 45px;
  height: 45px;
  margin: 15px;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const Poster = styled.img`
height:360px;
width:100%;
position: absolute;
top: 0; z-index: 9999;

@media screen and (max-width: 768px){
  display: none
}

`