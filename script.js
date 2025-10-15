document.getElementById("copyYear").textContent = new Date().getFullYear();

function calculateBMR(weight, height, age) {
  return Math.round(10 * weight + 6.25 * height - 5 * age + 5);
}

function generatePlan() {
  const name = document.getElementById("name").value.trim() || "Friend";
  const age = Number(document.getElementById("age").value) || 30;
  const height = Number(document.getElementById("height").value) || 170;
  const weight = Number(document.getElementById("weight").value) || 70;
  const goal = document.getElementById("goal").value;

  document.getElementById("userNamePreview").textContent = name.split(" ")[0];

  const bmr = calculateBMR(weight, height, age);
  let calories = bmr * 1.4;

  if (goal === "lose") calories -= 500;
  if (goal === "gain") calories += 350;
  if (goal === "manage") calories -= 300;

  const workouts = goal === "gain" ? "4–5 sessions" : "3–4 sessions";
  const mealsPerWeek = goal === "gain" ? 14 : 10;

  const output = `
Hi ${name}!
Estimated daily calories: ${calories} kcal.
Recommended workouts: ${workouts} per week.
Meals/week: ${mealsPerWeek}.
`;

  const planOutput = document.getElementById("planOutput");
  planOutput.hidden = false;
  planOutput.textContent = output;

  document.getElementById("calories").textContent = `${calories} kcal`;
  document.getElementById("workouts").textContent = workouts;
  document.getElementById("mealsCount").textContent = `${mealsPerWeek} meals`;
}

document.getElementById("generateBtn").addEventListener("click", generatePlan);
document.getElementById("demoBtn").addEventListener("click", () => {
  document.getElementById("name").value = "Verri Pappa";
  document.getElementById("age").value = 24;
  document.getElementById("height").value = 172;
  document.getElementById("weight").value = 68;
  document.getElementById("goal").value = "lose";
  generatePlan();
});

function selectPlan(name, price) {
  alert(`Selected plan: ${name}\nPrice: ₹${price}/month`);
}

function subscribe() {
  const email = document.getElementById("email").value.trim();
  const msg = document.getElementById("signupMsg");

  if (!/\S+@\S+\.\S+/.test(email)) {
    msg.textContent = "Please enter a valid email address.";
    return;
  }

  msg.textContent = `Thanks! A confirmation has been sent to ${email}.`;
}

function demoFill() {
  document.getElementById("email").value = "trial@fitmate.example";
  document.getElementById("signupMsg").textContent = "Demo email filled — click Start Free Trial.";
}

document.getElementById("email").addEventListener("keydown", (e) => {
  if (e.key === "Enter") subscribe();
});
