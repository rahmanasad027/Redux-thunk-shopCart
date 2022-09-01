import React, { useEffect } from "react";
import ProductComponent from "./ProductComponent";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../redux/actions/ProductActions";

const ProductListing = () => {
  //   const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  // const fetchProducts = async () => {
  //   const response = await axios
  //     .get("https://fakestoreapi.com/products")
  //     .catch((error) => console.log("error", error));
  //   dispatch(setProducts(response.data));
  // };

  useEffect(() => {
    fetchProducts(dispatch);
  }, []);

  return (
    <div>
      <div style={{ marginTop: "40px" }}>
        <ProductComponent />
      </div>
    </div>
  );
};

export default ProductListing;
