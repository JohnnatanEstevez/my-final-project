export function http(url, method = "GET", data, headers = {}) {
  return fetch(url, {
    method,
    credentials: "include",
    ...(data ? { body: JSON.stringify(data) } : null),
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  }).then(handleResponse);
}

function handleResponse(res) {
  if (res.ok && res.status === 204) {
    return;
  }
  return res
    .json()
    .then((result) => (res.ok ? result : Promise.reject(result)));
}
