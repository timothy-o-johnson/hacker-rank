prices = [5, 1, 3, 4, 6, 2]

console.log(finalPrice(prices))

function finalPrice (prices) {
  var currentPrice
  var discount
  var fullPriceItems = []

  // work backwards
  // add the last price because it will never have value to the right
  var finalPrice = prices[prices.length - 1] /* ?+ */
  fullPriceItems.push(prices.length - 1)
  
  for (var i = prices.length - 2; i >= 0; i--) {
    currentPrice = prices[i] /* ?+ */
    discount = getDiscount(currentPrice, prices.slice(i + 1)) /* ?+ */
    if(discount === 0){
      fullPriceItems.push(i)
    }
    finalPrice += currentPrice - discount /* ?+ */
  }
  
  fullPriceItems = fullPriceItems.sort().join(' ')
  
  console.log(finalPrice)
  console.log(fullPriceItems)
  
  return [finalPrice, fullPriceItems]

  function getDiscount (currentPrice, array) {
    var itemPrice
    var discount = 0
    // var isItemPriceLowerThanCurrentPrice =
    for (var i = 0; i < array.length; i++) {
      itemPrice = array[i] /* ?+ */
      if (itemPrice <= currentPrice) {
        discount = itemPrice /* ?+ */
        break
      }
    }
    return discount /* ?+ */
  }
}
