document.getElementById("btnGetName").addEventListener("click", getRapperName);
let birthName = document.getElementById("birthName");
console.log("Working!!");

async function getRapperName() {
	const rapperName = document.querySelector("input").value;
	try {
		const res = await fetch(
			`https://rappers-name-server.herokuapp.com/api/${rapperName}`
		);
		const data = await res.json();
		birthName.innerText = data.name;
		console.log(data);
	} catch (error) {
		console.log(error);
	}
}
