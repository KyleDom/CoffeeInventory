import React, { useState, useEffect } from 'react';

    const CoffeeInventory = () => {
        const [coffee, setCoffee] = useState([]);
        const [newCoffee, setNewCoffee] = useState({ name: '', price: '', quantity: '' });
        const [showForm, setShowForm] = useState(false);

                useEffect(() => {
                     fetch('http://localhost:5000/api/coffee')
                        .then((res) => res.json())
                        .then((data) => setCoffee(data))
                        .catch((err) => console.log(err));
                    }, []);

        const handleInputChange = (event) => {
            const { name, value } = event.target;
            setNewCoffee({ ...newCoffee, [name]: value });
        };

        const handleSubmit = (event) => {
            event.preventDefault();
        
            fetch('http://localhost:5000/api/coffee', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newCoffee),
                })
                .then((res) => res.json())
                .then((data) => {
                        setCoffee([...coffee, data]);
                        setNewCoffee({ name: '', price: '', quantity: '' });
                        setShowForm(false);
                })
                .catch((err) => console.log(err));
                                    };

        return (
<               div className="text-center">
                    {!showForm && <button onClick={() => setShowForm(true)}>Add Coffee</button>}
                {showForm && (
                    <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" className="form-control" id="name" name="name" value={newCoffee.name} onChange={handleInputChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="quantity">Quantity:</label>
                    <input type="number" className="form-control" id="quantity" name="quantity" value={newCoffee.quantity} onChange={handleInputChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input type="number" className="form-control" id="price" name="price" value={newCoffee.price} onChange={handleInputChange} />
                </div>

                <button type="submit" className="btn btn-primary bg-blue-500 text-white">Add Coffee</button>
                </form>
                )}

                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left dark:text-gray-300">
            <thead className="text-xs uppercase bg-yellow-700 dark:text-white">
                    <tr>

                        <th scope="col" className="px-6 py-3 rounded-l-lg">
                             Name
                        </th>
                            <th scope="col" className="px-6 py-3">
                            Quantity
                        </th>
                             <th scope="col" className="px-6 py-3 rounded-r-lg">
                            Price
                        </th>
                    </tr>
                        </thead>
            <tbody>
                {coffee.map((item) => (
                    <tr key={item.id} className="bg-white bg-yellow-600">
                    <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.price}</td>
                    </tr>
            ))}
            </tbody>
        </table>
    </div>
</div>
    );
};

export default CoffeeInventory;
