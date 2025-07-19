let interns = [];

document.getElementById("taskForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let task = document.getElementById("task").value;
  let status = document.getElementById("status").value;

  interns.push({ name, task, status });
  displayInterns(interns);

  // Clear form
  document.getElementById("taskForm").reset();
  const modal = bootstrap.Modal.getInstance(document.getElementById("taskModal"));
  modal.hide();
});

function displayInterns(data) {
  let table = document.getElementById("internTableBody");
  table.innerHTML = "";
  data.forEach((intern, index) => {
    let badgeClass = intern.status === "Done" ? "success" : "danger";
    table.innerHTML += `
      <tr>
        <td>${intern.name}</td>
        <td>${intern.task}</td>
        <td><span class="badge bg-${badgeClass}">${intern.status}</span></td>
      </tr>
    `;
  });
}

function filterTasks(status) {
  if (status === "All") {
    displayInterns(interns);
  } else {
    let filtered = interns.filter(i => i.status === status);
    displayInterns(filtered);
  }
}
