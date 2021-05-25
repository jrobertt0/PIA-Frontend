const direction = "http://localhost:3000/api";

export async function registerEmail(credentials) {
	let uri = direction + "/email/addEmail";
	return fetch(uri, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(credentials),
	}).then((data) => data.json());
}

export async function deleteEmail(credentials) {
	let uri = direction + "/email/deleteEmail";
	return fetch(uri, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(credentials),
	}).then((data) => data.json());
}

export async function deleteEmail2(email) {
	let uri = direction + "/email/deleteEmail/" + email;
	return fetch(uri, {
		method: "DELETE",
	}).then((data) => data.json());
}
