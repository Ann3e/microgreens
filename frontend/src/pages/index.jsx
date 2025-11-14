import Carousel from '../components/Carousal';
import { microgreensProducts } from '../data/products';

export default function Home() {
  return (
    <div>
      <h1>Our Microgreens Selection</h1>
      <Carousel products={microgreensProducts} />
    </div>
  );
}
