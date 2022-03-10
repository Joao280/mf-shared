import { Router, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import { GoBackBtnProps } from "@mf-shared-library/shared-props";
import styled from "styled-components";

const history = createBrowserHistory();

const GoBackBtn = ({ ...props }: GoBackBtnProps) => {
  return (
    <>
      <GoBackBtnWrapper>
        <Router history={history}>
          <GoBackBtnLink to={props.url}>{props.btnText}</GoBackBtnLink>
        </Router>
      </GoBackBtnWrapper>
    </>
  );
};

export default GoBackBtn;

const GoBackBtnWrapper = styled.div`
  border-radius: 5px;
  border: 2px solid orange;
  display: inline-block;
  padding: 5px;
  background-color: blueviolet;
`;

const GoBackBtnLink = styled(Link)`
  color: white;
  text-decoration: none;
`;
