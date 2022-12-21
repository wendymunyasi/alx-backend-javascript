import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  /**
  * allSettled creates a Promise that is resolved with an array of results
  * when all of the provided Promises resolve or reject.
  * Takes in an array of Promises.
  * Returns a new Promise.
  */
  return Promise
    // Call the signUpUser() and uploadPhoto() functions
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    // When the promises are all settled it should return an array with the
    // given structure
    .then((results) => (
      results.map((out) => ({
        status: out.status,
        value: out.status === 'fulfilled' ? out.value : String(out.reason),
      }))
    ));
}
