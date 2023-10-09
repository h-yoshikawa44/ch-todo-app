import { FC, ComponentPropsWithRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { colors } from '@/styles/constants';
import { montserrat } from '@/styles/fonts';

type Props = ComponentPropsWithRef<typeof Link>;

const TabLinkItem: FC<Props> = ({ href, children, ...props }) => {
  const router = useRouter();
  const selected = router.pathname === href;
  return (
    <Link
      css={[tabItemLink, selected && selectedTab]}
      href={href}
      {...props}
      passHref
    >
      {children}
    </Link>
  );
};

const tabItemLink = css`
  position: relative;
  width: 100%;
  padding: 16px 12%;
  font-family: ${montserrat.style.fontFamily};
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover,
  &:focus {
    background-color: rgb(0 0 0 / 4%);
  }

  &:focus:not(.focus-visible) {
    outline: none;
  }
`;

const selectedTab = css`
  &::before {
    position: absolute;
    bottom: 0;
    left: 50%;
    display: inline-block;
    width: 50%;
    height: 4px;
    content: '';
    background-color: ${colors.primary};
    border-radius: 4px 4px 0 0;
    transform: translateX(-50%);
  }
`;

export default TabLinkItem;
