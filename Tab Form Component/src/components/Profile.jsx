const Profile = ({ data, setData, errors }) => {
    const { name, email, age } = data;
    const handleDataChange = (e, item) => {
        setData((prevState) => ({ ...prevState, [item]: e.target.value }));
    };
    return (
        <div>
            <label>Name:- </label>
            <input
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => handleDataChange(e, "name")}
            ></input>
            {errors.name && <span className="error">{errors.name}</span>}
            <br />
            <label>Email:- </label>
            <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => handleDataChange(e, "email")}
            ></input>
            {errors.name && <span className="error">{errors.age}</span>}

            <br />
            <label>Age:- </label>
            <input
                type="number"
                placeholder="Enter Your Age"
                value={age}
                onChange={(e) => handleDataChange(e, "age")}
            ></input>
            {errors.name && <span className="error">{errors.email}</span>}
        </div>
    );
};
export default Profile;
