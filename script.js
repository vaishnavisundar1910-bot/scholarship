const scholarships = [
  {
    name: "TN Scholarship",
    income_limit: 200000,
    state: "Tamil Nadu"
  },
  {
    name: "Central Scholarship",
    income_limit: 500000,
    state: "All"
  }
];

function check() {
  const income = document.getElementById("income").value;
  const state = document.getElementById("state").value;

  let eligible = "";
  let others = "";

  scholarships.forEach(s => {
    if (income <= s.income_limit && (s.state === state || s.state === "All")) {
      eligible += "<p>✅ " + s.name + "</p>";
    } else {
      others += "<p>❌ " + s.name + "</p>";
    }
  });

  document.getElementById("eligible").innerHTML = eligible;
  document.getElementById("others").innerHTML = others;
}
