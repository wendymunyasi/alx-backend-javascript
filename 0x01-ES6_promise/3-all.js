import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  // Call the uploadPhoto function to upload the user's photo then chain all
  // promises together and handle with one error statement
  uploadPhoto()
    .then((photoResp) => {
      // If the photo was successfully uploaded, call the createUser function
      // to create the user
      return createUser({
        // the details below are provided in the createUser function
        // fetch them using dot notation
        body: photoResp.body,
        firstName: photoResp.firstName,
        lastName: photoResp.lastName,
      });
    }).then((userResp) => {
      // If the user was successfully created, log the body, firstName, and lastName to the console
      console.log(userResp.body, userResp.firstName, userResp.lastName);
    }).catch((error) => {
      // In the event of an error, log Signup system offline to the console
      console.log('Signup system offline');
    });
}
