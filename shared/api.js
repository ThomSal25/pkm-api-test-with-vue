const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=1500&offset=0";

export async function fetchHandler(path = "", options = {}) {
  return await fetch(apiUrl + path, options);
}

export async function loadPkm() {
  const response = await fetchHandler();
  const jsonData = await response.json();

  return jsonData;
}
