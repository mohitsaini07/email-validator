let results = {
  tag: "",
  free: true,
  role: false,
  user: "mohitbhatwara82",
  email: "mohitbhatwara82@gmail.com",
  score: 0.64,
  state: "deliverable",
  domain: "gmail.com",
  reason: "valid_mailbox",
  mx_found: true,
  catch_all: null,
  disposable: false,
  smtp_check: true,
  did_you_mean: "",
  format_valid: true,
};

let validateBtn = document.querySelector("#validate-btn");

validateBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  let key = "ema_live_td2zLIlEUa2RJUTlR7mnPgVRLwG20mhxa789B4G1";
  let email = document.getElementById("email").value;
  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
  let res = await fetch(url);
  let result = await res.json();

  let str = "";

  for (key of Object.keys(result)) {
    if (!result[key] == "" && result[key] !== 0)
      str = str + `<div>${key}: ${result[key]}</div>`;
  }

  let resultContainer = document.querySelector("#result-container");
  resultContainer.innerHTML = str;
});
