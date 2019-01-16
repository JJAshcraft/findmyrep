import styled from "styled-components";

const SubmitButton = styled.button`
  color: #fff;
  cursor: pointer;
  border: none;
  background-color: #06a7ed;
  width: 100%;
  border-radius: 2px;
  height: 40px;
  &:disabled {
    background-color: grey;
    cursor: not-allowed;
  }
`;

export default SubmitButton;
