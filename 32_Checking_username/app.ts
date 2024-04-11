
// checking username

// current_users array
const current_users: string[] = ['Eric', 'Mike', 'Tommy', 'Tosha', 'Ivan'];

// new_users array
const new_users: string[] = ['Ali', 'Ahmed', 'Rayan', 'Sara', 'Sadia'];


for (let new_user of new_users) {
  
  const lowercase_new_user = new_user.toLowerCase();
  
  
  if (current_users.map(user => user.toLowerCase()).includes(lowercase_new_user)) {
      // Username already exists
      console.log(`The username '${new_user}' is not available. Please choose a different username.`);
  } else {
      // Username is available
      console.log(`The username '${new_user}' is available.`);
  }
}