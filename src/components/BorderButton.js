import * as React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const Button = styled.button`
  display: flex;
  align-items: center;
  border-radius: 50px;
  color: #2a2a2a;
  border: 2px solid #2a2a2a;
  background-color: transparent;
  font-weight: 600;
  padding: 10px 30px;
  height: 40px;
  text-decoration: none;
  cursor: pointer;
  user-select: none;

  &:hover {
    transition: all 300ms ease-in-out;
    background-color: rgba(42, 42, 42, 0.29);
  }
`;

const BorderButton = ({ label, url }) => {
  return (
    <a href={url}>
      <Button>{label}</Button>
    </a>
  );
};

export default BorderButton;
