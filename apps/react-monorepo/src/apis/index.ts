import axios from 'axios';

const getArtist = async () => {
  const result = await axios.get('http://localhost:8080/artists');
  return result.data;
};

const APIs = {
  getArtist,
};

export default APIs;
