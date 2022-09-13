class TaxiDriverPassenger {
  /**
   * Create a passenger.
   * @param {number} id - идентификатор пасажира.
   * @param {string} name - имя пасажира.
   */
  constructor(
    id = -1,
    name = '',
  ) {
    this.id = id;
    this.name = name;
  }
}

Object.assign(window.gameData, {
  SmartphoneTaxiDriverPassengers: [
    new TaxiDriverPassenger(
      3648423,
      "Vasek [GM]",
    ),
    new TaxiDriverPassenger(
      3648513,
      "James",
    ),
    new TaxiDriverPassenger(
      3648516,
      "Masha",
    ),
    new TaxiDriverPassenger(
      3648932,
      "Green",
    ),
    new TaxiDriverPassenger(
      3648985,
      "Halk",
    ),
  ]
});
