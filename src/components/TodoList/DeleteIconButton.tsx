import { VFC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { createRGBAColor } from '@/util/color';

type Props = ComponentPropsWithRef<'button'> & {
  todoId: string;
  onDelete?: (id: string) => void;
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
      <FontAwesomeIcon icon={faTrash} color="#EB5757" />
    </button>
  );
};

const deleteButton = css`
  width: 32px;
  height: 32px;
  background-color: #fff;
  border: none;
  border-radius: 50%;
  transition: background-color 0.3s;

  &:hover,
  &:focus {
    /* stylelint-disable-next-line function-name-case */
    background-color: ${createRGBAColor('#EB5757', 0.3)};
  }

  &:focus:not(.focus-visible) {
    outline: none;
  }
`;

export default DeleteIconButton;
