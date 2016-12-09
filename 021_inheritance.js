var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Report = (function () {
    function Report(name) {
        this.name = name;
        this.companyProfile = name;
    }
    return Report;
}());
var Invoice = (function (_super) {
    __extends(Invoice, _super);
    function Invoice(name, total) {
        _super.call(this, name);
        this.name = name;
        this.total = total;
    }
    Invoice.prototype.printInvoice = function () {
        return this.name + ", " + this.total;
    };
    return Invoice;
}(Report));
var BillofLading = (function (_super) {
    __extends(BillofLading, _super);
    function BillofLading(name, city, state) {
        _super.call(this, name);
        this.name = name;
        this.city = city;
        this.state = state;
    }
    BillofLading.prototype.printBol = function () {
        return this.name + ", " + this.city + ", " + this.state;
    };
    return BillofLading;
}(Report));
var invoice = new Invoice('Google', 200);
var bol = new BillofLading('Google', 'Scottsdale', 'AZ');
console.log(invoice.printInvoice());
console.log(bol.printBol());
//# sourceMappingURL=021_inheritance.js.map