// chart met informatie over de water en voedsel voorraad voor de menselijke passagiers
// data is in percentage's  bij de eerste 2 charts maar dit heb ik nog niet uitgevogeld
const data = {
  labels: [
    'Ontbijt',
    'Lunch',
    'Avondeten',
    'Fruit & Snacks'
  ],
  datasets: [{
    type: 'bar',
    label: 'Voorraden',
    data: [80, 75, 70, 50],
    borderColor: 'rgb(255, 99, 132)',
    backgroundColor:[
      'rgba(224, 243, 250, 0.2)',
      'rgba(244, 158, 20, 0.2)',
      'rgba(16, 214, 100, 0.2)',
      'rgba(240, 146, 208, 0.2)'
    ], 
    borderColor:[
      'rgb(224, 243, 250)',
      'rgb(244, 158, 20)',
      'rgb(16, 214, 100)',
      'rgb(240, 146, 208)'
    ],
    borderWidth: 1
  }, {
    type: 'line',
    label: 'Water voorraad',
    data: [100, 90, 85, 70],
    fill: false,
    borderColor: 'rgb(33, 164, 213)'
  }]
};

const config = {
  type: 'scatter',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

const myChart = new Chart(
  document.getElementById('etenDrinken'),
  config
);


// Bar chart 1 over de gezondheid per supporthamster groep

const data2 = {
  labels: ['Henk', 'Barrie', 'Fedor', 'Chris', 'Paul', 'Els', 'Petra', 'Witje'],
  datasets: [{
    label: 'Algemene gezondheid per groep',
    data: [72, 59, 92, 81, 85, 55, 63, 75],
    backgroundColor: [
      'rgba(33, 164, 213, 0.2)',
      'rgba(16, 214, 100, 0.2)',
      'rgba(255, 0, 0, 0.2)',
      'rgba(0, 118, 255, 0.2)',
      'rgba(240, 146, 208, 0.2)',
      'rgba(101, 41, 235, 0.2)',
      'rgba(244, 158, 20, 0.2)',
      'rgba(224, 243, 250, 0.2)'
    ],
    borderColor: [
      'rgb(33, 164, 213)',
      'rgb(16, 214, 100)',
      'rgb(255, 0, 0)',
      'rgb(0, 118, 255)',
      'rgb(240, 146, 208)',
      'rgb(101, 41, 235)',
      'rgb(244, 158, 20)',
      'rgb(224, 243, 250)'
    ],
    borderWidth: 1
  }]
};

const config2 = {
    type: 'bar',
    data: data2,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };

const myChart2 = new Chart(
    document.getElementById('gezondheid'),
    config2
  );


//   Pie chart met de voedselvoorraad voor alle support hamsters

const data3 = {
    labels: ['Hooi', 'Paprika', 'Bladgroente', 'tomaat', 'fruit', 'snacks'],

    datasets: [{
      label: 'Voedselvoorraad per maaltijd',
      data: [300, 100, 250, 60, 80, 40],
      backgroundColor: [
        'rgba(16, 214, 100, 0.2)',
        'rgba(244, 158, 20, 0.2)',
        'rgba(44, 119, 34, 0.2)',
        'rgba(255, 0, 0, 0.2)',
        'rgba(255, 235, 0, 0.2)',
        'rgba(101, 41, 235, 0.2)'
      ],

      borderColor: [
        'rgb(16, 214, 100)',
        'rgb(244, 158, 20)',
        'rgb(44, 119, 34)',
        'rgb(255, 0, 0)',
        'rgb(255, 235, 0)',
        'rgb(101, 41, 235)'
      ],
      hoverOffset: 4
    }]
  };

  const config3 = {
    type: 'pie',
    data: data3,
  };

  const myChart3 = new Chart(
    document.getElementById('voedsel'),
    config3
  );
