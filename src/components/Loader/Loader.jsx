import PacmanLoader from 'react-spinners/ClipLoader';
import PropTypes from 'prop-types';

export const Loader = ({ isLoading }) => {
  return (
    <PacmanLoader
      color="red"
      loading={isLoading}
      size={150}
      aria-label="Loading Spinner"
    />
  );
};

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
