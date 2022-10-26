// import PropTypes from 'prop-types';
import { Component } from 'react';

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
    console.log(this.state.imageName);
  };

  handleSubmit = evt => {
    evt.preventDefault();

    if (this.state.imageName.trim() === '') {
      alert('Enter image for search');
      return;
    }
    this.props.onInputSumbit(this.state.imageName);
    this.setState({ imageName: '' });
  };

  render() {
    return (
      <SearchBarHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <SpanButtonLabel>Search</SpanButtonLabel>
          </SearchFormButton>

          <SearchInput
            type="text"
            autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            value={this.state.imageName}
            onChange={this.handleImageName}
          />
        </SearchForm>
      </SearchBarHeader>
    );
  }
}
