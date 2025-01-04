import { useState } from "react";
import "./App.css";
import { urls } from "./constants";
function App() {
    const [activeIndex, setActiveIndex] = useState(0);
    const handlePreviousClick = () => {
        if (activeIndex === 0) {
            setActiveIndex(urls.length - 1);
        } else {
            setActiveIndex(activeIndex - 1);
        }
    };
    const handleNextClick = () => {
        if (activeIndex == urls.length - 1) {
            setActiveIndex(0);
        } else {
            setActiveIndex(activeIndex + 1);
        }
    };
    return (
        <div className="flex justify-center p-4 m-4">
            <button onClick={handlePreviousClick} className="m-4">
                Previous
            </button>
            <img
                className="h-[400px] w-[400px] object-cover"
                src={urls[activeIndex]}
                alt="Images"
            />
            <button onClick={handleNextClick} className="m-4">
                Next
            </button>
        </div>
    );
}

export default App;
