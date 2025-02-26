let grades = [];

function addGrade() {
    let subject = document.getElementById("subject").value;
    let grade = parseInt(document.getElementById("grade").value);
    if (subject && grade >= 1 && grade <= 100) {
        grades.push({ subject, grade });
        updateAverage();
    }
}

function updateAverage() {
    if (grades.length === 0) {
        document.getElementById("average").textContent = "0";
        return;
    }
    let sum = grades.reduce((a, b) => a + b.grade, 0);
    let avg = (sum / grades.length).toFixed(2);
    document.getElementById("average").textContent = avg;
}

function openModal() {
    let modalList = document.getElementById("modalGradeList");
    modalList.innerHTML = "";
    grades.forEach((entry, index) => {
        let listItem = document.createElement("li");
        listItem.textContent = `${entry.subject}: ${entry.grade}`;
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "x";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = () => {
            grades.splice(index, 1);
            openModal();
            updateAverage();
        };
        listItem.appendChild(deleteBtn);
        modalList.appendChild(listItem);
    });
    document.getElementById("gradeModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("gradeModal").style.display = "none";
}

function clearGrades() {
    grades = [];
    updateAverage();
    document.getElementById("modalGradeList").innerHTML = "";
}