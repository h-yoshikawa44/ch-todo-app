import { FC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';
import { createDarkenColor } from '@/lib/color';
import { colors } from '@/styles/constants';
import { montserrat } from '@/styles/fonts';

type Size = 'md' | 'lg';
type Color = 'primary' | 'danger';

type Props = ComponentPropsWithRef<'button'> & {
  size?: Size;
  color?: Color;
  shadow?: boolean;
  radius?: string;
  beforeIcon?: React.ReactNode;
};

const Button: FC<Props> = ({
  size = 'md',
  color = 'primary',
  shadow = false,
  radius = '12px',
  beforeIcon,
  children,
  ...props
}) => {
  return (
    <button
      css={[
        button,
        buttonSize(size),
        buttonColor(color),
        shadow && buttonShadow,
        buttonRadius(radius),
      ]}
      {...props}
    >
      {beforeIcon && <span css={beforeIconMargin}>{beforeIcon}</span>}
      {children}
    </button>
  );
};

const button = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${montserrat.style.fontFamily};
  font-weight: 600;
  cursor: pointer;
  border: none;

  &:focus:not(.focus-visible) {
    outline-color: transparent;
  }
`;

const buttonSize = (size: Size) => {
  if (size === 'md') {
    return css`
      padding: 12px 24px;
      font-size: 12px;
      line-height: 15px;
    `;
  }
  if (size === 'lg') {
    return css`
      padding: 20px 40px;
      font-size: 14px;
      line-height: 17px;
    `;
  }
};

const buttonColor = (color: Color) => {
  const textColor = css`
    color: ${colors.white};
    box-shadow: 0 2px 6px rgba(127, 177, 243, 0.4);
  `;
  if (color === 'primary') {
    return css`
      ${textColor}

      background-color: ${colors.primary};
      transition: background-color 0.3s;

      &:hover,
      &:focus {
        /* stylelint-disable-next-line function-name-case */
        background-color: ${createDarkenColor(colors.primary, 0.15)};
      }
    `;
  }
  if (color === 'danger') {
    return css`
      ${textColor}

      background-color: ${colors.danger};

      &:hover,
      &:focus {
        /* stylelint-disable-next-line function-name-case */
        background-color: ${createDarkenColor(colors.danger, 0.15)};
      }
    `;
  }
};

const buttonShadow = css`
  box-shadow: 0 2px 6px rgba(127, 177, 243, 0.4);
`;

const buttonRadius = (radius: string) => {
  return css`
    border-radius: ${radius};
  `;
};

const beforeIconMargin = css`
  padding-right: 8px;
`;

export default Button;
