import React from "react";
import styled from "styled-components/macro";

import { MARKET_DATA, SPORTS_STORIES } from "../../data";

import MarketCard from "../MarketCard";
import SectionTitle from "../SectionTitle";
import MiniStory from "../MiniStory";
import { QUERIES } from "../../constants";

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: "/markets",
            content: "Visit Markets data »",
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: "/sports",
            content: "Visit Sports page »",
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <SportsStoryWrapper key={data.id}>
              <MiniStory {...data} />
            </SportsStoryWrapper>
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;
  /* max-width: 100%; */

  /* overflow: auto; */
  grid-template-columns: minmax(0, 1fr);
  grid-template-areas:
    "market"
    "sports";
  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    grid-template-areas: "market sports";
    gap: 0;
    /* overflow: scroll; */
  }
`;

const MarketsSection = styled.section`
  grid-area: market;
  /* max-width: 100%; */
  @media ${QUERIES.laptopAndUp} {
    border-right: 1px solid var(--color-gray-300);
    padding-right: 16px;
    /* margin-right: 16px; */
  }
`;

const MarketCards = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
`;

const SportsSection = styled.section`
  max-width: 100%;
  /* border: solid 2px; */
  grid-area: sports;
  @media ${QUERIES.laptopAndUp} {
    /* min-width: 0; */
    padding-left: 16px;
  }
`;

const SportsStories = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));

  @media ${QUERIES.tabletAndUp} {
    display: flex;
    overflow: auto;
  }

  @media ${QUERIES.laptopAndUp} {
    /* min-width: 0; */
    padding-left: 8px;
  }
`;

const SportsStoryWrapper = styled.div`
  @media ${QUERIES.tabletAndUp} {
    min-width: 220px;
  }
`;

export default SpecialtyStoryGrid;
