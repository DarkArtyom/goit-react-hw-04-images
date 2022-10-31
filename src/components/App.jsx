import { useState, useEffect, useRef } from 'react';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ButtonMore } from './Button/Button';
import { Container } from './App.styled.js';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [imageName, setImageName] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalPictureUrl, setModalPictureUrl] = useState('');
  const isFirstRender = useRef(true);

  useEffect(() => {
    (async function () {
      try {
        if (isFirstRender.current) {
          isFirstRender.current = false;
          return;
        }
        if (imageName === '') {
          return;
        }
        setIsLoading(true);
        const response = await axios.get(
          `https://pixabay.com/api/?q=${imageName}&page=${page}&key=29789074-1225e0ee7727dd30a4d9fda5f&image_type=photo&orientation=horizontal&per_page=12`
        );
        console.log(response);
        if (response.data.total === 0 || response.data.hits.length === 0) {
          setIsLoading(false);
          toast('Sorry, there is no images on your request');
        }
        setImages(p => [...p, ...response.data.hits]);
        setIsLoading(false);
      } catch (error) {
        toast(`You have an ${error}`);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page, imageName]);

  const onModalOpen = e => {
    const pictureUrl = e.target.getAttribute('data-url');
    setModalPictureUrl(pictureUrl);
    toggleModal();
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSubmitForm = imageName => {
    setImageName(imageName);
    setPage(1);
    setImages([]);
  };

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <Container>
      <Searchbar onInputSubmit={handleSubmitForm} />
      {showModal && <Modal onClose={toggleModal} picureUrl={modalPictureUrl} />}
      <Loader isLoading={isLoading} />
      <ImageGallery images={images} openModal={onModalOpen} />
      {images.length > 11 && <ButtonMore onClick={loadMore} />}
      <ToastContainer />
    </Container>
  );
};
