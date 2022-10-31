import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { FcSearch } from 'react-icons/fc';
import {
  SearchForm,
  SearchFormButton,
  SpanButtonLabel,
  SearchInput,
  SearchBarHeader,
} from './Searchbar.styled';

export const Searchbar = ({ onInputSubmit }) => {
  const [imageName, setImageName] = useState('');

  const handleImageName = event => {
    setImageName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (imageName.trim() === '') {
      toast('Enter image for search');
      return;
    }
    onInputSubmit(imageName);
    setImageName('');
  };

  return (
    <SearchBarHeader>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <FcSearch />
          <SpanButtonLabel>Search</SpanButtonLabel>
        </SearchFormButton>

        <SearchInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={imageName}
          onChange={handleImageName}
        />
      </SearchForm>
    </SearchBarHeader>
  );
};
Searchbar.propTypes = {
  onInputSubmit: PropTypes.func.isRequired,
};
