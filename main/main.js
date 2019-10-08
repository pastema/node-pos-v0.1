module.exports = function main(input) {
    const header = '***<store earning no money>Receipt ***\n';
    var prodName = '';
    var prodUnit = '';
    var prodQuantity = 0;
    var prodPrice = 0;
    var prodSubPrice = 0;
    var getProductLine = '';
    var concatValue = '';
    var value;
    var Total = 0;
    let myData = [];

    let unique = [...new Set(input.map(a => a.Barcode))];

    for(var x = unique.length-1; x >= 0; x--)
    {
        for(var y = input.length-1; y >= 0; y--)
        {
            if(unique[x] == input[y].Barcode)
            {
                prodName = input[y].Name;
                prodUnit = input[y].Unit
                prodQuantity += 1;
                prodPrice = input[y].Price;
                prodSubPrice = prodPrice * prodQuantity;
                Total += input[y].Price
            }
        }

        if(prodUnit == 'a')
        {
              getProductLine = 'Name: '+prodName+', Quantity: '+prodQuantity+', Unit price: '+prodPrice.toFixed(2)+' (yuan), Subtotal: '+prodSubPrice.toFixed(2)+' (yuan)\n';
              myData.push(getProductLine);
        }
        else if(prodQuantity > 1)
        {
                getProductLine = 'Name: '+prodName+', Quantity: '+prodQuantity+' ' +prodUnit+'s'+', Unit price: '+prodPrice.toFixed(2)+' (yuan), Subtotal: '+prodSubPrice.toFixed(2)+' (yuan)\n';
                myData.push(getProductLine);
        }
        else
        {
              getProductLine = 'Name: '+prodName+', Quantity: '+prodQuantity+' ' +prodUnit+', Unit price: '+prodPrice.toFixed(2)+' (yuan), Subtotal: '+prodSubPrice.toFixed(2)+' (yuan)\n';
              myData.push(getProductLine);
        }
            var concatProductLine = getProductLine.concat(getProductLine,concatProductLine);
            prodName = '';
            prodUnit = '';
            prodQuantity = 0;
            prodPrice = 0;
            prodSubPrice = 0;

    }

     for(var i = myData.length-1; i >=0 ; i--)
    {
       value = myData[i];
       concatValue += value;
    }


  var endReceipt = '----------------------\n' +
            'Total: '+Total.toFixed(2)+' (yuan)\n' +
            '**********************\n';


    var finalconcatValue = header + concatValue + endReceipt;
    return finalconcatValue;
};