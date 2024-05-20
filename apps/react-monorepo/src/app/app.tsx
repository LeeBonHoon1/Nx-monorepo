import { Route, Routes, useNavigate } from 'react-router-dom';
import { ProductList } from '@react-monorepo/products';
import useGetProducts from '../hooks/use-get-artists';

export function App() {
  const router = useNavigate();
  const { data, error, isLoading } = useGetProducts({
    queryKey: ['products'],
    staleTime: 1000,
    gcTime: 2000,
  });

  if (error) router('/error');

  return (
    <Routes>
      <Route
        path="/products"
        element={
          <ProductList
            products={data || []}
            isLoading={isLoading}
            text={'props text'}
          />
        }
      />
    </Routes>
  );
}

export default App;
