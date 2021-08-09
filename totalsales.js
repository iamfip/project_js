
function totalSales(x, y, z) {
    if //Condition of Being Integer// 
	(       
    Number.isInteger(x) == true &&
    Number.isInteger(y) == true &&
    Number.isInteger(z) == true ) 
	{
    let shirt = x * 100;
    let pant = y * 200;
    let shoes = z * 500;

    let totalAmount = shirt + pant + shoes;
    return totalAmount;
} else {
    return " Please Give a Intiger Number";
}
}

let sales = totalSales(5, 0, 5);
console.log(sales);
