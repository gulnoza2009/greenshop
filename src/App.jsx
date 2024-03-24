import {
  AccountDetails,
  Address,
  Downloads,
  Orders,
  Reports,
  Support,
  Wishlist,
} from "./pages/account";
import { Account } from "./pages/account/account";
import { Home } from "./pages/home/home";
import { NotFound } from "./pages/not-found/not-found";
import { Cart, Checkout, Shop } from "./pages/shops";
import { Footer, Navbar } from "./components/layout";
import { Auth } from "./pages/auth/auth";
import { Flower } from "./components/pages/shop";

import { Route, Routes } from "react-router-dom";
import i18n from "./locale/i18n";
import { useEffect, useState } from "react";


function App() {
  const [theme, setTheme] = useState(null);

  const changeLang = (value) => i18n.changeLanguage(value);
  const changeTheme = () => setTheme(!theme);

  useEffect(() => {
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? setTheme(false)
      : setTheme(true);
  }, []);

  useEffect(() => {
    !theme
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);

  return (
    <div className="dark:bg-slate-900 bg-white">
      <div className="container dark:bg-slate-900 font-cera-pro">
        <Navbar
          changeLang={changeLang}
          changeTheme={changeTheme}
          theme={theme}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop/>}>
            <Route path=":id" element={<Flower />} />
            <Route path="shopping-cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
          <Route path="/account" element={<Account />}>
            <Route path="shopping-details" element={<AccountDetails />} />
            <Route path="address" element={<Address />} />
            <Route path="downloads" element={<Downloads />} />
            <Route path="orders" element={<Orders />} />
            <Route path="reports" element={<Reports />} />
            <Route path="support" element={<Support />} />
            <Route path="wishlist" element={<Wishlist />} />
          </Route>
          <Route path="login" element={<Auth to={true} />} />
          <Route path="register" element={<Auth to={false} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
