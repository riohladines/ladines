const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "text/xml");
const students = xmlDoc.getElementsByTagName("student");
const tableBody = document.querySelector("#studentTable tbody");

for (let student of students) {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${student.getElementsByTagName("studentID")[0].textContent}</td>
        <td>${student.getElementsByTagName("lastName")[0].textContent}</td>
        <td>${student.getElementsByTagName("firstName")[0].textContent}</td>
        <td>${student.getElementsByTagName("course")[0].textContent}</td>
        <td>${student.getElementsByTagName("age")[0].textContent}</td>
        <td>${student.getElementsByTagName("email")[0].textContent}</td>
    `;
    tableBody.appendChild(row);
}
