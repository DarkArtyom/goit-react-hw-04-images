import { ImageGalleryItemStyle, ImageItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image }) => {
  console.log(image);
  return (
    <ImageGalleryItemStyle>
      <ImageItem src={image.webformatURL} alt={image.tags} />
    </ImageGalleryItemStyle>
  );
};
