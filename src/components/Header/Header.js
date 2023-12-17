import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <Actions />
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <ActionWrapper>
          <Actions />
        </ActionWrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <SubscribeBlock>
          <Button>Subscribe</Button>
          <a href="asd">Already a Subscriber?</a>
        </SubscribeBlock>
      </MainHeader>
    </header>
  );
};

const Actions = () => {
  return (
    <ActionGroup>
      <button>
        <Search size={24} />
      </button>
      <button>
        <Menu size={24} />
      </button>
    </ActionGroup>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

const LogoWrapper = styled.div`
  grid-area: logo;
`;
const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: grid;
  grid-template-columns: 0 auto 0;
  grid-template-areas: "buttons logo subscribe";
  align-items: center;
  /* justify-content: center; */
  margin-top: 32px;
  margin-bottom: 48px;
  @media ${QUERIES.laptopAndUp} {
    margin-top: 16px;
    margin-bottom: 72px;
    /* display: none; */
    /* grid-template-columns: repeat(3, 1fr); */
  }
`;

// const DesktopHeader = styled(MobileHeader)`
// margin-top: 32px;
//   margin-bottom: 48px;
//   display: none;
//   @media ${QUERIES.laptopAndUp} {
//     display: block;
//     height: 98px;
//     margin-top: 16px;
//     margin-bottom: 72px;
//   }
// `;

const SubscribeBlock = styled.div`
  grid-area: subscribe;
  display: none;
  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
  justify-self: end;
  width: max-content;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  height: 100%;
  /* position: relative; */
  & > a {
    font-size: calc(14rem / 16);
    font-style: italic;
    text-decoration: underline;
    color: var(--color-gray-900);
    /* position: absolute; */
    /* bottom: -8px; */
  }
`;

const ActionWrapper = styled.div`
  grid-area: buttons;
  display: none;
  @media ${QUERIES.laptopAndUp} {
    display: block;
  }
`;
export default Header;
