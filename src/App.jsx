import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/Home'
import { Route, Router, Routes } from 'react-router-dom'
import { DetailPage } from './pages/Detail'
import Dashboard from './pages/admin/Dashboard'
import ProductsPage from './pages/admin/Products'
import AddProductsPage from './pages/admin/AddProducts'
import UpdateProductsPage from './pages/admin/UpdateProducts'


function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch(' http://localhost:3000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage products={products} />} />
        <Route path='/detail/:id' element={<DetailPage products={products} />} />
        <Route path='/admin/dashboard' element={<Dashboard products={products} />} />
        <Route path='/admin/products' element={<ProductsPage products={products} />} />
        <Route path='/admin/products/add' element={<AddProductsPage products={products} />} />
        <Route path='/admin/products/:id/update' element={<UpdateProductsPage products={products} />} />
      </Routes>
      {/* 
        admin 
          dashboard
          product - hiển thị sản phẩm theo dạng table
          add product
          update product
      */}
    </>
  )

}


export default App



/* eslint-disable react-hooks/exhaustive-deps */


/* eslint-disable react-hooks/exhaustive-deps */
// import { useEffect, useState } from "react";
// import "./App.css";
// import Product from "./components/Product";
// import axios from "axios";
// import { IProduct } from "./interfaces/Products";

// function App() {
//   const [products, setProducts] = useState([]);
//   useEffect(function () {
//     axios.get(`http://localhost:3000/products`).then(({ data }) => {
//       setProducts(data);
//     });
//   }, []);
//   const onHandleAdd = async (product: IProdut) => {
//     const { data } = await axios.post(`http://localhost:3000/products`, product);
//     // reRender
//     setProducts([...products, data]);
//   };
//   const onHandleEdit = async (product: IProduct) => {
//     const { data } = await axios.put(`http://localhost:3000/products/${product.id}`, product);
//     // reRender
//     setProducts(products.map((item) => (item.id === data.id ? data : item)));
//   };
//   return (
//     // props
//     <>
//       <Product data={products} onAdd={onHandleAdd} onEdit={onHandleEdit} />
//     </>
//   );
// }

// export default App;

// function display({ data, onAdd }: { data: string; onAdd: (product: any) => void }) {
//     console.log(data);
//     onAdd(10);
// }

// const onHandleAdd = (product: any) => {
//     console.log(product);
// };

// display({ data: "Product A", onAdd: onHandleAdd });
