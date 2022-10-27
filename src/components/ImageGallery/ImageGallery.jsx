import { GalleryList } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images, openModal }) => {
  return (
    <GalleryList image={images} onClick={openModal}>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} />
      ))}
    </GalleryList>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
};
