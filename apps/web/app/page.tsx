import CreateProduct from 'web/components/create-products';
import Products from 'web/components/products';

export const dynamic = 'force-dynamic';
export default function Home() {
    return (
        <section>
            <CreateProduct />
            <Products />
        </section>
    );
}
