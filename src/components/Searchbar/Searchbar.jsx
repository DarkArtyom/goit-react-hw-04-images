import PropTypes from 'prop-types';
import { Component } from 'react';
import { toast } from 'react-toastify';
import {
  SearchForm,
  SearchFormButton,
  SpanButtonLabel,
  SearchInput,
  SearchBarHeader,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    imageName: '',
  };

  handleImageName = event => {
    this.setState({ imageName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = evt => {
    const { imageName } = this.state;
    evt.preventDefault();

    if (imageName.trim() === '') {
      toast('Enter image for search');
      return;
    }
    this.props.onInputSumbit(imageName);
    this.setState({ imageName: '' });
  };

  render() {
    this.PropTypes = {
      imageName: PropTypes.string.isRequired,
    };

    return (
      <SearchBarHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <SpanButtonLabel>Search</SpanButtonLabel>
          </SearchFormButton>

          <SearchInput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.imageName}
            onChange={this.handleImageName}
          />
        </SearchForm>
      </SearchBarHeader>
    );
  }
}
