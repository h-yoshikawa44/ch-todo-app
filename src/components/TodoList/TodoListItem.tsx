import { VFC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';

type Props = ComponentPropsWithRef<'li'> & {
  text: string;
  checked: boolean;
};

const TodoListItem: VFC<Props> = ({ text, checked, ...props }) => {
  return (
    <li css={todoListItem} {...props}>
      <label>
        <input css={checkBox} type="checkbox" defaultChecked={checked} />
        <span
          css={[labelText, customCheckBox, checked && customCheckBoxChecked]}
        >
          {text}
        </span>
      </label>
    </li>
  );
};

const todoListItem = css`
  list-style: none;
`;

const checkBox = css`
  display: none;
`;

const customCheckBox = css`
  position: relative;

  ::before {
    position: absolute;
    left: 0;
    display: inline-block;
    width: 24px;
    height: 24px;
    font-size: 26px;
    color: #fff;
    content: '';
    background-color: #fff;
    border: 1px solid #828282;
    border-radius: 4px;
  }
`;

const customCheckBoxChecked = css`
  ::before {
    font-size: 26px;
    color: #fff;
    content: ${"'\\2713'"};
    background-color: #06f;
  }
`;

const labelText = css`
  padding-left: 32px;
  font-family: Montserrat, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
`;

export default TodoListItem;
