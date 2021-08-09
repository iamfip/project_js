function delivaryCost(x) {
    if (Number.isInteger(x) && x >= 0) {
      if (x <= 100) {
        var totalcost = x * 100;
        return totalcost;
      } else if (x <= 200) {
        var firstHundred = 100 * 100;
        var restProduct = x - 100;
        let restCost = firstHundred + 80 * restProduct;
        return restCost;
      } else if (x >= 200) {
        var firstHundred = 100 * 100;
        var secondHundred = 100 * 80;
        let restProduct = x - 200;
        let restCost = firstHundred + secondHundred + 50 * restProduct;
        return restCost;
      }
    } else {
      return "Give a Positve Intiger number ";
    }
  }
  
  var noOfSales = 45;
  let totalCostofDelvary = delivaryCost(noOfSales);
  console.log(totalCostofDelvary);
  