"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiclePurchase = void 0;
var VehiclePurchase = exports.VehiclePurchase = /** @class */ (function () {
    function VehiclePurchase(noPolice, vehicleType, year, price, tax, seat, date, rent, driver, order, orderPerKm, total) {
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
        }
        else if (this.vehicleType == 'Taxi') {
            VehiclePurchase.totalIncomeTAXI += this.total;
        }
        else if (this.vehicleType == 'PrivateJet') {
            VehiclePurchase.totalIncomePrivateJet += this.total;
        }
        VehiclePurchase.totalIncome += this.total;
    }
    VehiclePurchase.prototype.setNoPolice = function (noPolice) {
        this.noPolice = noPolice;
    };
    VehiclePurchase.prototype.setVehicleType = function (vehicleType) {
        this.vehicleType = vehicleType;
    };
    VehiclePurchase.prototype.setYear = function (year) {
        this.year = year;
    };
    VehiclePurchase.prototype.setPrice = function (price) {
        this.price = price;
    };
    VehiclePurchase.prototype.setTax = function (tax) {
        this.tax = tax;
    };
    VehiclePurchase.prototype.setSeat = function (seat) {
        this.seat = seat;
    };
    VehiclePurchase.prototype.setDate = function (date) {
        this.date = date;
    };
    VehiclePurchase.prototype.setRent = function (rent) {
        this.rent = rent;
    };
    VehiclePurchase.prototype.setDriver = function (driver) {
        this.driver = driver;
    };
    VehiclePurchase.prototype.setOrder = function (order) {
        this.order = order;
    };
    VehiclePurchase.prototype.setOrderPerKm = function (orderPerKm) {
        this.orderPerKm = orderPerKm;
    };
    VehiclePurchase.prototype.setTotal = function (total) {
        this.total = total;
    };
    VehiclePurchase.prototype.getNoPolice = function () {
        return this.noPolice;
    };
    VehiclePurchase.prototype.getVehicleType = function () {
        return this.vehicleType;
    };
    VehiclePurchase.prototype.getYear = function () {
        return this.year;
    };
    VehiclePurchase.prototype.getPrice = function () {
        return this.price;
    };
    VehiclePurchase.prototype.getTax = function () {
        return this.tax;
    };
    VehiclePurchase.prototype.getSeat = function () {
        return this.seat;
    };
    VehiclePurchase.prototype.getTotalVehicles = function () {
        return VehiclePurchase.totalVehicle;
    };
    VehiclePurchase.prototype.getTotalSUV = function () {
        return VehiclePurchase.totalSUV;
    };
    VehiclePurchase.prototype.getTotalIncomeVehicle = function () {
        return VehiclePurchase.totalIncome;
    };
    VehiclePurchase.prototype.getTotalIncomeSUV = function () {
        return VehiclePurchase.totalIncomeSUV;
    };
    VehiclePurchase.prototype.getTotalIncomeTAXI = function () {
        return VehiclePurchase.totalIncomeTAXI;
    };
    VehiclePurchase.prototype.getTotalIncomePrivateJet = function () {
        return VehiclePurchase.totalIncomePrivateJet;
    };
    VehiclePurchase.totalVehicle = 0;
    VehiclePurchase.totalSUV = 0;
    VehiclePurchase.totalIncome = 0;
    VehiclePurchase.totalIncomeSUV = 0;
    VehiclePurchase.totalIncomeTAXI = 0;
    VehiclePurchase.totalIncomePrivateJet = 0;
    return VehiclePurchase;
}());
