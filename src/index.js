
document.addEventListener("DOMContentLoaded", () => {
	const taskForm = document.getElementById("create-task-form");
	const taskInput = document.getElementById("new-task-description");
	const taskString = document.getElementById("tasks");

	taskForm.addEventListener("submit", (event) => {
	  event.preventDefault();

	  const text = taskInput.value;

	  if (text !== "") {

		const newInput = document.createElement("li");
		newInput.textContent = text;

		taskString.appendChild(newInput);

		taskInput.value = "";
	  }
	});
  });




