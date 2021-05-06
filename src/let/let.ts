interface ItemProps {
  item: {
    inventory: number;
    price: number;
    salePrice: number;
    saleInventory: number;
  }

}

// 3 simple checks
//* If there is no inventory: Return 0.
//* If there is a sale price and sale inventory: Return sale price.
//* If there is no sale price or no sale inventory: Return price.

function getLowestPrice({ item }: ItemProps) {

  if (!item.inventory) {
    return `There is ${item.inventory} in inventory`
  }

  if (item.salePrice && item.saleInventory) {
    return `There Sales price is ${item.salePrice}`
  }

  if (!item.salePrice && !item.saleInventory) {
    return `There price is ${item.price}`
  }

}

console.log(
  getLowestPrice({
    item: {
      inventory: 0,
      price: 3,
      salePrice: 0,
      saleInventory: 0,
    }
  }))



