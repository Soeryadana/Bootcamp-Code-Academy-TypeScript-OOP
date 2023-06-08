"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var VehiclePurchase_1 = require("./VehiclePurchase");
var InfoSummary = /** @class */ (function (_super) {
    __extends(InfoSummary, _super);
    function InfoSummary(noPolice, vehicleType, year, price, tax, seat, date, rent, driver, order, orderPerKm, total) {
        return _super.call(this, noPolice, vehicleType, year, price, tax, seat, date, rent, driver, order, orderPerKm, total) || this;
    }
    return InfoSummary;
}(VehiclePurchase_1.VehiclePurchase));
var Obj1 = new InfoSummary('D 1001 UM', 'SUV', 2010, 350000000, 3500000, 4, '10/01/2023', 500000, 150000, 0, 0, 650000);
var Obj2 = new InfoSummary('D 1002 UM', 'SUV', 2010, 350000000, 3500000, 4, '10/01/2023', 500000, 150000, 0, 0, 650000);
var Obj3 = new InfoSummary('D 1003 UM', 'SUV', 2015, 350000000, 3500000, 5, '12/01/2023', 500000, 150000, 0, 0, 650000);
var Obj4 = new InfoSummary('D 1004 UM', 'SUV', 2015, 350000000, 3500000, 5, '13/01/2023', 500000, 150000, 0, 0, 650000);
var Obj5 = new InfoSummary('D 11 UK', 'Taxi', 2002, 175000000, 1750000, 4, '12/01/2023', 0, 0, 45, 4500, 202500);
var Obj6 = new InfoSummary('D 12 UK', 'Taxi', 2015, 225000000, 2250000, 4, '13/01/2023', 0, 0, 75, 4500, 337500);
var Obj7 = new InfoSummary('D 13 UK', 'Taxi', 2020, 275000000, 2750000, 4, '13/01/2023', 0, 0, 90, 4500, 405000);
var Obj8 = new InfoSummary('ID8089', 'PrivateJet', 2015, 150000000000, 1500000000, 12, '23/12/2022', 35000000, 15000000, 0, 0, 50000000);
var Obj9 = new InfoSummary('ID8099', 'PrivateJet', 2018, 175000000000, 1750000000, 15, '25/12/2022', 55000000, 25000000, 0, 0, 80000000);
console.log('Total Vehicle = ' + Obj9.getTotalVehicles());
console.log('Total SUV = ' + Obj9.getTotalSUV());
console.log('Total Income Vehicle = ' + Obj9.getTotalIncomeVehicle());
console.log('Total Income Vehicle SUV = ' + Obj9.getTotalIncomeSUV());
console.log('Total Income Vehicle Taxi = ' + Obj9.getTotalIncomeTAXI());
console.log('Total Income Vehicle PrivateJet = ' + Obj9.getTotalIncomePrivateJet());
