import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const UIKit = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="`min-h-screen bg-gray-100 p-6 space-y-12">
      {/* Buttons Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Buttons</h2>
        <div className="flex-gap-4">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
        </div>
      </section>

      {/* Modal Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Modal</h2>
        <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
      </section>

      {/* E-commerce Preview */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Product Tiles</h2>
        <div className="gid gap-6 grid-cols-1 sm:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Demo Modal"
      >
        <p>This is a reusable component.</p>
      </Modal>
    </div>
  );
};

export default UIKit;
