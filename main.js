const inputDay = () => {
    let day = document.getElementById("day");
    let month = document.getElementById("month");
    let year = document.getElementById("year");
    let msgEmpty = document.querySelector(".msg-empty-day");
    let msgInvalid = document.querySelector(".msg-invalid-day");
    let msgInvalidMonth = document.querySelector(".msg-invalid-month");
    let msgInvalidYear = document.querySelector(".msg-invalid-year");
    let btn = document.getElementById("btn");

    if (day.value < 0) {
        day.value = Math.abs(day.value);
    } else {
        day.value = day.value;
    }

    if (day.value.length > 2) {
        day.value = day.value.slice(0, 2);
    } else {
        day.value = day.value;
    }

    //checking date from all month
    const dateAllMonth = [
        31,
        (0 == year.value % 4 && 0 != year.value % 100) || 0 == year.value % 400
            ? 29
            : 28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31,
    ];
    const arrMonth = month.value.split("");
    let monthSpliced = 0;

    if (arrMonth[0] == 0) {
        monthSpliced = arrMonth.splice(1, 1);
    } else {
        monthSpliced = month.value;
    }

    if (day.value == "") {
        day.value = "";
        msgEmpty.style.display = "block";
        day.style.border = "1px solid hsl(0, 100%, 74%)";
    } else {
        day.value = day.value;
        msgEmpty.style.display = "none";
        day.style.border = "1px solid hsl(259, 100%, 65%)";
    }

    if (day.value.length == 2 && day.value < 32) {
        month.focus();
        if (day.value > dateAllMonth[monthSpliced - 1]) {
            msgInvalid.style.display = "block";
            day.style.border = "1px solid hsl(0, 100%, 74%)";
        } else if (dateAllMonth[monthSpliced - 1] == undefined) {
            msgInvalid.style.display = "none";
            day.style.border = "1px solid hsl(0, 0%, 86%)";
        } else {
            msgInvalid.style.display = "none";
            day.style.border = "1px solid hsl(0, 0%, 86%)";
        }
    } else {
        day.value = day.value;
        day.style.border = "1px solid hsl(0, 100%, 74%)";
    }

    if (month.value > 12 || month.value.length == 1) {
        msgInvalidMonth.style.display = "block";
        month.style.border = "1px solid hsl(0, 100%, 74%)";
    } else {
        month.value = month.value;
        msgInvalidMonth.style.display = "none";
        month.style.border = "1px solid hsl(0, 0%, 86%)";
    }
    if (year.value.length == 4 && year.value < new Date().getFullYear()) {
        year.style.border = "1px solid hsl(0, 0%, 86%)";
    }

    if (
        day.value == "" ||
        month.value == "" ||
        year.value == "" ||
        day.value > 31 ||
        month.value > 12 ||
        year.value > new Date().getFullYear() ||
        day.value > dateAllMonth[monthSpliced - 1] ||
        day.value.length < 2 ||
        month.value.length < 2 ||
        year.value.length < 4
    ) {
        btn.disabled = true;
        btn.style.backgroundColor = "hsl(259, 100%, 65%)";
        btn.style.opcaity = "0.5";
        btn.style.cursor = "not-allowed";
    } else {
        btn.disabled = false;
        btn.style.backgroundColor = "hsl(259, 100%, 65%)";
        btn.style.cursor = "pointer";
    }
};

const inputMonth = () => {
    let day = document.getElementById("day");
    let month = document.getElementById("month");
    let year = document.getElementById("year");
    let msgEmpty = document.querySelector(".msg-empty-month");
    let msgInvalid = document.querySelector(".msg-invalid-month");
    let msgInvalidDay = document.querySelector(".msg-invalid-day");
    let btn = document.getElementById("btn");

    if (month.value < 0) {
        month.value = Math.abs(month.value);
    } else {
        month.value = month.value;
    }

    if (month.value.length > 2) {
        month.value = month.value.slice(0, 2);
    } else {
        month.value = month.value;
    }

    if (month.value > 12 || month.value.length == 1) {
        msgInvalid.style.display = "block";
        month.style.border = "1px solid hsl(0, 100%, 74%)";
    } else {
        month.value = month.value;
        msgInvalid.style.display = "none";
        month.style.border = "1px solid hsl(0, 0%, 86%)";
    }

    if (month.value == "") {
        month.value = "";
        msgEmpty.style.display = "block";
        month.style.border = "1px solid hsl(0, 100%, 74%)";
    } else {
        month.value = month.value;
        msgEmpty.style.display = "none";
        month.style.border = "1px solid hsl(259, 100%, 65%)";
    }

    if (month.value.length == 2 && month.value < 13) {
        year.focus();
        month.style.border = "1px solid hsl(0, 0%, 86%)";
    } else {
        month.value = month.value;
        month.style.border = "1px solid hsl(0, 100%, 74%)";
    }

    //checking date from all month
    const dateAllMonth = [
        31,
        (0 == year.value % 4 && 0 != year.value % 100) || 0 == year.value % 400
            ? 29
            : 28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31,
    ];
    const arrMonth = month.value.split("");
    let monthSpliced = 0;

    if (arrMonth[0] == 0) {
        monthSpliced = arrMonth.splice(1, 1);
    } else {
        monthSpliced = month.value;
    }

    if (day.value > dateAllMonth[monthSpliced - 1]) {
        msgInvalidDay.style.display = "block";
        day.style.border = "1px solid hsl(0, 100%, 74%)";
    } else if (dateAllMonth[monthSpliced - 1] == undefined) {
        msgInvalidDay.style.display = "none";
        day.style.border = "1px solid hsl(0, 0%, 86%)";
    } else {
        msgInvalidDay.style.display = "none";
        day.style.border = "1px solid hsl(0, 0%, 86%)";
        year.style.border = "1px solid hsl(0, 0%, 86%)";
    }

    if (
        day.value == "" ||
        month.value == "" ||
        year.value == "" ||
        day.value > 31 ||
        month.value > 12 ||
        year.value > new Date().getFullYear() ||
        day.value > dateAllMonth[monthSpliced - 1] ||
        day.value.length < 2 ||
        month.value.length < 2 ||
        year.value.length < 4
    ) {
        btn.disabled = true;
        btn.style.backgroundColor = "hsl(259, 100%, 65%)";
        btn.style.opcaity = "0.5";
        btn.style.cursor = "not-allowed";
    } else {
        btn.disabled = false;
        btn.style.backgroundColor = "hsl(259, 100%, 65%)";
        btn.style.cursor = "pointer";
    }
};

const inputYear = () => {
    let day = document.getElementById("day");
    let month = document.getElementById("month");
    let year = document.getElementById("year");
    let msgEmpty = document.querySelector(".msg-empty-year");
    let msgInvalid = document.querySelector(".msg-invalid-year");
    let msgInvalidDay = document.querySelector(".msg-invalid-day");
    let btn = document.getElementById("btn");

    if (year.value < 0) {
        year.value = Math.abs(year.value);
    } else {
        year.value = year.value;
    }

    if (year.value.length > 4) {
        year.value = year.value.slice(0, 4);
    } else {
        year.value = year.value;
    }

    if (year.value == "") {
        year.value = "";
        msgEmpty.style.display = "block";
        msgInvalid.style.display = "none";
        year.style.border = "1px solid hsl(0, 100%, 74%)";
    } else {
        year.value = year.value;
        msgEmpty.style.display = "none";
        year.style.border = "1px solid hsl(259, 100%, 65%)";
    }

    if (year.value > new Date().getFullYear()) {
        msgInvalid.style.display = "block";
        year.style.border = "1px solid hsl(0, 100%, 74%)";
    } else {
        year.value = year.value;
        msgInvalid.style.display = "none";
        year.style.border = "1px solid hsl(0, 0%, 86%)";
    }

    if (year.value.length == 4 && year.value < new Date().getFullYear()) {
        year.style.border = "1px solid hsl(0, 0%, 86%)";
    } else {
        year.style.border = "1px solid hsl(0, 100%, 74%)";
    }

    //checking date from all month
    const dateAllMonth = [
        31,
        (0 == year.value % 4 && 0 != year.value % 100) || 0 == year.value % 400
            ? 29
            : 28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31,
    ];
    const arrMonth = month.value.split("");
    let monthSpliced = 0;

    if (arrMonth[0] == 0) {
        monthSpliced = arrMonth.splice(1, 1);
    } else {
        monthSpliced = month.value;
    }

    if ((0 == year.value % 4 && 0 != year.value % 100) || 0 == year.value % 400) {
        if (monthSpliced == 2 && day.value > 29) {
            msgInvalidDay.style.display = "block";
            day.style.border = "1px solid hsl(0, 100%, 74%)";
        } else {
            if (day.value > dateAllMonth[monthSpliced - 1]) {
                msgInvalidDay.style.display = "block";
                day.style.border = "1px solid hsl(0, 100%, 74%)";
                month.style.border = "1px solid hsl(0, 100%, 74%)";
                year.style.border = "1px solid hsl(0, 100%, 74%)";
            } else if (day.value == "" && month.value == "" && year.value == "") {
                day.style.border = "1px solid hsl(0, 100%, 74%)";
                month.style.border = "1px solid hsl(0, 100%, 74%)";
                year.style.border = "1px solid hsl(0, 100%, 74%)";
            } else {
                msgInvalidDay.style.display = "none";
                day.style.border = "1px solid hsl(0, 0%, 86%)";
                month.style.border = "1px solid hsl(0, 0%, 86%)";
                year.style.border = "1px solid hsl(0, 0%, 86%)";
            }
        }
    } else {
        if (monthSpliced == 2 && day.value > 28) {
            msgInvalidDay.style.display = "block";
            day.style.border = "1px solid hsl(0, 100%, 74%)";
        } else {
            if (day.value > dateAllMonth[monthSpliced - 1]) {
                msgInvalidDay.style.display = "block";
                day.style.border = "1px solid hsl(0, 100%, 74%)";
                month.style.border = "1px solid hsl(0, 100%, 74%)";
                year.style.border = "1px solid hsl(0, 100%, 74%)";
            } else if (day.value == "" && month.value == "" && year.value == "") {
                day.style.border = "1px solid hsl(0, 100%, 74%)";
                month.style.border = "1px solid hsl(0, 100%, 74%)";
                year.style.border = "1px solid hsl(0, 100%, 74%)";
            } else {
                msgInvalidDay.style.display = "none";
                day.style.border = "1px solid hsl(0, 0%, 86%)";
                month.style.border = "1px solid hsl(0, 0%, 86%)";
                year.style.border = "1px solid hsl(0, 0%, 86%)";
            }
        }
    }

    if (
        day.value == "" ||
        month.value == "" ||
        year.value == "" ||
        day.value > 31 ||
        month.value > 12 ||
        year.value > new Date().getFullYear() ||
        day.value > dateAllMonth[monthSpliced - 1] ||
        day.value.length < 2 ||
        month.value.length < 2 ||
        year.value.length < 4
    ) {
        btn.disabled = true;
        btn.style.backgroundColor = "hsl(259, 100%, 65%)";
        btn.style.opcaity = "0.5";
        btn.style.cursor = "not-allowed";
    } else {
        btn.disabled = false;
        btn.style.backgroundColor = "hsl(259, 100%, 65%)";
        btn.style.cursor = "pointer";
    }
};

const calculateAge = () => {
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;

    let today = new Date();
    let birthDate = new Date(year, month - 1, day);

    let age = today.getFullYear() - birthDate.getFullYear();
    let monthAge = today.getMonth() - birthDate.getMonth();
    let dayAge = today.getDate() - birthDate.getDate();

    const newYear = document.createElement("h1");
    const newMonth = document.createElement("h1");
    const newDay = document.createElement("h1");
    document
        .querySelector(".output-data")
        .replaceChild(
            newYear,
            document.querySelector(".output-data h1:nth-child(1)")
        );
    document
        .querySelector(".output-data")
        .replaceChild(
            newMonth,
            document.querySelector(".output-data h1:nth-child(2)")
        );
    document
        .querySelector(".output-data")
        .replaceChild(
            newDay,
            document.querySelector(".output-data h1:nth-child(3)")
        );

    if (
        monthAge < 0 ||
        (monthAge === 0 && today.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    if (monthAge < 0) {
        monthAge += 12;
    }

    if (dayAge < 0) {
        dayAge += 30;
    }

    if (age > 1) {
        let i = 0;
        setInterval(() => {
            document.querySelector(".output-data h1:nth-child(1)").innerHTML =
                `<span class="number">${i < age ? i++ : age}</span>` + " years";
        }, 100);
    } else {
        let i = 0;
        setInterval(() => {
            document.querySelector(".output-data h1:nth-child(1)").innerHTML =
                `<span class="number">${i < age ? i++ : age}</span>` + " years";
        }, 100);
    }

    if (monthAge > 1) {
        let i = 0;
        setInterval(() => {
            document.querySelector(".output-data h1:nth-child(2)").innerHTML =
                `<span class="number">${i < monthAge ? i++ : monthAge}</span>` +
                " months";
        }, 100);
    } else {
        let i = 0;
        setInterval(() => {
            document.querySelector(".output-data h1:nth-child(2)").innerHTML =
                `<span class="number">${i < monthAge ? i++ : monthAge}</span>` +
                " month";
        }, 100);
    }

    if (dayAge > 1) {
        let i = 0;
        setInterval(() => {
            document.querySelector(".output-data h1:nth-child(3)").innerHTML =
                `<span class="number">${i < dayAge ? i++ : dayAge}</span>` + " days";
        }, 100);
    } else {
        let i = 0;
        setInterval(() => {
            document.querySelector(".output-data h1:nth-child(3)").innerHTML =
                `<span class="number">${i < dayAge ? i++ : dayAge}</span>` + " days";
        }, 100);
    }
};
