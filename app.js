(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller("ToBuyController", ToBuyController)
.controller("AlreadyBoughtController", AlreadyBoughtController)
.service("ShoppingListCheckOffService", ShoppingListCheckOffService)

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buyItem = this;
  buyItem.items = ShoppingListCheckOffService.getItems();

  buyItem.removeItem = function (itemIndex, itemName, itemQuantity) {
    ShoppingListCheckOffService.removeItem(itemIndex, itemName, itemQuantity);
  };
};

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtItem = this;
  boughtItem.items = ShoppingListCheckOffService.getBoughtItems();
};

function ShoppingListCheckOffService() {
  var service = this;

  // List of to buy items
  var toBuyItems = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donats",
      quantity: "10"
    },
    {
      name: "Chocolate",
      quantity: "3"
    },
    {
      name: "Cookies",
      quantity: "10"
    },
    {
      name: "Chips",
      quantity: "7"
    }
  ];
  // List of bought items
  var boughtItems = [];

  service.removeItem = function (itemIdex, itemName, itemQuantity) {
    var item = {
      name: itemName,
      quantity: itemQuantity
    };
    boughtItems.push(item);
    toBuyItems.splice(itemIdex, 1);
  };

  service.getItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}


})();
