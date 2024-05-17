import { Route, Routes } from 'react-router-dom';
import { ProductList } from '@react-monorepo/products';
import useGetArtists from '../hooks/use-get-artists';

function Home() {
  const { data, error, isLoading } = useGetArtists();
  console.log(data, '<<<<<<');
  console.log(error, '<<<<<<');
  console.log(isLoading, '<<<<<<');
  return <h1>Home</h1>;
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route
        path="/products"
        element={<ProductList test={'apps to libs message'} />}
      />
    </Routes>
  );
}

export default App;
