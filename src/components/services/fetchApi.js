import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

async function responseApi(imageName, page, setIsLoading, setHitsFromFetch) {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${imageName}&page=${page}&key=29789074-1225e0ee7727dd30a4d9fda5f&image_type=photo&orientation=horizontal&per_page=12`
  );
  if (response.data.total === 0 || response.data.hits.length === 0) {
    setIsLoading(false);
    toast('Sorry, there is no images on your request');
  }
  setHitsFromFetch(response.data.hits);
  const dataFromFetch = response.data.hits.map(
    ({ id, tags, webformatURL, largeImageURL }) => ({
      id,
      tags,
      webformatURL,
      largeImageURL,
    })
  );
  return dataFromFetch;
}

const API = { responseApi };
export default API;
