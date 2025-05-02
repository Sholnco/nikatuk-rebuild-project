
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  const addToCart = () => {
    console.log(`Added product ${id} to cart`);
    // Here you would implement your cart logic
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded">
          {category}
        </div>
      </div>
      
      <CardContent className="pt-4">
        <h3 className="text-lg font-medium">{name}</h3>
        <div className="flex justify-between items-center mt-2">
          <p className="font-bold text-lg">${price.toFixed(2)}</p>
        </div>
      </CardContent>
      
      <CardFooter className="border-t pt-3">
        <Button onClick={addToCart} className="w-full">
          <ShoppingCart className="mr-2" size={16} />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
