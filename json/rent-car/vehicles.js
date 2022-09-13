Object.assign(
  window.gameData,
  {
    RentCarVehicles: [
      {
        // Изображения лежат в `src/assets/img/vehicles`
        // Формат имени файла `${carItem.vehicleID}.png`
        vehicleID: '3460613305',
        category: "sports-car", // [car | bicycle | sports-car | bike]
        pricePerMin: 4
      },
      {
        vehicleID: '3286105550',
        category: "car",
        pricePerMin: 2
      }
    ]
  }
)
//EOF
