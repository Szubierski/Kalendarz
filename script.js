function data() {
    setInterval(() => {
        let data = new Date();

        let godzina = data.getHours();
        if (godzina < 10) godzina = "0" + godzina;
        let minuta = data.getMinutes();
        if (minuta < 10) minuta = "0" + minuta;
        let sekunda = data.getSeconds();
        if (sekunda < 10) sekunda = "0" + sekunda;

        let rok = data.getFullYear();
        let dzien = data.getDate();

        document.getElementById('time').innerHTML = godzina + ":" + minuta + ":" + sekunda;
        document.getElementById('actDate').innerHTML = "<p>" + data.toLocaleString('default', { weekday: 'long' }) + ", " + dzien + " " + data.toLocaleString('default', { month: 'long' }) + " " + rok + "</p>";

        if (godzina == 0 && minuta == 0 && sekunda == 0) aktMies();
    }, 500);
}

var aktMies = new Date().getMonth();

function dniMies() {
    let data = new Date();
    data.setMonth(aktMies);
    let miesiac = data.toLocaleString("default", { month: "long" });
    let rok = data.getFullYear();

    let tbody = document.querySelector("tbody");
    tbody.innerHTML = "";

    let kal = new Date();
    kal.setMonth(aktMies);

    let dzienTyg;

    kal.setDate(1);
    if (kal.getDay() == 0) {
        dzienTyg = 6;
    }
    else {
        dzienTyg = kal.getDay() - 1;
    }
    kal.setDate(1 - dzienTyg);

    for (let i = 0; i < 6; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < 7; j++) {
            let td = document.createElement('td')
            td.classList.add("day");
            td.innerText = kal.getDate();

            if (data.getMonth() == kal.getMonth()) {
                td.classList.add("goodMonth");
            }
            if (data.getDate() == kal.getDate() && new Date().getMonth() == kal.getMonth() && kal.getFullYear() == new Date().getFullYear()) {
                td.classList.add("today")
            }
            kal.setDate(kal.getDate() + 1);
            row.append(td);
        }
        tbody.append(row);
    }
    document.querySelector("#calHead p").innerHTML = miesiac + " " + rok;
}

function plus() {
    aktMies++;
    dniMies();
}

function minus() {
    aktMies--;
    dniMies();
}

function czas() {
    dniMies();
    data();
}