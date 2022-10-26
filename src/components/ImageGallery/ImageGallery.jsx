import { GalleryList } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <GalleryList image={images}>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} />
      ))}
    </GalleryList>
  );
};
