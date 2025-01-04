import "./App.css";
import { useState } from "react";
function App() {
    const [items, setItems] = useState([
        { name: "Hello", checked: false },
        { name: "Ji", checked: false },
        { name: "Hi", checked: false },
    ]);
    const [selectAll, setSelectAll] = useState(false);
    const handleItemChange = (index) => {
        const newItems = [...items];
        newItems[index].checked = !newItems[index].checked;
        setItems(newItems);
        setSelectAll(newItems.every((item) => item.checked));
    };
    const handleSelectAllChange = () => {
        // const newItems=[...items];
        const newSelectAll = !selectAll;
        setSelectAll(newSelectAll);
        setItems(items.map((item) => ({ ...item, checked: newSelectAll })));
    };
    return (
        <div className="p-4">
            <form className="flex flex-col items-center space-y-4">
                <label className="flex items-center space-x-4">
                    <input
                        type="checkbox"
                        checked={selectAll}
                        onChange={() => {
                            handleSelectAllChange();
                        }}
                    />
                    select all
                </label>
                {items.map((item, index) => (
                    <label key={index} className="flex items-center space-x-4">
                        <input
                            type="checkbox"
                            name={item.name}
                            checked={item.checked}
                            onChange={() => handleItemChange(index)}
                        />
                        <span>{item.name}</span>
                    </label>
                ))}
            </form>
        </div>
    );
}

export default App;
