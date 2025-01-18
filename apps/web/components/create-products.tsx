import createProduct from 'web/actions/create-product';

const CreateProduct = () => {
    return (
        <div>
            <form action={createProduct}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="price">Price: </label>
                    <input type="number" id="price" name="price" required />
                </div>
                <button type="submit">Create Product</button>
            </form>
        </div>
    );
};

export default CreateProduct;
