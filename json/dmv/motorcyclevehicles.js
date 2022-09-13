Object.assign(
  window.gameData,
  {
    TheDMVMotorcycleVehicles: {
      numberOfTicketsToTestPass: 10,
      allowedNumberOfErrors: 2,
      tickets: [
        {
          ticketId: 0,
          text: 'Какая максимально допустимая скорость движения т/с. в городе?',
          answers: [
            'А) 60 км/ч',
            'Б) 100 км/ч',
            'В) 150 км/ч',
          ],
          correctAnswerIndexes: [1]
        },
        {
          ticketId: 1,
          text: 'Что нарушил водитель движущегося траснпортного средства в данной ситуации?',
          img: 'ticket-1.png',
          answers: [
            'А) Водитель едет не по своей полосе.',
            'Б) У водителя включен дальний свет фар.',
            'В) Водитель превысил максимально допустимую скорость.',
          ],
          correctAnswerIndexes: [2]
        },
        {
          ticketId: 2,
          text: 'Вы попали в ДТП, ваши действия?',
          answers: [
            'А) Не покидать место происшествия и вызвать сотрудников полиции.',
            'Б) Уехать с места происшествия пока никто не видит.',
            'В) Починить транспортное средство ремкомплектом.',
          ],
          correctAnswerIndexes: [0]
        },
        {
          ticketId: 3,
          text: 'В каком случае запрещено садиться за руль?',
          answers: [
            'А) При алкогольном опьянении.',
            'Б) При наркотическом опьянении.',
            'В) В обоих из перечисленных случаях.',
          ],
          correctAnswerIndexes: [2]
        },
        {
          ticketId: 4,
          text: 'Проезжая перекресток вы заметили слева приблежающийся автомобиль с включенными проблесковыми маячками синего или красного цвета и сиреной, ваши действия?',
          answers: [
            'А) Уступить дорогу автомобилю слева.',
            'Б) Вы имеете преимущество, так как для водителя спец. Средства вы помеха справа.',
            'В) В обоих из перечисленных случаях.',
          ],
          correctAnswerIndexes: [0]
        },
        {
          ticketId: 5,
          text: 'Разрешено ли движение по обочинам?',
          answers: [
            'А) Разрешено.',
            'Б) Запрещено.',
            'В) Разрешено с целью остановки из-за неисправности автомобиля.',
          ],
          correctAnswerIndexes: [1]
        },
        {
          ticketId: 6,
          text: 'Разрешено ли водителю Blista поставить автомобиль на стоянку в указанном месте?',
          img: 'ticket-6.png',
          answers: [
            'А) Разрешено.',
            'Б) Запрещено.',
            'В) Разрешено, если вы инвалид.',
          ],
          correctAnswerIndexes: [1]
        },
        {
          ticketId: 7,
          text: 'На повороте возник занос задней оси заднеприводного автомобиля, что следует сделать?',
          answers: [
            'А) Следует слегка уменьшить подачу топлива и повернуть рулевое колесо в сторону заноса.',
            'Б) Следует слегка увеличить подачу топлива и повернуть рулевое колесо в сторону заноса.',
            'В) Следует слегка уменьшить подачу топлива и повернуть автомобиль противоположно заносу.',
          ],
          correctAnswerIndexes: [0]
        },
        {
          ticketId: 8,
          text: 'При возникновении ДТП в котором погиб человек (люди), следует?',
          answers: [
            'А) Скрыться с места проиcшествия.',
            'Б) Вызвать скорую помощь EMS.',
            'В) Оказать первую помощь и вызвать EMS.',
          ],
          correctAnswerIndexes: [2]
        },
        {
          ticketId: 9,
          text: 'Разрешено ли передавать управление транспортного средства человеку не имеющему водительствое удостоверение?',
          answers: [
            'А) Разрешено, если он умеет водить.',
            'Б) Запрещено.',
            'В)  Запрещено, если он находится в алкогольном или наркотическом опьянении.',
          ],
          correctAnswerIndexes: [1]
        },
        {
          ticketId: 10,
          text: 'Что нарушил водитель в данной ситуации?',
          img: 'ticket-11.png',
          answers: [
            'А) Отсутствует свет фар.',
            'Б) Движется не по своей полосе движения.',
            'В) Загрязняет природу выхлопными газами.',
          ],
          correctAnswerIndexes: [0]
        },
        {
          ticketId: 11,
          text: 'В населенных пунктах звуковой сигнал разрешено подавать?',
          answers: [
            'А) При перестроении.',
            'Б) Для предотвращения ДТП.',
            'В) Для привлечения внимания.',
          ],
          correctAnswerIndexes: [1]
        },
        {
          ticketId: 12,
          text: 'Где водитель обязан уступить пешеходам?',
          answers: [
            'А) На перекрестках.',
            'Б) При специальной разметке.',
            'В) В обоих случаях.',
          ],
          correctAnswerIndexes: [2]
        },
        {
          ticketId: 13,
          text: 'Разрешено ли движение на красный цвет светофора?',
          answers: [
            'А) Запрещено.',
            'Б) Разрешено, если вы управляете спец. техникой.',
            'В) Разрешено.',
          ],
          correctAnswerIndexes: [2]
        },
        {
          ticketId: 14,
          text: 'Где разворот запрещен?',
          answers: [
            'А) На пешеходных переходах',
            'Б) В обоих случаях.',
            'В) На мостах.',
          ],
          correctAnswerIndexes: [1]
        },
        {
          ticketId: 15,
          text: 'Допускается ли пересекать сплошную линию разметки, обозначающую край проезжей части?',
          answers: [
            'А) Допускается для остановки на обочине и при выезде с неё только в местах, где разрешена остановка или стоянка.',
            'Б) Допускается для остановки на обочине и при выезде с неё.',
            'В) Запрещается.',
          ],
          correctAnswerIndexes: [0]
        },
        {
          ticketId: 16,
          text: 'Вы едете по дороге и на вашем пути встречается человек, ваши действия?',
          answers: [
            'А) Сбить кеглю и отправить в космос.',
            'Б) Притормозить, оскорбить и уехать.',
            'В) Притормозить и постараться увернуть автомобиль подальше от человека.',
          ],
          correctAnswerIndexes: [2]
        },
        {
          ticketId: 17,
          text: 'По какой полосе вы имеете право двигаться с максимальной разрешенной скоростью вне населенного пункта?',
          answers: [
            'А) Только по правой.',
            'Б) Только по левой.',
            'В) По любой.',
          ],
          correctAnswerIndexes: [0]
        },
        {
          ticketId: 18,
          text: 'Что означает индикатор «km/h» на спидометре?',
          answers: [
            'А) Разработчик фигню какую-то написал.',
            'Б) Скорость в километрах в час.',
            'В) Содержания гидрид калия в бензопаке.',
          ],
          correctAnswerIndexes: [1]
        },
        {
          ticketId: 19,
          text: 'Разрешена ли остановка на тротуаре?',
          answers: [
            'А) Разрешена.',
            'Б) Запрещена.',
            'В) Разрешена, только в экстренных ситуациях.',
          ],
          correctAnswerIndexes: [2]
        },
      ]
    }
  }
);
//EOF
