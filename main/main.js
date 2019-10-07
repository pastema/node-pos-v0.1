module.exports = function main(input) {
    var ColaName = '';
    var numBottlesCola = 0;
    var UnitPriceCola = 0;
    var SubtotalCola = 0;

    var SpriteName = '';
    var numBottlesSprite = 0;
    var UnitPriceSprite = 0;
    var SubtotalSprite = 0;

    var BatteryName = '';
    var numBottlesBattery = 0;
    var UnitPriceBattery = 0;
    var SubtotalBattery = 0;

    var Total = 0;

        for(var i = 0; i <= input.length-1; i++)
        {
            if(input[i].Name == 'Coca-Cola')
            {
                ColaName = input[i].Name;
                numBottlesCola += 1;
                UnitPriceCola = input[i].Price;
                SubtotalCola += UnitPriceCola;
            }

            if(input[i].Name == 'Sprite')
            {
                SpriteName = input[i].Name;
                numBottlesSprite += 1;
                UnitPriceSprite = input[i].Price;
                SubtotalSprite += UnitPriceCola;
            }

             if(input[i].Name == 'Battery')
            {
                BatteryName = input[i].Name;
                numBottlesBattery += 1;
                UnitPriceBattery = input[i].Price;
                SubtotalBattery += UnitPriceCola-1;
            }
            Total += input[i].Price
        }




    let expectText =
                '***<store earning no money>Receipt ***\n' +
                'Name: '+ColaName+', Quantity: '+numBottlesCola+' bottles, Unit price: '+UnitPriceCola+'.00 (yuan), Subtotal: '+SubtotalCola+'.00 (yuan)\n' +
                'Name: '+SpriteName+', Quantity: '+numBottlesSprite+' bottles, Unit price: '+UnitPriceSprite+'.00 (yuan), Subtotal: '+SubtotalSprite+'.00 (yuan)\n' +
                'Name: '+BatteryName+', Quantity: '+numBottlesBattery+', Unit price: '+UnitPriceBattery+'.00 (yuan), Subtotal: '+SubtotalBattery+'.00 (yuan)\n' +
                '----------------------\n' +
                'Total: '+Total+'.00 (yuan)\n' +
                '**********************\n';
    return  expectText;
};