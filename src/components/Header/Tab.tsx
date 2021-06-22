import { VFC } from 'react';
import { css } from '@emotion/react';
import TabLinkItem from '@/components/Header/TabLinkItem';

const Tab: VFC = () => {
  return (
    <nav css={tab}>
      <TabLinkItem href="/">All</TabLinkItem>
      <TabLinkItem href="/active">Active</TabLinkItem>
      <TabLinkItem href="/completed">Completed</TabLinkItem>
    </nav>
  );
};

const tab = css`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #bdbdbd;
`;

export default Tab;
