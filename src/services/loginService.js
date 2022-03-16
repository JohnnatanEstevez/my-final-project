const url = "https://dsangel-todos-api.herokuapp.com/api/login";

export function postLogin(values) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })
    .then((res) => res.json())
    .then(handleResponse);
  /* .then(console.log)
    .catch(console.log) */
}

function handleResponse(res) {
  console.log(res);
  if (res.data.id) {
    return res;
  } else {
    return res.errors;
  }
}
