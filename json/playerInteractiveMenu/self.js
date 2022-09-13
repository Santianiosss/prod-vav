Object.assign(window.gameData, {PlayerInteractiveMenuSelf: [
  {
    id: 'animations',
    label: 'Анимации',
    icon: 'player-interactive-menu/friendship.svg',
    color: ''
  },
  {
    id: 'documents',
    label: 'Посмотреть документы',
    icon: 'player-interactive-menu/docs.svg',
    color: '#E2EA25',
    subcontrols: [
      {
        id: "document-passport",
        label: "Id карта",
        icon: 'player-interactive-menu/docs.svg',
        isChild: true
      },
      {
        id: "document-driving",
        label: "Водительское удостоверение",
        icon: 'player-interactive-menu/docs.svg',
        isChild: true
      },
      {
        id: "document-organization",
        label: "Удостоверение организации",
        icon: 'player-interactive-menu/docs.svg',
        isChild: true
      },
      {
        id: "document-vehicle",
        label: "ПТС",
        icon: 'player-interactive-menu/docs.svg',
        isChild: true
      },
    ]
  },
  {
    id: 'business-card',
    label: 'Информация о бизнесе',
    icon: 'player-interactive-menu/money.svg',
    color: '#25EA52'
  },
  {
    id: 'fractions',
    label: 'Фракция',
    icon: 'player-interactive-menu/swap.svg',
    color: '#2552EA',
    subcontrols: [
      {
        id: 'attack-location',
        label: 'Атаковать территорию',
        icon: 'player-interactive-menu/friendship.svg',
        isChild: true
      },
      {
        id: 'attack-business',
        label: 'Атаковать бизнес',
        icon: 'player-interactive-menu/friendship.svg',
        isChild: true
      },
    ]
  }

]})