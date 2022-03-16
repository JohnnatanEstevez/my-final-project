export function http(url, method = "GET", data, headers = {}) {
  console.log("http");
  console.log(data);
  return fetch(url, {
    method,
    ...(data ? { body: JSON.stringify(data) } : null),
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  }).then(handleResponse);
}

function handleResponse(res) {
  return res
    .json()
    .then((result) => (res.ok ? result : Promise.reject(result)));
}
