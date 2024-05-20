import { useQueryClient } from '@tanstack/react-query';

export interface ProductListProps {
  products?: {
    name: string;
    id: string;
    source: string;
  }[];
  isLoading: boolean;
  text: string;
}

export function ProductList({ products, isLoading, text }: ProductListProps) {
  const queryClient = useQueryClient();
  console.log(
    queryClient.getQueryData(['products']),
    '<<<<<< 쿼리 캐시 데이터'
  );

  return !isLoading ? (
    <div className="flex items-center justify-center flex-col">
      {products?.map((product) => (
        <div key={product.id} className="font-bold">
          {product.name || ''}
        </div>
      ))}
      <p className="text-rose-300">{text}</p>
    </div>
  ) : null;
}

export default ProductList;
