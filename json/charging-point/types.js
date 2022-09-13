Object.assign(window.gameData, { ChargingPointTypes: {
    low: {
        price: 1,
        timePerPercent: 8000,
        label: '14 кВт',
        description: 'Слабая мощность, займет много времени на зарядку, но не заберет много денег.',
        color: '#ebe420'
      },
      medium: {
        price: 1.7,
        timePerPercent: 4000,
        label: '53 кВт',
        description: 'Средняя мощность, займет не так много денег времени на зарядку и не так много денег.',
        color: '#20d6eb',
      },
      high: {
        price: 2.3,
        timePerPercent: 2000,
        label: '117 кВт',
        description: 'Самая мощная и дорогая зарядка, ваш электрокар будет заряжен в миг!',
        color: '#f4f4f4'
      }
}});