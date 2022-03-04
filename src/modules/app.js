import * as projectAPI from './projectAPI.js';

const show = () => {
  const pointsTable = document.querySelector('.points');
  pointsTable.innerHTML = '';
  projectAPI.getData().then((dataList) => {
    if (!dataList) {
      return;
    }
    const higherFirst = dataList.result.sort((a, b) => b.score - a.score);
    higherFirst.forEach((data) => {
      const li = document.createElement('li');
      li.innerHTML = `<p>${data.user}: ${data.score}</p>`;
      pointsTable.appendChild(li);
    });
  });
};

const add = (data) => {
  projectAPI.setData(data.user, data.score);
};

export { add, show };