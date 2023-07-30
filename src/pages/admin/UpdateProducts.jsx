import React from 'react'

const UpdateProductsPage = ({ products }) => {
    const ProductsPage = ({ products, updateProduct }) => {
        const handleUpdate = (productId, updatedProduct) => {
            // Gọi hàm updateProduct để cập nhật sản phẩm với productId cụ thể và thông tin cập nhật updatedProduct
            updateProduct(productId, updatedProduct);
        };

        return (
            <div>
                {products.map((product) => (
                    <div key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        <button onClick={() => handleUpdate(product.id, { name: "New Name", price: 99.99 })}>Cập nhật</button>
                    </div>
                ))}
            </div>
        );
    }

}

export default UpdateProductsPage