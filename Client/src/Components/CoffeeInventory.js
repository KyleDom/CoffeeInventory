import React from 'react'

const CoffeeInventory = () => {
  return (
    <div>
        

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left dark:text-gray-300">
        <thead class="text-xs uppercase bg-yellow-700 dark:text-white">
            <tr>
                <th scope="col" class="px-6 py-3 rounded-l-lg">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Quantity
                </th>
                <th scope="col" class="px-6 py-3 rounded-r-lg">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white bg-yellow-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Americano
                </th>
                <td class="px-6 py-4">
                    20
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
            </tr>
            <tr class="bg-white bg-yellow-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Latte
                </th>
                <td class="px-6 py-4">
                    50
                </td>
                <td class="px-6 py-4">
                    $300
                </td>
            </tr>
            <tr class="bg-white bg-yellow-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Cappuccino
                </th>
                <td class="px-6 py-4">
                   90
                </td>
                <td class="px-6 py-4">
                    $699
                </td>
            </tr>
        </tbody>
    </table>
</div>


    </div>
  )
}

export default CoffeeInventory