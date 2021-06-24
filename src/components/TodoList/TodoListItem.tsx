import { VFC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';
import DeleteIconButton from '@/components/TodoList/DeleteIconButton';

type Props = ComponentPropsWithRef<'li'> & {
  text: string;
  checked: boolean;
};

const TodoListItem: VFC<Props> = ({ text, checked, ...props }) => {
  return (
    <li css={todoListItem} {...props}>
      <label css={label}>
        <input css={checkBox} type="checkbox" defaultChecked={checked} />
        <span
          css={[
            labelText,
            checked && labelTextChecked,
            customCheckBox,
            checked && customCheckBoxChecked,
          ]}
        >
          {text}
        </span>
      </label>
      <DeleteIconButton />
    </li>
  );
};

const todoListItem = css`
  display: flex;
  align-items: center;
  padding: 4px 0;
  list-style: none;
`;

const label = css`
  flex: 1;
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

const labelTextChecked = css`
  text-decoration-line: line-through;
`;

export default TodoListItem;
