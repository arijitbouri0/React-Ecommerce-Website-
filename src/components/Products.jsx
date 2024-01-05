import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortOrder, setSortOrder] = useState("default"); // default, lowToHigh, highToLow
  let componentMounted = true;

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");
      if (componentMounted) {
        const products = await response.clone().json();
        setData(products);
        setFilter(products);
        setLoading(false);
      }
    };

    getProducts();

    return () => {
      componentMounted = false;
    };
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div key={index} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
            <Skeleton height={592} />
          </div>
        ))}
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  };

  const sortProducts = (order) => {
    let sortedProducts = [...filter];

    if (order === "lowToHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (order === "highToLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setFilter(sortedProducts);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="row">
          <div className="col-md-3">
            <div className="buttons text-left py-3">
              <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setFilter(data)}>
                All
              </button>
              <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("men's clothing")}>
                Men's Clothing
              </button>
              <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("women's clothing")}>
                Women's Clothing
              </button>
              <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("jewelery")}>
                Jewelery
              </button>
              <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("electronics")}>
                Electronics
              </button>
            </div>
          </div>
          <div className="col-md-9 text-right">
            <div className="buttons py-3">
              <select
                className="btn btn-outline-dark btn-sm m-2"
                onChange={(e) => setSortOrder(e.target.value)}
                value={sortOrder}
              >
                <option value="default">Sort By</option>
                <option value="lowToHigh">Price Low to High</option>
                <option value="highToLow">Price High to Low</option>
              </select>
              <button className="btn btn-outline-dark btn-sm m-2" onClick={() => sortProducts(sortOrder)}>
                Apply Sort
              </button>
            </div>
          </div>
        </div>
  
        {filter.map((product) => (
          <div key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
            <div className="card text-center h-100" key={product.id}>
              <img className="card-img-top p-3" src={product.image} alt="Card" height={300} />
              <div className="card-body">
                <h5 className="card-title">{product.title.substring(0, 12)}...</h5>
                <p className="card-text">{product.description.substring(0, 90)}...</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item lead">$ {product.price}</li>
              </ul>
              <div className="card-body">
                <Link to={"/product/" + product.id} className="btn btn-dark m-1">
                  Buy Now
                </Link>
                <button className="btn btn-dark m-1" onClick={() => addProduct(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };
  

  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Latest Products</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;
