import { VFC } from 'react';
import { css } from '@emotion/react';
import Tab from '@/components/Header/Tab';

const Header: VFC = () => {
  return (
    <header>
      <h1 css={title}>#todo</h1>
      <Tab />
    </header>
  );
};

const title = css`
  margin: 32px 0 40px;
  font-family: Raleway, sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: bold;
  line-height: 42px;
  text-align: center;
  letter-spacing: -0.045em;
`;

export default Header;
