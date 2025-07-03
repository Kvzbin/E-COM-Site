import React from "react";
import Container from "../components/Container";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";

function Home() {
  return (
    <>
      <Container />
      <LatestCollection />
      <BestSeller />
    </>
  );
}

export default Home;
