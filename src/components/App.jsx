import { Component } from 'react';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ButtonMore } from './Button/Button';
import { Container } from './App.styled.js';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    page: 1,
    images: [],
    imageName: '',
    showModal: false,
    isLoading: false,
    modalPictureUrl: '',
  };

  async componentDidUpdate(_, prevState) {
    const { page, imageName } = this.state;
    try {
      if (prevState.page !== page || prevState.imageName !== imageName) {
        this.setState({ isLoading: true });
        const response = await axios.get(
          `https://pixabay.com/api/?q=${imageName}&page=${page}&key=29789074-1225e0ee7727dd30a4d9fda5f&image_type=photo&orientation=horizontal&per_page=12`
        );
        if (response.data.total === 0 || response.data.hits.length === 0) {
          this.setState({ isLoading: false });
          toast('Sorry, there is no images on your request');
        }
        toast('Response successful');
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
          isLoading: false,
        }));
      }
    } catch (error) {
      toast(`You have an ${error}`);
      this.setState({ isLoading: false });
    }
  }

  onModalOpen = e => {
    const pictureUrl = e.target.getAttribute('data-url');
    this.setState({ modalPictureUrl: pictureUrl });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleSubmitForm = imageName => {
    this.setState({ imageName, page: 1, images: [] });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { isLoading, images, modalPictureUrl } = this.state;
    return (
      <Container>
        <Searchbar onInputSumbit={this.handleSubmitForm} />
        {this.state.showModal && (
          <Modal onClose={this.toggleModal} picureUrl={modalPictureUrl} />
        )}
        <Loader isLoading={isLoading} />
        <ImageGallery images={images} openModal={this.onModalOpen} />
        {images.length > 11 && <ButtonMore onClick={this.loadMore} />}
        <ToastContainer />
      </Container>
    );
  }
}
