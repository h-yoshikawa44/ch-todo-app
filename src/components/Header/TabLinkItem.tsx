import { FC, ComponentPropsWithRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';

type Props = ComponentPropsWithRef<typeof Link>;

const TabLinkItem: FC<Props> = ({ href, children, ...props }) => {
  const router = useRouter();
  const selected = router.pathname === href;
  return (
    <Link href={href} {...props}>
      <a css={[tabItemLink, selected && selectedTab]} href={href as string}>
        {children}
      </a>
    </Link>
  );
};

const tabItemLink = css`
  position: relative;
  width: 100%;
  padding: 16px 12%;
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  text-align: center;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

const selectedTab = css`
  ::before {
    position: absolute;
    bottom: 0;
    left: 50%;
    display: inline-block;
    width: 50%;
    height: 4px;
    content: '';
    background-color: #2f80ed;
    border-radius: 4px 4px 0 0;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
`;

export default TabLinkItem;
