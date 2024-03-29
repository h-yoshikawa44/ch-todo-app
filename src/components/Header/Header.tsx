import { FC } from 'react';
import { css } from '@emotion/react';
import Tab from '@/components/model/Todo/TodoTab';
import { raleway } from '@/styles/fonts';

const Header: FC = () => {
  return (
    <header>
      <h1 css={title}>#todo</h1>
      <Tab />
    </header>
  );
};

const title = css`
  margin: 32px 0 40px;
  font-family: ${raleway.style.fontFamily};
  font-size: 36px;
  font-style: normal;
  font-weight: bold;
  line-height: 42px;
  text-align: center;
  letter-spacing: -0.045em;
`;

export default Header;
