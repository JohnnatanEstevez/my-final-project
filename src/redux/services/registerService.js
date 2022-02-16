export function postRegister(user) {
  console.log("postRegister");
  console.log(user);
  let url = "https://dsangel-todos-api.herokuapp.com/api";
  fetch(url, {
    method: "POST", // or 'PUT'
    body: JSON.stringify(user), // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json",
    },
  });
}
