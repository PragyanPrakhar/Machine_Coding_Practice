import React from "react";

const Settings = ({ data, setData }) => {
    const { theme } = data;
    const handleDataChange=(e)=>{
        setData((prevData)=>({...prevData,theme:e.target.name}));
    }
    return (
        <>
            <div>
                <label>
                    <input
                        type="radio"
                        name="dark"
                        checked={theme === "dark"}
                        onChange={handleDataChange}
                    />
                    Dark
                </label>
            </div>
            <br/>
            <div>
                <label>
                    <input
                        type="radio"
                        name="light"
                        checked={theme === "light"}
                        onChange={handleDataChange}
                    />
                    Light
                </label>
            </div>
        </>
    );
};

export default Settings;
