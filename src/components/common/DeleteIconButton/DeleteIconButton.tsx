import { VFC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';
import { Delete } from '@emotion-icons/material-rounded/Delete';
import { colors } from '@/styles/constants';
import { createRGBAColor } from '@/lib/color';

type Props = ComponentPropsWithRef<'button'> & {
  todoId: string;
  onDelete: (id: string) => void;
};

const DeleteIconButton: VFC<Props> = ({ todoId, onDelete, ...props }) => {
  return (
    <button
      css={deleteButton}
      onClick={() => {
        onDelete(todoId);
      }}
      {...props}
    >
      <Delete size={24} />
    </button>
  );
};

const deleteButton = css`
  width: 32px;
  height: 32px;
  background-color: ${colors.white};
  border: none;
  border-radius: 50%;
  transition: background-color 0.3s;
  color: ${colors.danger};

  &:hover,
  &:focus {
    /* stylelint-disable-next-line function-name-case */
    background-color: ${createRGBAColor(colors.danger, 0.3)};
  }

  &:focus:not(.focus-visible) {
    outline: none;
  }
`;

export default DeleteIconButton;
