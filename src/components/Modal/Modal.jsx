import { useEffect } from 'react';
import { Backdrop, ModalWindow } from './Modal.styled';
import PropTypes from 'prop-types';

export const Modal = ({ onClose, picureUrl }) => {
  useEffect(() => {
    const handleEsc = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keyup', handleEsc);

    return () => {
      window.removeEventListener('keyup', handleEsc);
    };
  });

  const handleBackDropClick = evt => {
    if (evt.currentTarget === evt.target) {
      onClose();
    }
  };

  return (
    <Backdrop onClick={handleBackDropClick}>
      <ModalWindow>
        <img src={picureUrl} alt="pictureArt" />
      </ModalWindow>
    </Backdrop>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  picureUrl: PropTypes.string.isRequired,
};
