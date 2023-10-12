import React, { useState, useEffect } from "react";

const CoffeeInventory = () => {
  const [coffee, setCoffee] = useState([]);
  const [newCoffee, setNewCoffee] = useState({
    name: "",
    price: "",
    quantity: "",
  });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/coffee")
      .then((res) => res.json())
      .then((data) => setCoffee(data))
      .catch((err) => console.log(err));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCoffee({ ...newCoffee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/api/coffee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        setCoffee([...coffee, data]);
        setNewCoffee({ name: "", price: "", quantity: "" });
        setShowForm(false);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/api/coffee/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        const updatedCoffee = coffee.filter((item) => item.id !== id);
        setCoffee(updatedCoffee);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="text-center">
      <span style={{ margin: "0 50px" }}></span>
      {!showForm && (
        <button
          type="button"
          className="btn btn-warning btn-lg"
          onClick={() => setShowForm(true)}
        >
          Add Coffee Stock
        </button>
      )}
      {showForm && (
        <div className="mx-auto" style={{ width: "150px" }}>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={newCoffee.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                className="form-control"
                id="quantity"
                name="quantity"
                value={newCoffee.quantity}
                onChange={handleInputChange}
                min="1"
              />
            </div>

            <div className="form-group">
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                className="form-control"
                id="price"
                name="price"
                value={newCoffee.price}
                onChange={handleInputChange}
                min="0"
                required
              />
            </div>
            <br></br>
            <button type="submit" className="btn btn-warning btn-lg ">
              Add Coffee
            </button>
          </form>
        </div>
      )}

      <div className="card mt-4 mx-auto bg-gray-500" style={{ width: "800px" }}>
        <div className="card-body">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left dark:text-white">
              <tbody>
                <tr>
                  <th scope="col" className="px-6 py-3 bg-yellow-700">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 bg-yellow-700">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3 bg-yellow-700">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3 bg-yellow-700"></th>
                </tr>
                {coffee.map((item) => (
                  <tr
                    key={item.id}
                    className="bg-white bg-yellow-600 text-black rounded-r-lg border-b border-black"
                  >
                    <td className="px-6 py-4 whitespace-nowrap border-b border-black">
                      {item.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border-b border-black">
                      {item.quantity}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        type="button"
                        className="btn btn-danger "
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CoffeeInventory;
