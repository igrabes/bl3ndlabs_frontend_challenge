import type { NextPage } from "next";

import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home: NextPage = () => {
  return (
    <Layout>
      <h3>Welcome to the Code Challenge</h3>
    </Layout>
  );
};

export default Home;
