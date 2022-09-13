class TaxiDriverAvailableOrder {
  /**
   * Create a availableOrder.
   * @param {number} passengerId - идентификатор пасажира.
   * @param {string} passengerName - имя пасажира.
   * @param {number} distanceToDeparturePoint - дистанция до точки отправления, в метрах.
   * @param {number} timeToDeparturePoint - дистанция до точки отправления, в минутах.
   */
  constructor(
    passengerId = -1,
    passengerName = '',
    distanceToDeparturePoint = 0,
    timeToDeparturePoint = 0
  ) {
    this.passengerId = passengerId;
    this.passengerName = passengerName;
    this.distanceToDeparturePoint = distanceToDeparturePoint;
    this.timeToDeparturePoint = timeToDeparturePoint;
  }
}

Object.assign(window.gameData, {
  SmartphoneTaxiDriverOrders: [
    new TaxiDriverAvailableOrder(
      3648423,
      "Vasek [GM]",
      310,
      21
    ),
    new TaxiDriverAvailableOrder(
      3648513,
      "James",
      1354,
      42
    ),
    new TaxiDriverAvailableOrder(
      3648516,
      "Masha",
      957,
      95
    ),
    new TaxiDriverAvailableOrder(
      3648932,
      "Green",
      429,
      129
    ),
    new TaxiDriverAvailableOrder(
      3648985,
      "Halk",
      1509,
      150
    ),
  ]
});
