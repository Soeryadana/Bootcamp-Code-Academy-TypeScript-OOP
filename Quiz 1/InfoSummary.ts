import { VehiclePurchase } from "./VehiclePurchase";

interface SummaryInterface {
    getTotalVehicle: number;
    getTotalIncomeVehicle: number;
}

class InfoSummary extends VehiclePurchase {
    constructor(noPolice:string, vehicleType:string, year:number, price:number, tax:number, seat:number, date:string, rent:number, driver:number, order:number, orderPerKm:number, total:number) {
        super(noPolice, vehicleType, year, price, tax, seat, date, rent, driver, order, orderPerKm, total);
    
    }

}

let Obj1 = new InfoSummary('D 1001 UM', 'SUV', 2010, 350000000, 3500000, 4, '10/01/2023', 500000, 150000, 0, 0, 650000);
let Obj2 = new InfoSummary('D 1002 UM', 'SUV', 2010, 350000000, 3500000, 4, '10/01/2023', 500000, 150000, 0, 0, 650000);
let Obj3 = new InfoSummary('D 1003 UM', 'SUV', 2015, 350000000, 3500000, 5, '12/01/2023', 500000, 150000, 0, 0, 650000);
let Obj4 = new InfoSummary('D 1004 UM', 'SUV', 2015, 350000000, 3500000, 5, '13/01/2023', 500000, 150000, 0, 0, 650000);
let Obj5 = new InfoSummary('D 11 UK', 'Taxi', 2002, 175000000, 1750000, 4, '12/01/2023', 0, 0, 45, 4500, 202500);
let Obj6 = new InfoSummary('D 12 UK', 'Taxi', 2015, 225000000, 2250000, 4, '13/01/2023', 0, 0, 75, 4500, 337500);
let Obj7 = new InfoSummary('D 13 UK', 'Taxi', 2020, 275000000, 2750000, 4, '13/01/2023', 0, 0, 90, 4500, 405000);
let Obj8 = new InfoSummary('ID8089', 'PrivateJet', 2015, 150000000000, 1500000000, 12, '23/12/2022', 35000000, 15000000, 0, 0, 50000000);
let Obj9 = new InfoSummary('ID8099', 'PrivateJet', 2018, 175000000000, 1750000000, 15, '25/12/2022', 55000000, 25000000, 0, 0, 80000000);

console.log('Total Vehicle = ' + Obj9.getTotalVehicles());
console.log('Total SUV = ' + Obj9.getTotalSUV());
console.log('Total Income Vehicle = ' + Obj9.getTotalIncomeVehicle());
console.log('Total Income Vehicle SUV = ' + Obj9.getTotalIncomeSUV());
console.log('Total Income Vehicle Taxi = ' + Obj9.getTotalIncomeTAXI());
console.log('Total Income Vehicle PrivateJet = ' + Obj9.getTotalIncomePrivateJet());
