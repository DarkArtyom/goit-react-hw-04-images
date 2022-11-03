import axios from 'axios';

async function responseApi(imageName, page, setIsLoading, setHitsFromFetch) {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${imageName}&page=${page}&key=29789074-1225e0ee7727dd30a4d9fda5f&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response;
}

const API = { responseApi };
export default API;
