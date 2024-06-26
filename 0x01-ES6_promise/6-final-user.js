import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

function handleProfileSignup(firstName, lastName, fileName) {
  const promis = [signUpUser(firstName, lastName), uploadPhoto(fileName)];

  return Promise.allSettled(promis).then((results) => results.map(({ status, value, reason }) => ({
    status,
    value: status === 'rejected' ? reason.toString() : value,
  })));
}

export default handleProfileSignup;
