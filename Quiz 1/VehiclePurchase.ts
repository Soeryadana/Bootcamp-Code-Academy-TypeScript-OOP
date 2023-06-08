export class VehiclePurchase {
    protected noPolice: string;
    protected vehicleType: string;
    protected year: number;
    protected price: number;
    protected tax: number;
    protected seat: number;

    protected date: string;
    protected rent: number;
    protected driver: number;
    protected order: number;
    protected orderPerKm: number;
    protected total: number;

    protected static totalVehicle: number = 0;
    protected static totalSUV: number = 0;
    protected static totalIncome: number = 0;
    protected static totalIncomeSUV: number = 0;
    protected static totalIncomeTAXI: number = 0;
    protected static totalIncomePrivateJet: number = 0;
    
    constructor (noPolice:string, vehicleType:string, year:number, price:number, tax:number, seat:number, date:string, rent:number, driver:number, order:number, orderPerKm:number, total:number) {
        this.noPolice = noPolice;
        this.vehicleType = vehicleType;
        this.year = year;
        this.price = price;
        this.tax = tax;
        this.seat = seat;

        this.date = date;
        this.rent = rent;
        this.driver = driver;
        this.order = order;
        this.orderPerKm = orderPerKm;
        this.total = total;

        VehiclePurchase.totalVehicle++;

        if (this.vehicleType == 'SUV') {
            VehiclePurchase.totalSUV++;
        }

        if (this.vehicleType == 'SUV') {
            VehiclePurchase.totalIncomeSUV += this.total;
        } else if (this.vehicleType == 'Taxi') {
            VehiclePurchase.totalIncomeTAXI += this.total;
        } else if (this.vehicleType == 'PrivateJet') {
            VehiclePurchase.totalIncomePrivateJet += this.total;
        } 
        
        VehiclePurchase.totalIncome += this.total;
        
    }

    setNoPolice(noPolice:string) {
        this.noPolice = noPolice;
    }

    setVehicleType(vehicleType:string) {
        this.vehicleType = vehicleType;
    }

    setYear(year:number) {
        this.year = year;
    }

    setPrice(price:number) {
        this.price = price;
    }

    setTax(tax:number) {
        this.tax = tax;
    }

    setSeat(seat:number) {
        this.seat = seat;
    }

    setDate(date:string) {
        this.date = date;
    }

    setRent(rent:number) {
        this.rent = rent;
    }

    setDriver(driver:number) {
        this.driver = driver;
    }

    setOrder(order:number) {
        this.order = order;
    }

    setOrderPerKm(orderPerKm:number) {
        this.orderPerKm = orderPerKm;
    }

    setTotal(total:number) {
        this.total = total;
    }
    
    getNoPolice(): string {
        return this.noPolice;
    }

    getVehicleType(): string {
        return this.vehicleType;
    }
    
    getYear(): number {
        return this.year;
    }

    getPrice(): number {
        return this.price;
    }

    getTax(): number {
        return this.tax;
    }

    getSeat(): number {
        return this.seat;
    }

    getTotalVehicles(): number {
        return VehiclePurchase.totalVehicle;
    }

    getTotalSUV(): number {
        return VehiclePurchase.totalSUV;
    }

    getTotalIncomeVehicle(): number {
        return VehiclePurchase.totalIncome;
    }

    getTotalIncomeSUV(): number {
        return VehiclePurchase.totalIncomeSUV;
    }

    getTotalIncomeTAXI(): number {
        return VehiclePurchase.totalIncomeTAXI;
    }
    
    getTotalIncomePrivateJet(): number {
        return VehiclePurchase.totalIncomePrivateJet;
    }
    
}