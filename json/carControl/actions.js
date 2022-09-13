Object.assign(window.gameData, { CarControlActions: [
  {
    id: 'handsFree',
    action: {
      actionType: 'handsFree',
      label: 'Свободные руки',
      enable: {
        icon: 'hands-free',
        text: 'Свободные руки',
        textHelper: 'выкл'
      },
      disable: {
        icon: 'hands-free',
        text: 'Свободные руки',
        textHelper: 'вкл'
      }
    }
  },
  {
    id: 'gpsTracking',
    action: {
      actionType: 'gpsTracking',
      label: 'Отследить по GPS',
      enable: {
        icon: 'wifi',
        text: 'Отслеживание по GPS',
        textHelper: 'выкл'
      },
      disable: {
        icon: 'wifi',
        text: 'Отслеживание по GPS',
        textHelper: 'вкл'
      }
    }
  },
  {
    id: 'engineTurnOn',
    action: {
      actionType: 'engineTurnOn',
      label: 'Запуск двигателя',
      enable: {
        icon: 'engine',
        text: 'Запустить двигатель',
      },
      disable: {
        icon: 'engine',
        text: 'Заглушить двигатель',
      }
    }
  }
]})
