import { useState, useEffect, useRef } from 'react';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ButtonMore } from './Button/Button';
import { Container } from './App.styled.js';
// import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import imageApi from './services/fetchApi';

export const App = () => {
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [imageName, setImageName] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalPictureUrl, setModalPictureUrl] = useState('');
  const [hitsFromFetch, setHitsFromFetch] = useState([]);
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
        const dataFetch = await imageApi.responseApi(
          imageName,
          page,
          setIsLoading,
          setHitsFromFetch
        );
        setImages(p => [...p, ...dataFetch]);
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
    setHitsFromFetch([]);
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
      {hitsFromFetch.length > 11 && !isLoading && (
        <ButtonMore onClick={loadMore} />
      )}
      <ToastContainer />
    </Container>
  );
};
