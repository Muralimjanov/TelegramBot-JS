// 6721711444:AAF78_Ie6b3OMNwm1VooycoDHw7rajyjxa4
// 1343951445
// https://api.telegram.org/bot6721711444:AAF78_Ie6b3OMNwm1VooycoDHw7rajyjxa4/getUpdates

let TOKEN = "6721711444:AAF78_Ie6b3OMNwm1VooycoDHw7rajyjxa4";
let CHAT_ID = "1343951445";
let URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
let URL_API2 = `https://api.telegram.org/bot${TOKEN}/sendDocument`;

let success = document.getElementById("success");

document.getElementById("tg").addEventListener("submit", function (e) {
    e.preventDefault()
    let message = `<b>Заявка с сайта!</b>\n`
    message += `<b>Отправител:</b> ${this.name.value}\n`
    message += `<b>Номер:</b> ${this.number.value}\n`
    message += `<b>Почта:</b> ${this.email.value}`
    console.log("message>>>", message)

    axios.post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message
    }).then((res) => {
        this.name.value = ""
        this.number.value = ""
        this.email.value = ""
        success.innerHTML = "Сообшения отпраленно!"
        success.style.display = "block"
    }).catch((err) => {
        console.log(err)
    }).finally(() => console.log("successfully"))

    e.preventDefault();
    const formData = new FormData();
    formData.append("chat_id", CHAT_ID);
    formData.append("document", this.document.files[0]);
    axios
        .post(URL_API2, formData)
        .then((res) => {
            this.document.value = "";
            success.innerHTML = "Сообшения отпраленно!";
            success.style.display = "block";
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => console.log("successfully"));
});