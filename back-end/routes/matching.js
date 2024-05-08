import fetch from "node-fetch";

async function matching_response() {
	let response = await fetch("http://localhost:5555/Employer/", {
		method: "get",
		body: null,
		headers: { "Content-Type": "application/json" },
	});
	const employers = await response.json();
	// console.log(employers);

	response = await fetch("http://localhost:5555/Jobseeker/", {
		method: "get",
		body: null,
		headers: { "Content-Type": "application/json" },
	});
	const jobseekers = await response.json();
	// console.log(jobseekers);

	const matchings = {};

	let arr;
	for (let i in employers) {
		arr = employers[i]["offensesQuestion"].split(",");
		for (let j in arr) {
			arr[j] = arr[j].trim();
		}
	}

	for (let i in employers) {
		let cands = [];

		for (let j in jobseekers) {
			if (!arr.includes(jobseekers[j]["convictions"][0])) {
				cands.push(jobseekers[j]["iam"]);
			}
		}
		matchings[employers[i]["companyName"]] = cands;
	}
	console.log(matchings);
}

export default matching_response;
