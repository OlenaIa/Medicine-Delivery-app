import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "components/Layout/Layout";

const Pharmacies = lazy(() => import("../../pages/Pharmacies"));
const Cart = lazy(() => import("../../pages/Cart"));

export const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Pharmacies />} />
      <Route path="cart" element={<Cart />} />
      <Route path="*" element={<Pharmacies />} />
    </Route>
  </Routes>
);