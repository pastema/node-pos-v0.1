module.exports = function main(input) {
    const header = '***<store earning no money>Receipt ***\n';
    var prodBarcode = '';
    var prodName = '';
    var prodUnit = '';
    var prodQuantity = 0;
    var prodPrice = 0;
    var prodSubPrice = 0;
    var init = 0;
    var getProductLine = '';
    var concatValue = '';
    var value;
    var Total = 0;
let myData = [];


    unique = [...new Set(input.map(a => a.Barcode))];

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


  var end = '----------------------\n' +
            'Total: '+Total.toFixed(2)+' (yuan)\n' +
            '**********************\n';


    var finalconcatValue = header + concatValue + end;
    return finalconcatValue;
};






































//for(var i = 0; i < collectBarcodes.length-1; i++)
//{
//    if(collectBarcodes[i] == input[i].Barcode)
//    {
//        if(prodName == input[i].Name)
//        {
//            prodName = input[i].Name;
//            prodUnit = input[i].Unit
//            prodQuantity += 1;
//            prodPrice = input[i].Price;
//            prodSubPrice = prodPrice * prodQuantity;
//        }
//        else
//        {
//            var getProductLine = 'Name: '+prodName+', Quantity: '+prodQuantity+' ' +prodUnit+', Unit price: '+prodPrice.toFixed(2)+' (yuan), Subtotal: '+prodSubPrice.toFixed(2)+' (yuan)\n';
//            var concatProductLine = getProductLine.concat(getProductLine,getProductLine);
////            if(i == input.length-1)
////                {
//                    return concatProductLine;
////                }
//        }
//    }
//
//}






//        for(var i = 0; i <= input.length-1; i++)
//        {
//            //Initialize
//            if(init == 0)
//            {
//                init = 1;
//                prodBarcode = input[i].Barcode; //Coke == Coke
//            }
//
//            if(input[i].Barcode == prodBarcode)
//            {
//                prodName = input[i].Name;
//                prodUnit = input[i].Unit
//                prodQuantity += 1;
//                prodPrice = input[i].Price;
//                prodSubPrice += prodPrice;
//            }
//            else
//            {
//                var getProductLine = 'Name: '+prodName+', Quantity: '+prodQuantity+' ' +prodUnit+', Unit price: '+prodPrice.toFixed(2)+' (yuan), Subtotal: '+prodSubPrice.toFixed(2)+' (yuan)\n';
//                prodBarcode = input[i].Barcode;
//                prodName = input[i].Name;
//                prodUnit = input[i].Unit
//                prodQuantity += 1;
//                prodPrice = input[i].Price;
//                prodSubPrice += prodPrice;
//            }
////            Total += input[i].Price
//            if(i == input.length-1)
//            {
//               return getProductLine;
//            }
//        }
//};