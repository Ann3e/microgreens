import ProductCarousel from '../frontend/src/components/ProductCarousel';
import { microgreensProducts } from '../frontend/src/components/data/products';

export default function Home() {
  return (
    <div>
      <h1>Our Microgreens Selection</h1>
      <ProductCarousel products={microgreensProducts} />
    </div>
  );
}
