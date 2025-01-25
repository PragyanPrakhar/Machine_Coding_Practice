import React from "react";

const Interests = ({ data, setData,error }) => {
    const { interests } = data;
    const handleDataChange = (e) => {
        setData((prevData) => ({
            ...prevData,
            interests: e.target.checked
                ? [...prevData.interests, e.target.name]
                : prevData.interests.filter((i) => i !== e.target.name),
        }));
    };
    console.log("interests are :-> ", interests);
    return (
        <div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        name="coding"
                        checked={interests.includes("coding")}
                        onChange={handleDataChange}
                    />
                    Coding
                </label>
            </div>

            <div>
                <label>
                    <input
                        type="checkbox"
                        name="technical writing"
                        checked={interests.includes("technical writing")}
                        onChange={handleDataChange}
                    />
                    technical writing
                </label>
            </div>

            <div>
                <label>
                    <input
                        type="checkbox"
                        name="music"
                        checked={interests.includes("music")}
                        onChange={handleDataChange}
                    />
                    music
                </label>
            </div>
            {error?.interests && <span className="error">{error.interests}</span>}
        </div>
    );
};
export default Interests;
