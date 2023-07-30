import React from 'react'
import { Link } from 'react-router-dom'

const ProductsPage = ({ products }) => {

    console.log(products);
    {

        const ProductsPage = ({ products, deleteProduct }) => {
            const handleDelete = (productId) => {
                // Gọi hàm deleteProduct để xóa sản phẩm với productId cụ thể
                deleteProduct(productId);
            };




            return (
                <div>
                    <Link to={`admin/products/add`}>AddProducts</Link>

                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>ProductsName</th>
                                <th>Price</th>
                                <th>Acction</th>

                            </tr>
                            {products.map((item, index) => {
                                return (
                                    // <div key={index + 1}>
                                    //     <h3>{item.name}</h3>
                                    //     <p>{item.price}</p>
                                    //     <Link to={`/detail/${item.id}`}><button>Detail</button></Link>

                                    <tr>
                                        <th>{index + 1}</th>
                                        <th>{item.name}</th>
                                        <th>{item.price}</th>
                                        <th>   <button onClick={() => handleDelete(product.id)}>Xóa</button>
                                            <Link to={`/admin/products/${item.id}/update`}><button>Update</button></Link></th>

                                    </tr>
                                )
                            })}



                        </thead>

                    </table>
                </div>
            )
        }
    }
}



export default ProductsPage