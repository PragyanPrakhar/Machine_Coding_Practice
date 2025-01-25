import Profile from "./Profile";
import Settings from "./Settings";
import Interests from "./Interests";
import { useState } from "react";

const TabForm = () => {
    const [data, setData] = useState({
        name: "Pragyan",
        age: "22",
        email: "pragyanprakhar@gmail.com",
        interests: ["coding", "technical writing", "music"],
        theme: "dark",
    });
    const [activeTab, setActiveTab] = useState(0);
    const [errors, setErrors] = useState({});

    const handleNextClick = () => {
        if (Tabs[activeTab].validate()) {
            setActiveTab((prev) => prev + 1);
        }
    };
    const handlePrevClick = () => {
        if (Tabs[activeTab].validate()) {
            setActiveTab((prev) => prev - 1);
        }
    };
    const Tabs = [
        {
            name: "Profile",
            component: Profile,
            validate: () => {
                const newErrors = {};
                if (!data.name || data.name.length < 2) {
                    newErrors.name = "Name must be at least 2 characters long";
                }
                if (!data.age || data.age < 18) {
                    newErrors.age = "Age must be at least 18 years";
                }
                if (!data.email || !data.email.includes("@")) {
                    newErrors.email = "Enter a valid email";
                }
                setErrors(newErrors); // Update errors state
                return Object.keys(newErrors).length === 0; // Return validation result
            },
        },
        {
            name: "Settings",
            component: Settings,
            validate: () => {
                return true;
            },
        },
        {
            name: "Interests",
            component: Interests,
            validate: () => {
                const newErrors = {};
                if (data.interests.length === 0) {
                    newErrors.interests = "Select at least one interest";
                }
                setErrors(newErrors); // Update errors state
                return Object.keys(newErrors).length === 0; // Return validation result
            },
        },
    ];
    const ActiveTabComponent = Tabs[activeTab].component;
    return (
        <div>
            <div className="heading-container">
                {Tabs.map((tab, index) => {
                    return (
                        <div
                            className="heading"
                            onClick={() => setActiveTab(index)}
                            key={index}
                        >
                            {tab.name}
                        </div>
                    );
                })}
            </div>
            <div className="tab-body">
                <ActiveTabComponent
                    data={data}
                    setData={setData}
                    errors={errors}
                />
            </div>
            <div>
                {activeTab === Tabs.length - 1 && (
                    <button onClick={() => console.log(data)}>Submit</button>
                )}
            </div>
            {activeTab > 0 && <button onClick={handlePrevClick}>Prev</button>}
            {activeTab < Tabs.length - 1 && (
                <button onClick={handleNextClick}>Next</button>
            )}
        </div>
    );
};

export default TabForm;
