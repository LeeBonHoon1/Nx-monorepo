/* eslint-disable-next-line */ export interface ProductListProps {
  test?: string;
}

export function ProductList(props: ProductListProps) {
  return (
    <div>
      <button className="font-bold">{props.test ?? ''}</button>
    </div>
  );
}

export default ProductList;
