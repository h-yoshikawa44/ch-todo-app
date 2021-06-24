import { VFC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { createRGBAColor } from '@/util/color';

type Props = ComponentPropsWithRef<'button'>;

const DeleteIconButton: VFC<Props> = ({ ...props }) => {
  return (
    <button css={deleteButton} {...props}>
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
  outline: none;
  transition: background-color 0.3s;

  &:hover,
  &:focus {
    /* stylelint-disable-next-line function-name-case */
    background-color: ${createRGBAColor('#EB5757', 0.3)};
  }
`;

export default DeleteIconButton;
