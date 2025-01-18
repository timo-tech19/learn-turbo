import { Product } from '@repo/types';

const Products = async () => {
    const response = await fetch(`${process.env.API_URL}/products`, {
        next: { tags: ['products'] },
    });

    const products: Product[] = await response.json();

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <span>{product.name}</span> -{' '}
                        <span>{product.price}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;
