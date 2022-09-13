function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

Object.assign(
  window.gameData,
  deepFreeze({
    InventoryCategories: {
      1: {
        "label": "Одежда",
        "name": "clothes",
        "types": ["Clothes"],
        "description": null,
        "icon": "clothes/t-shirt.svg",
      },
      2: {
        "label": "Оружие/Аммуниция",
        "name": "weapon",
        "types": ["Weapon", "WeaponAmmo"],
        "description": null,
        "icon": "weapon-ammo/rifle-mid.svg"
      },
      3: {
        "label": "Еда",
        "name": "food",
        "types": ["Food", "Drink", "AlcoholicDrink"],
        "description": null,
        "icon": "food/hamburger.svg"
      },
      4: {
        "label": "Медикаменты",
        "name": "medicine",
        "types": ["Medicines", "MedicinesEnergy"],
        "description": null,
        "icon": "medicine/aidkit.svg"
      },
      5: {
        "label": "Электроника",
        "name": "electronics",
        "types": ["Phone"],
        "description": null,
        "icon": "common/smartphone.svg"
      },
      6: {
        "label": "Модификации оружия",
        "name": "weapon-components",
        "types": ["WeaponComponent"],
        "description": null,
        "icon": "inventory/gear.svg"
      },
      7: {
        "label": "Разное",
        "name": "other",
        "types": [],
        "description": null,
        "icon": "inventory/box.svg"
      }
    }
  })
);
//EOF
