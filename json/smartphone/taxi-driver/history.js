class TaxiDriverCompletedOrder {
  /**
   * Create a availableOrder.
   * @param {number} passengerId - идентификатор пасажира.
   * @param {string} passengerName - имя пасажира.
   * @param {number} completeTime - время поездки, в секундах.
   * @param {number} price - стоимость поездки.
   */
  constructor(
    passengerId = -1,
    passengerName = '',
    completeTime = 0,
    price = 0
  ) {
    this.passengerId = passengerId;
    this.passengerName = passengerName;
    this.completeTime = completeTime;
    this.price = price;
  }
}


Object.assign(window.gameData, {
  SmartphoneTaxiDriverSessionHistory: [
    new TaxiDriverCompletedOrder(
      3648275,
      "Green",
      12,
      123
    ),
    new TaxiDriverCompletedOrder(
      3648281,
      "Ivan",
      8.5,
      82
    ),
  ]
});
