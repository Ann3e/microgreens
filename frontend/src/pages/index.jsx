import Carousel from '../components/Carousal';
import { microgreensProducts } from '../data/products';

export default function Home() {
  return (
    <div>
      <h1 className="home-title">
        Our <span className="home-accent">Microgreens</span> Selection
      </h1>
      <Carousel products={microgreensProducts} />
    </div>
  );
}
