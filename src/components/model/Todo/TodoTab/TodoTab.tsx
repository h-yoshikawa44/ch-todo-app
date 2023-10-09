import { FC } from 'react';
import { css } from '@emotion/react';
import TabLinkItem from '@/components/model/Todo/TodoTabLinkItem';

const Tab: FC = () => {
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
