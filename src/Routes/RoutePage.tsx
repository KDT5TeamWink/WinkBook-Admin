import CreateProduct from '@/Components/CreateProduct/CreateProduct';
import ProductList from '@/Components/ProductList/ProductList';
import EditProduct from '@/Components/EditProduct/EditProduct';

import { Routes, BrowserRouter, Route, Outlet, Link } from 'react-router-dom';

function Layout() {
  return (
    <>
      <div>
        <Link to="/add">add</Link>
        <Link to="/list">list</Link>
      </div>
      <Outlet />
    </>
  );
}

export default function RoutePage() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/add" element={<CreateProduct />} />
            <Route path="/list" element={<ProductList />} />
            <Route path="/edit/:productNo" element={<EditProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
