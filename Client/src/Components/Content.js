import React from 'react'

const Content = () => {
  return (
    <div>




<div class=" grid grid-cols-1 grid-rows-1 md:grid-cols-2">
  <div
    class=" hover:bg-neutral-400 mr-4 block rounded-lg bg-white dark:bg-neutral-500">
    <div class="p-6">
      <h5
        class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Coffee Sales
      </h5>
      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        number of coffees sold
      </p>
     
    </div>
  </div>

  <div
    class="hover:bg-neutral-400 block rounded-lg bg-white dark:bg-neutral-500">
    <div class="p-6">
      <h5
        class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Supply Left
      </h5>
      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        Number of supplies left in the inventory
      </p>
     
    </div>
  </div>
</div>




    </div>
  )
}

export default Content