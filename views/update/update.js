const serverAdd = "http://localhost:7575/api/student";
const form = document.getElementById("f");

document.addEventListener("submit", (e) => {
  e.preventDefault();
  const jsonData = {};
  const data = new FormData(form);
  for (let [key, value] of data.entries()) {
    console.log(key, value);
    jsonData[key] = value;
  }

  fetch(serverAdd, { method: "PUT", body: JSON.stringify(jsonData) })
  .then(res => res.json())
  .then((res) => {
    //main element
    
    const main = document.querySelector('main');
    const p = document.createElement('p');
    p.innerText = res.msg;
    p.style.color = '#FF4D00';
    p.style.fontSize = '22px'
    main.appendChild(p)
    setTimeout(() => {
      p.innerHTML = ''
    }, 1000);
  })

  let i = form.getElementsByTagName('input')
  for(let val of i) {
    val.value = ''
  }
 
});