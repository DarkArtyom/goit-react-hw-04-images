import PacmanLoader from 'react-spinners/ClipLoader';

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
