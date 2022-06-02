const btn = document.querySelector("button");
const tbody = document.querySelector("#res");
const thead = document.querySelector("table");
const serverAdd = "http://localhost:7575/api/student";

btn.addEventListener("click", () => {
  fetch(serverAdd, { method: "GET" })
    .then((res) => res.json())
    .then((res) => {
      if (res.status === false) {
        const main = document.querySelector("main");
        const p = document.createElement("p");
        p.innerText = res.msg + ', please create one';
        p.style.color = "#FF4D00";
        p.style.fontSize = "22px";
        main.appendChild(p);
        setTimeout(() => {
          p.remove()
        }, 1000);
      } else {
        console.log(Object.values(res));
        console.log("students in server", res);
        tbody.innerHTML = "";

        for (let val of Object.values(res)) {
          let tr = document.createElement("tr");
          tbody.appendChild(tr);

          let tdName = document.createElement("td");
          tdName.innerText = val.name;

          let tdAge = document.createElement("td");
          tdAge.innerText = val.age;

          let tdId = document.createElement("td");
          tdId.innerText = val.id;

          let tdGrades = document.createElement("td");
          tdGrades.innerText = val.grades;

          tr.appendChild(tdName);
          tr.appendChild(tdAge);
          tr.appendChild(tdId);
          tr.appendChild(tdGrades);

          thead.style.opacity = "1";
        }
      }
      
    });
});
