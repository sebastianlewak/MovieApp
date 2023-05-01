import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  top: 0;
  bottom: 0;
  left: ${(props) => (props.isOpen ? "250px" : "78px")};
  width: ${(props) =>
    props.isOpen ? "calc(100% - 250px)" : "calc(100% - 78px)"};
  height: 100%;
`;
