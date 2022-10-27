import { ImageGalleryItemStyle, ImageItem } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ image }) => {
  return (
    <ImageGalleryItemStyle>
      <ImageItem
        src={image.webformatURL}
        alt={image.tag}
        data-url={image.largeImageURL}
      />
    </ImageGalleryItemStyle>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
};
