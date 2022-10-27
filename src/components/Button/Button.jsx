import { BtnLoadMore } from './Button.styled';
import PropTypes from 'prop-types';

export const ButtonMore = ({ onClick }) => {
  return (
    <BtnLoadMore type="button" onClick={onClick}>
      Load more
    </BtnLoadMore>
  );
};

ButtonMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};
