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
  const count = item.inventory;
  let price = item.price;

  if (item.salePrice) {
    const saleCount = item.saleInventory;
    if (saleCount > 0) {
      price = item.salePrice;
    }
  }

  if (count) {
    return price
  }

  return 0
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



