import React, { useState, useEffect } from 'react';

const CoffeeInventory = () => {
    const [coffee, setCoffee] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/coffee')
            .then((res) => res.json())
            .then((data) => setCoffee(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
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
