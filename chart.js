const ctx = document.getElementById('myChart');
new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: ['total','pending','closed'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      responsive:true,
    }
  });

const barchart=document.getElementById('barchart');
  new Chart(barchart, {
    type: 'bar',
    data: {
      labels: ['total','pending','closed'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      responsive:true,
  }
  });