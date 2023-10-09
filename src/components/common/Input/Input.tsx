import { FC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';
import { colors } from '@/styles/constants';
import { montserrat } from '@/styles/fonts';

type Props = ComponentPropsWithRef<'input'> & {
  fullWidth?: boolean;
};

const Input: FC<Props> = ({ fullWidth = false, ...props }) => {
  return <input css={[input, fullWidth && fullWidthSize]} {...props} />;
};

const input = css`
  padding: 16px;
  font-family: ${montserrat.style.fontFamily};
  font-size: 14px;
  font-weight: normal;
  line-height: 17px;
  border: 1px solid ${colors.border};
  border-radius: 12px;
  outline: none;
  transition: border-color 0.3s;

  &::placeholder {
    color: ${colors.placeHolder};
  }

  &:focus {
    border-color: ${colors.primary};
  }
`;

const fullWidthSize = css`
  width: 100%;
`;

export default Input;
