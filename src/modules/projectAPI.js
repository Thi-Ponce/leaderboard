const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
const currentGameID = 'MWUpUmiHxzETYYcYdFqF';

const setData = async (userName, userScore) => {
  const connect = await fetch(`${baseURL}/${currentGameID}/scores`, {
    method: 'POST',
    body: JSON.stringify({ user: userName, score: userScore }),
    headers: { 'Content-type': 'application/JSON' },
  });
  const receivedData = await connect.json();
  return receivedData;
};

const getData = async () => {
  const connect = await fetch(`${baseURL}/${currentGameID}/scores`);
  const scoreList = await connect.json();
  return scoreList;
};

export { getData, setData };