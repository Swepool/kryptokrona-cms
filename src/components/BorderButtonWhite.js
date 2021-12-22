import * as React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const Button = styled.button`
  display: flex;
  align-items: center;
  border-radius: 50px;
  color: #fff;
  border: 2px solid #fff;
  background-color: transparent;
  font-weight: 600;
  padding-left: 20px;
  padding-right: 20px;
  height: 40px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    transition: 300ms;
    background-color: rgba(42, 42, 42, 0.29);
  }
`;

const BorderButton = ({ text, url }) => {
  return (
    <Link to={url}>
      <Button>{text}</Button>
    </Link>
  );
};

export default BorderButton;
