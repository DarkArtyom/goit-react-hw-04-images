import { Component } from 'react';
// import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ButtonMore } from './Button/Button';
import { Container } from './App.styled.js';
import axios from 'axios';

export class App extends Component {
  state = {
    page: 1,
    images: [],
    imageName: '',
    showModal: false,
    isLoading: false,
  };

  async componentDidUpdate(prevProps, prevStates) {
    try {
      if (prevStates.imageName !== this.state.imageName) {
        this.setState({ isLoading: true });
        const response = await axios.get(
          `https:pixabay.com/api/?q=${this.state.imageName}&page=1&key=29789074-1225e0ee7727dd30a4d9fda5f&image_type=photo&orientation=horizontal&per_page=12`
        );
        this.setState({ images: response.data.hits });
        this.setState({ isLoading: false });
      }
    } catch (error) {
      alert(`You have an ${error}`);
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleSubmitForm = imageName => {
    this.setState({ imageName });
    this.setState({ page: 1, images: [] });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { isLoading, images, page } = this.state;
    return (
      <Container>
        <Searchbar onInputSumbit={this.handleSubmitForm} />
        {/* //{' '}
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <img src="" alt="" />
          </Modal>
        )} */}
        <Loader isLoading={isLoading} />
        <ImageGallery images={images} />
        {images.length > 0 && <ButtonMore onClick={page} />}
      </Container>
    );
  }
}
