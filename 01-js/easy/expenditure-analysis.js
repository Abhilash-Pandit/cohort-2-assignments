/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

import { groupBy } from "node_modules/core-js/actual/array/group-by";
function calculateTotalSpentByCategory(transactions) {
  const groupByCategory = Object.groupBy(transactions, product => {
    return product.category;
  });
  console.log(groupByCategory); 
  /*   group[category] = group[category] ?? [];
    group[category].push(product);
    return group;
  }, {});
 // console.log(r1);
  for (let i = 0; i < r1.length; i++) {
    let sum = 0;
    for(let j= 0; j<r1[i].length; j++){
      sum=sum+r1[i][j];
    }
    console.log("SUM-->"+sum);
  }*/
  return [];
}
calculateTotalSpentByCategory([
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 2,
    timestamp: 1656259600000,
    price: 20,
    category: 'Food',
    itemName: 'Burger',
  },
  {
    id: 3,
    timestamp: 1656019200000,
    price: 15,
    category: 'Clothing',
    itemName: 'T-Shirt',
  },
  {
    id: 4,
    timestamp: 1656364800000,
    price: 30,
    category: 'Electronics',
    itemName: 'Headphones',
  },
  {
    id: 5,
    timestamp: 1656105600000,
    price: 25,
    category: 'Clothing',
    itemName: 'Jeans',
  },
])

module.exports = calculateTotalSpentByCategory;
