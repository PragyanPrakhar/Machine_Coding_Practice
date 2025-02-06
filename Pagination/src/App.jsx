import { useEffect, useState } from "react";

import "./App.css";
import ProductCard from "./components/ProductCard";

const PAGE_SIZE = 10;

function App() {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const start = currentPage * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    const fetchData = async () => {
        try {
            const response = await fetch(
                "https://dummyjson.com/products?limit=500"
            );
            const json = await response.json();
            setProducts(json.products);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const totalProducts = products.length;
    const numberOfPages = Math.ceil(totalProducts / PAGE_SIZE);
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    const goToNextPage = () => {
        setCurrentPage((currentPage) =>
            Math.min(currentPage + 1, numberOfPages - 1)
        );
    };
    const goToPreviousPage = () => {
        setCurrentPage((currentPage) => Math.max(currentPage - 1, 0));
    };
    return !products.length ? (
        <h1>No Products Found !!</h1>
    ) : (
        <div className="app">
            <h1>Pagination</h1>
            <div className="products-container">
                {products.slice(start, end).map((product) => (
                    <ProductCard
                        key={product.id}
                        thumbnail={product.thumbnail}
                        title={product.title}
                    />
                ))}
            </div>
            <div>
                <button
                    disabled={currentPage === 0}
                    className="page-number"
                    onClick={() => goToPreviousPage()}
                >
                    ⬅️
                </button>
                {[...Array(numberOfPages).keys()].map((page) => (
                    <span
                        className={
                            "page-number" + (page === currentPage ? "active" : "")
                        }
                        key={page}
                        onClick={() => handlePageChange(page)}
                    >
                        {page}
                    </span>
                ))}
                <button
                    disabled={currentPage === numberOfPages - 1}
                    className="page-number"
                    onClick={() => goToNextPage()}
                >
                    ➡️
                </button>
            </div>
        </div>
    );
}

export default App;
