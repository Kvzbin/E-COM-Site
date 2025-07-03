// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import { BrowserRouter } from "react-router-dom";
// import { SearchProvider } from "./context/SearchContext.jsx";
// import { CartProvider } from "./context/CartContext.jsx";

// createRoot(document.getElementById("root")).render(
//   <SearchProvider>
//     <CartProvider>
//       <BrowserRouter>
//         <StrictMode>
//           <App />
//         </StrictMode>
//       </BrowserRouter>
//     </CartProvider>
//   </SearchProvider>
// );

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { SearchProvider } from "./context/SearchContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx"; // ✅ NEW

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider> {/* ✅ Wrap Auth first */}
        <SearchProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </SearchProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
