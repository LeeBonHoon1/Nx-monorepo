/* eslint-disable-next-line */
export interface ProductListProps {
  test: string;
}

export function ProductList(props: ProductListProps) {
  return (
    <div>
      <h1>{props.test ?? ''}</h1>
    </div>
  );
}

export default ProductList;
