// for demo purposes...
const isDemo = location.host === "sabovoichita.github.io";
//const inlineChanges = isDemo;
// const baseUrl = "http://localhost:3000/teams-json";

const API = {
  CREATE: {
    URL: "http://localhost:3000/teams-json/create",
    METHOD: "POST"
  },
  READ: {
    URL: "http://localhost:3000/teams-json",
    METHOD: "GET"
  },
  UPDATE: {
    URL: "http://localhost:3000/teams-json/update",
    METHOD: "PUT"
  },
  DELETE: {
    URL: "http://localhost:3000/teams-json/delete",
    METHOD: "DELETE"
  }
};

if (isDemo) {
  API.READ.URL = "./data/teams.json";
  API.DELETE.URL = "./data/delete.json";
  API.CREATE.URL = "./data/create.json";
  API.UPDATE.URL = "./data/update.json";

  API.DELETE.METHOD = "GET";
  API.CREATE.METHOD = "GET";
  API.UPDATE.METHOD = "GET";
}

export function loadTeamsRequest() {
  return fetch(baseUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(r => r.json());
}

export function createTeamRequest(team) {
  return fetch(`${baseUrl}/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(team)
  }).then(r => r.json());
}
// DELETE teams-json/delete
export function deleteTeamRequest(id) {
  return fetch(`${baseUrl}/delete`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id: id })
  }).then(r => r.json());
}

export function updateTeamRequest(team) {
  return fetch(`${baseUrl}/update`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(team)
  }).then(r => r.json());
}
