import { Injectable } from '@angular/core';
import data from '../../assets/data.json';
import { Product } from '../Product';

@Injectable()
export class JsonToTypescriptService {
  product : Product[]  = data;

  getProductName(){
    let productName: Array<string> = [];
    this.product.forEach(element => {
      productName.push(element.product_name);
    });
    return productName;
  }

  getSalesId(){
    let productId: Array<number> = [];
    this.product.forEach(element => {
      productId.push(element.id);
    });
    return productId;
  }

  getPurchaseCost(){
    let purchaseCost : Array<number> = []
    this.product.forEach(element => {
      purchaseCost.push(element.purchase_cost);
    });
    return purchaseCost;
  }

  getSalesCount(){
    let salesCount : Array<number> = []
    this.product.forEach(element => {
      salesCount.push(element.sales_count);
    });
    return salesCount;
  }

  getSaleCost(){
    let saleCost : Array<number> = []
    this.product.forEach(element => {
      saleCost.push(element.sale_cost);
    });
    return saleCost;
  }

  getProfit(){
    let profit : Array<number> = []
    this.product.forEach(element => {
      profit.push((element.sale_cost-element.purchase_cost)*element.sales_count);
    });
    return profit;
  }
}
