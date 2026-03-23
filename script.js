const nutrientData = [
  {
    title: "Vitamins",
    tag: "Core Micronutrients",
    color: "#ca5f34",
    uses: "Support immunity, skin, eyes, blood, nerves, and energy release from food.",
    functions: "Vitamin A helps vision, B vitamins support metabolism and nerves, vitamin C supports healing, vitamin D helps calcium absorption, vitamin E protects cells, and vitamin K supports clotting.",
    sources: "Citrus fruits, carrots, spinach, eggs, dairy, fish, nuts, seeds, legumes, and whole grains.",
    excess: "Too much of some vitamins, especially A, D, E, and K supplements, can cause toxicity, nausea, liver strain, or nerve problems.",
    deficiency: "Fatigue, weak immunity, bleeding gums, poor vision at night, bone weakness, slow wound healing, numbness, or anemia."
  },
  {
    title: "Minerals",
    tag: "Body Builders",
    color: "#2f6b4f",
    uses: "Maintain bones, muscles, hydration, nerve signaling, and oxygen transport.",
    functions: "Calcium and phosphorus support bones, iron carries oxygen, zinc supports healing, magnesium supports muscles, and potassium helps fluid balance and heart rhythm.",
    sources: "Milk, yogurt, leafy greens, beans, lentils, meat, seafood, bananas, nuts, seeds, and whole grains.",
    excess: "Excess sodium may raise blood pressure, excess iron may damage organs, and too much supplementation can upset mineral balance.",
    deficiency: "Muscle cramps, weakness, brittle bones, dizziness, low immunity, hair loss, pale skin, or irregular heartbeat."
  },
  {
    title: "Amino Acids",
    tag: "Protein Components",
    color: "#845ec2",
    uses: "Build and repair tissues, create enzymes and hormones, and support recovery.",
    functions: "Essential amino acids are needed for muscle growth, neurotransmitters, immune proteins, and cell repair.",
    sources: "Eggs, fish, chicken, dairy, soy, tofu, lentils, beans, quinoa, and mixed plant proteins.",
    excess: "Very high protein supplement intake may strain digestion and may be unsuitable for some kidney conditions.",
    deficiency: "Muscle loss, slow recovery, weakness, low concentration, poor healing, or reduced immunity."
  },
  {
    title: "Fibre",
    tag: "Digestive Support",
    color: "#d79a27",
    uses: "Improves digestion, supports gut bacteria, helps cholesterol control, and increases fullness.",
    functions: "Soluble fibre helps manage blood sugar and cholesterol, while insoluble fibre supports bowel movement and digestive regularity.",
    sources: "Oats, fruits, vegetables, beans, lentils, chia seeds, flax seeds, and whole grains.",
    excess: "Too much fibre too fast can cause bloating, gas, cramps, and reduced comfort if water intake is low.",
    deficiency: "Constipation, hunger soon after meals, poor gut health, and less stable blood sugar."
  },
  {
    title: "Protein",
    tag: "Repair and Growth",
    color: "#c44569",
    uses: "Builds muscles, skin, hormones, enzymes, and immune cells.",
    functions: "Supports tissue repair, satiety, muscle maintenance, recovery from exercise, and body structure.",
    sources: "Eggs, chicken, fish, paneer, yogurt, tofu, beans, lentils, milk, nuts, and seeds.",
    excess: "Too much protein from poor-quality diets may crowd out fibre-rich foods and can stress hydration needs.",
    deficiency: "Muscle wasting, weakness, swelling, hair thinning, slow healing, and frequent illness."
  },
  {
    title: "Good Fats",
    tag: "Healthy Fats",
    color: "#1d7874",
    uses: "Support hormones, brain function, cell membranes, and absorption of fat-soluble vitamins.",
    functions: "Unsaturated fats, including omega-3 and omega-6 fats, help heart health, inflammation balance, and long-term energy.",
    sources: "Avocado, olive oil, nuts, seeds, peanut butter, fatty fish, and flax seeds.",
    excess: "Even healthy fats are calorie-dense, so too much can increase total calorie intake and weight gain.",
    deficiency: "Dry skin, low energy, trouble absorbing vitamins A, D, E, and K, and poor hormonal support."
  },
  {
    title: "Bad Fats",
    tag: "Limit Intake",
    color: "#6f1d1b",
    uses: "Saturated fat is needed only in small amounts, while trans fat is best avoided.",
    functions: "These fats mainly provide energy, but excess intake can affect blood lipid balance.",
    sources: "Deep-fried food, some bakery items, processed snacks, fatty processed meat, and hydrogenated oils.",
    excess: "Higher LDL cholesterol, higher heart disease risk, inflammation, weight gain, and poor metabolic health.",
    deficiency: "There is no special need to seek trans fats. Very low total fat intake overall, though, may affect hormones and vitamin absorption."
  }
];

const vitaminDetails = [
  {
    title: "Vitamin A",
    functions: "Supports vision, skin health, immune defense, and normal growth.",
    sources: "Carrot, sweet potato, spinach, egg yolk, liver, dairy.",
    excess: "Headache, liver strain, nausea, and toxicity from high supplement intake.",
    deficiency: "Night blindness, dry eyes, rough skin, lower immunity."
  },
  {
    title: "Vitamin B1 (Thiamine)",
    functions: "Helps convert food into energy and supports nerves and muscles.",
    sources: "Whole grains, legumes, seeds, pork, fortified cereals.",
    excess: "Excess from food is uncommon.",
    deficiency: "Fatigue, nerve issues, poor appetite, weakness."
  },
  {
    title: "Vitamin B2 (Riboflavin)",
    functions: "Supports energy production, skin, and eye health.",
    sources: "Milk, yogurt, eggs, almonds, mushrooms, lean meats.",
    excess: "Usually low risk from food.",
    deficiency: "Cracked lips, sore throat, mouth irritation, tiredness."
  },
  {
    title: "Vitamin B3 (Niacin)",
    functions: "Supports metabolism, skin, digestion, and nerves.",
    sources: "Chicken, tuna, peanuts, whole grains, mushrooms.",
    excess: "Flushing, itching, liver stress at high supplement doses.",
    deficiency: "Dermatitis, diarrhea, confusion, weakness."
  },
  {
    title: "Vitamin B6",
    functions: "Supports amino acid metabolism, brain health, and red blood cells.",
    sources: "Banana, fish, poultry, potatoes, chickpeas.",
    excess: "Very high supplements may cause nerve symptoms.",
    deficiency: "Anemia, skin rash, confusion, mouth sores."
  },
  {
    title: "Vitamin B9 (Folate)",
    functions: "Needed for DNA formation, cell division, and pregnancy health.",
    sources: "Leafy greens, lentils, beans, citrus, fortified grains.",
    excess: "Too much folic acid may hide B12 deficiency.",
    deficiency: "Anemia, fatigue, poor growth, mouth ulcers."
  },
  {
    title: "Vitamin B12",
    functions: "Supports red blood cells, nerves, and DNA production.",
    sources: "Eggs, dairy, fish, meat, fortified plant foods.",
    excess: "Food excess is uncommon.",
    deficiency: "Numbness, anemia, fatigue, memory problems."
  },
  {
    title: "Vitamin C",
    functions: "Supports collagen, wound healing, immunity, and iron absorption.",
    sources: "Orange, lemon, guava, kiwi, capsicum, tomato.",
    excess: "Stomach upset or diarrhea from large doses.",
    deficiency: "Bleeding gums, poor healing, fatigue, weak immunity."
  },
  {
    title: "Vitamin D",
    functions: "Helps calcium absorption, bone strength, and immune support.",
    sources: "Sunlight, egg yolk, fatty fish, fortified milk.",
    excess: "Too much supplement intake may raise blood calcium.",
    deficiency: "Bone pain, weak bones, low mood, muscle weakness."
  },
  {
    title: "Vitamin E",
    functions: "Acts as an antioxidant and protects cell membranes.",
    sources: "Nuts, seeds, vegetable oils, spinach, avocado.",
    excess: "High doses may increase bleeding risk.",
    deficiency: "Muscle weakness, nerve issues, poor coordination."
  },
  {
    title: "Vitamin K",
    functions: "Supports blood clotting and bone metabolism.",
    sources: "Leafy greens, broccoli, cabbage, fermented foods.",
    excess: "Food excess is rare; supplements may interact with medicines.",
    deficiency: "Easy bruising, bleeding, slower clotting."
  }
];

const mineralDetails = [
  {
    title: "Calcium",
    functions: "Builds bones and teeth and supports muscle contraction.",
    sources: "Milk, yogurt, paneer, sesame, tofu, greens.",
    excess: "Kidney stones, constipation, reduced absorption of other minerals.",
    deficiency: "Weak bones, muscle cramps, brittle nails."
  },
  {
    title: "Iron",
    functions: "Carries oxygen in red blood cells and supports energy.",
    sources: "Red meat, spinach, lentils, beans, jaggery, fortified foods.",
    excess: "Organ damage and constipation from too much intake.",
    deficiency: "Anemia, fatigue, pale skin, dizziness, hair fall."
  },
  {
    title: "Magnesium",
    functions: "Helps muscle relaxation, nerve signals, and energy use.",
    sources: "Nuts, seeds, legumes, dark chocolate, whole grains.",
    excess: "Diarrhea from high supplement doses.",
    deficiency: "Muscle twitching, cramps, fatigue, sleep trouble."
  },
  {
    title: "Potassium",
    functions: "Maintains fluid balance, muscles, and heart rhythm.",
    sources: "Banana, coconut water, potato, beans, yogurt, spinach.",
    excess: "Can disturb heart rhythm, especially with kidney problems.",
    deficiency: "Weakness, cramps, constipation, heartbeat changes."
  },
  {
    title: "Sodium",
    functions: "Supports fluid balance and nerve transmission.",
    sources: "Salt, packaged foods, pickles, sauces, bread.",
    excess: "High blood pressure, water retention, heart strain.",
    deficiency: "Nausea, confusion, headache, cramps."
  },
  {
    title: "Zinc",
    functions: "Supports immunity, skin repair, growth, and enzymes.",
    sources: "Seafood, meat, dairy, beans, pumpkin seeds.",
    excess: "Nausea and reduced copper absorption.",
    deficiency: "Poor healing, low immunity, taste changes, hair loss."
  },
  {
    title: "Phosphorus",
    functions: "Works with calcium in bones and helps energy molecules.",
    sources: "Dairy, fish, meat, lentils, nuts, seeds.",
    excess: "May affect calcium balance in some people.",
    deficiency: "Bone pain, weakness, poor appetite."
  },
  {
    title: "Iodine",
    functions: "Supports thyroid hormone production.",
    sources: "Iodized salt, seafood, dairy, eggs.",
    excess: "Too much may also affect the thyroid.",
    deficiency: "Goiter, tiredness, weight changes, slow metabolism."
  },
  {
    title: "Selenium",
    functions: "Acts as an antioxidant and supports thyroid function.",
    sources: "Eggs, fish, meat, whole grains, brazil nuts.",
    excess: "Hair loss, nail brittleness, stomach upset.",
    deficiency: "Weak immunity, thyroid issues, fatigue."
  }
];

const aminoDetails = [
  {
    title: "Histidine",
    functions: "Supports growth, tissue repair, and histamine production.",
    sources: "Meat, fish, dairy, soy, beans, seeds.",
    excess: "Too much from supplements may upset amino acid balance.",
    deficiency: "Poor growth, low recovery, fatigue."
  },
  {
    title: "Isoleucine",
    functions: "Helps muscle metabolism, energy, and recovery.",
    sources: "Eggs, chicken, fish, soy, lentils, nuts.",
    excess: "Large supplement use may disturb digestion.",
    deficiency: "Weakness, low stamina, muscle loss."
  },
  {
    title: "Leucine",
    functions: "Triggers muscle protein synthesis and repair.",
    sources: "Whey, eggs, meat, fish, soy, legumes.",
    excess: "Very high intake from supplements may be unnecessary.",
    deficiency: "Poor muscle recovery and low strength."
  },
  {
    title: "Lysine",
    functions: "Supports collagen, immunity, and calcium use.",
    sources: "Meat, fish, dairy, beans, lentils, quinoa.",
    excess: "High supplement amounts may cause stomach upset.",
    deficiency: "Poor appetite, low immunity, slow growth."
  },
  {
    title: "Methionine",
    functions: "Supports detox pathways, liver function, and cell growth.",
    sources: "Eggs, fish, sesame, meat, dairy, brazil nuts.",
    excess: "High intake may not suit some health conditions.",
    deficiency: "Weakness, fatty liver risk, poor protein synthesis."
  },
  {
    title: "Phenylalanine",
    functions: "Used to make tyrosine and neurotransmitters.",
    sources: "Milk, eggs, soy, meat, fish, peanuts.",
    excess: "People with PKU must control it carefully.",
    deficiency: "Low mood, poor focus, weakness."
  },
  {
    title: "Threonine",
    functions: "Supports connective tissue, immunity, and gut lining.",
    sources: "Cottage cheese, poultry, fish, lentils, seeds.",
    excess: "Usually low concern from food.",
    deficiency: "Digestive discomfort, low immunity, poor recovery."
  },
  {
    title: "Tryptophan",
    functions: "Helps make serotonin, melatonin, and niacin.",
    sources: "Milk, turkey, eggs, pumpkin seeds, oats.",
    excess: "Supplement excess may cause drowsiness or side effects.",
    deficiency: "Low mood, poor sleep, irritability."
  },
  {
    title: "Valine",
    functions: "Supports muscle repair, energy, and nitrogen balance.",
    sources: "Dairy, mushrooms, soy, peanuts, beans, meat.",
    excess: "Too much supplement intake may be unnecessary.",
    deficiency: "Poor coordination, weakness, slower recovery."
  }
];

const hormoneDetails = [
  {
    title: "Insulin",
    functions: "Moves glucose from the blood into cells and helps store energy.",
    sources: "Supported by balanced meals, fibre-rich foods, exercise, sleep, and healthy weight management.",
    excess: "High insulin may be linked with frequent hunger, fat gain, sugar cravings, and insulin resistance.",
    deficiency: "Very low insulin can cause high blood sugar, thirst, fatigue, and frequent urination."
  },
  {
    title: "Thyroid Hormones (T3 and T4)",
    functions: "Control metabolism, temperature, energy use, and growth.",
    sources: "Supported by iodine, selenium, zinc, protein, seafood, eggs, dairy, and iodized salt.",
    excess: "High levels may cause fast heartbeat, anxiety, sweating, weight loss, and shakiness.",
    deficiency: "Low levels may cause fatigue, weight gain, constipation, dry skin, and feeling cold."
  },
  {
    title: "Cortisol",
    functions: "Helps the body respond to stress and supports blood sugar and energy regulation.",
    sources: "Supported by sleep, stress management, regular meals, exercise, and enough magnesium-rich foods.",
    excess: "High cortisol may cause belly fat gain, poor sleep, anxiety, high blood sugar, and muscle breakdown.",
    deficiency: "Low cortisol may cause dizziness, weakness, weight loss, low blood pressure, and tiredness."
  },
  {
    title: "Estrogen",
    functions: "Supports reproductive health, bones, skin, and mood regulation.",
    sources: "Supported by healthy fats, seeds, soy foods, good sleep, and overall nutrient intake.",
    excess: "High estrogen may lead to bloating, breast tenderness, mood swings, and heavy periods.",
    deficiency: "Low estrogen may lead to hot flashes, low mood, bone loss, and irregular periods."
  },
  {
    title: "Progesterone",
    functions: "Supports menstrual balance, pregnancy, and calming effects in the body.",
    sources: "Supported by adequate calories, vitamin B6, magnesium, zinc, and overall hormonal health.",
    excess: "Higher levels may cause sleepiness, dizziness, and bloating in some cases.",
    deficiency: "Low levels may lead to irregular cycles, spotting, low mood, or trouble maintaining pregnancy."
  },
  {
    title: "Testosterone",
    functions: "Supports muscle mass, strength, bone health, libido, and red blood cell production.",
    sources: "Supported by protein, zinc, vitamin D, resistance training, sleep, eggs, dairy, seafood, and nuts.",
    excess: "High levels may cause acne, aggression, hair changes, and menstrual disruption in women.",
    deficiency: "Low levels may cause low libido, fatigue, muscle loss, and reduced motivation."
  },
  {
    title: "Leptin",
    functions: "Signals fullness and helps regulate appetite and body weight.",
    sources: "Supported by enough sleep, whole foods, fibre, protein, and stable eating patterns.",
    excess: "High leptin with resistance may be linked to overeating and poor hunger control.",
    deficiency: "Low leptin may cause strong hunger, low energy, and trouble regulating appetite."
  },
  {
    title: "Ghrelin",
    functions: "Signals hunger and helps prepare the body to eat.",
    sources: "Managed by regular meals, enough protein, sleep, and avoiding long chaotic eating patterns.",
    excess: "High ghrelin may cause stronger hunger and overeating.",
    deficiency: "Low ghrelin may reduce appetite and interest in food."
  },
  {
    title: "Growth Hormone",
    functions: "Supports tissue repair, growth, fat metabolism, and muscle development.",
    sources: "Supported by deep sleep, exercise, enough protein, and good recovery.",
    excess: "High levels may cause joint pain, swelling, and abnormal growth changes.",
    deficiency: "Low levels may cause poor recovery, low muscle mass, and increased fat gain."
  }
];

const calorieChartData = [
  { name: "Egg (1 piece)", calories: 72 },
  { name: "Banana (1 medium)", calories: 105 },
  { name: "Rice (100 g cooked)", calories: 130 },
  { name: "Chicken breast (100 g)", calories: 165 },
  { name: "Apple (1 medium)", calories: 95 },
  { name: "Milk (1 cup)", calories: 103 },
  { name: "Bread (1 slice)", calories: 80 },
  { name: "Almonds (28 g)", calories: 164 }
];

const proteinChartData = [
  { name: "Chicken breast (100 g)", value: "31 g protein" },
  { name: "Eggs (2 pieces)", value: "12 g protein" },
  { name: "Paneer (100 g)", value: "18 g protein" },
  { name: "Greek yogurt (100 g)", value: "10 g protein" },
  { name: "Lentils (1 cup cooked)", value: "18 g protein" },
  { name: "Tofu (100 g)", value: "8 g protein" },
  { name: "Milk (1 cup)", value: "8 g protein" },
  { name: "Peanut butter (2 tbsp)", value: "8 g protein" }
];

const fibreChartData = [
  { name: "Oats (1 cup cooked)", value: "4 g fibre" },
  { name: "Apple (1 medium)", value: "4.4 g fibre" },
  { name: "Banana (1 medium)", value: "3.1 g fibre" },
  { name: "Lentils (1 cup cooked)", value: "15.6 g fibre" },
  { name: "Chia seeds (2 tbsp)", value: "10 g fibre" },
  { name: "Broccoli (100 g)", value: "2.6 g fibre" },
  { name: "Almonds (28 g)", value: "3.5 g fibre" },
  { name: "Pear (1 medium)", value: "5.5 g fibre" }
];

const fallbackCalories = {
  egg: { per: "piece", calories: 72, protein: 6.3, fibre: 0 },
  eggs: { per: "piece", calories: 72, protein: 6.3, fibre: 0 },
  banana: { per: "piece", calories: 105, protein: 1.3, fibre: 3.1 },
  apple: { per: "piece", calories: 95, protein: 0.5, fibre: 4.4 },
  rice: { per: "g", calories: 1.3, protein: 0.027, fibre: 0.004 },
  chicken: { per: "g", calories: 1.65, protein: 0.31, fibre: 0 },
  "chicken breast": { per: "g", calories: 1.65, protein: 0.31, fibre: 0 },
  milk: { per: "ml", calories: 0.64, protein: 0.033, fibre: 0 },
  bread: { per: "piece", calories: 80, protein: 3, fibre: 1 },
  oats: { per: "g", calories: 3.89, protein: 0.169, fibre: 0.106 },
  potato: { per: "g", calories: 0.77, protein: 0.02, fibre: 0.021 },
  paneer: { per: "g", calories: 2.65, protein: 0.18, fibre: 0 },
  yogurt: { per: "g", calories: 0.61, protein: 0.035, fibre: 0 },
  curd: { per: "g", calories: 0.61, protein: 0.035, fibre: 0 },
  lentils: { per: "g", calories: 1.16, protein: 0.09, fibre: 0.079 },
  dal: { per: "g", calories: 1.16, protein: 0.09, fibre: 0.079 },
  avocado: { per: "g", calories: 1.6, protein: 0.02, fibre: 0.067 },
  almonds: { per: "g", calories: 5.79, protein: 0.212, fibre: 0.125 },
  broccoli: { per: "g", calories: 0.34, protein: 0.028, fibre: 0.026 },
  chickpeas: { per: "g", calories: 1.64, protein: 0.089, fibre: 0.076 }
};

const unitToGrams = {
  g: 1,
  ml: 1,
  tbsp: 15,
  cup: 240
};

const addedItems = [];

const activityPresets = {
  sedentary: { label: "Mostly sitting", factor: 28 },
  light: { label: "Lightly active", factor: 31 },
  moderate: { label: "Moderately active", factor: 34 },
  active: { label: "Very active", factor: 37 }
};

const goalPresets = {
  "weight-loss": {
    label: "Weight loss",
    caloriesDelta: -450,
    proteinFactor: 1.6,
    summary: "A gentle calorie deficit plus steady protein is usually easier to sustain than a crash cut."
  },
  "muscle-gain": {
    label: "Muscle gain",
    caloriesDelta: 250,
    proteinFactor: 2.0,
    summary: "This plan uses the higher 2.0 g/kg protein target and a small calorie surplus to support muscle growth."
  },
  "weight-gain": {
    label: "Weight gain",
    caloriesDelta: 400,
    proteinFactor: 1.8,
    summary: "This plan raises calories above maintenance while keeping protein high enough to support quality weight gain."
  }
};

const nutrientGrid = document.getElementById("nutrient-grid");
const vitaminGrid = document.getElementById("vitamin-grid");
const mineralGrid = document.getElementById("mineral-grid");
const aminoGrid = document.getElementById("amino-grid");
const hormoneGrid = document.getElementById("hormone-grid");
const nutrientFilter = document.getElementById("nutrient-filter");
const filterSections = document.querySelectorAll(".filter-section");
const calorieChart = document.getElementById("calorie-chart");
const proteinChart = document.getElementById("protein-chart");
const fibreChart = document.getElementById("fibre-chart");
const bmiForm = document.getElementById("bmi-form");
const bmiResult = document.getElementById("bmi-result");
const heightUnit = document.getElementById("height-unit");
const heightCmGroup = document.getElementById("height-cm-group");
const heightFtGroup = document.getElementById("height-ft-group");
const ingredientForm = document.getElementById("ingredient-form");
const ingredientNameInput = document.getElementById("ingredient-name");
const ingredientQuantityInput = document.getElementById("ingredient-quantity");
const ingredientUnitInput = document.getElementById("ingredient-unit");
const lookupStatus = document.getElementById("lookup-status");
const addedItemsContainer = document.getElementById("added-items");
const totalCalories = document.getElementById("total-calories");
const totalProtein = document.getElementById("total-protein");
const totalFibre = document.getElementById("total-fibre");
const clearItemsButton = document.getElementById("clear-items");
const dietForm = document.getElementById("diet-form");
const dietWeightInput = document.getElementById("diet-weight");
const dietActivityInput = document.getElementById("diet-activity");
const dietResult = document.getElementById("diet-result");
const themeToggle = document.getElementById("theme-toggle");
const themeToggleText = document.getElementById("theme-toggle-text");
const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");
const sideMenu = document.getElementById("side-menu");
const menuLinks = document.querySelectorAll(".menu-link");
const backToTopButton = document.getElementById("back-to-top");
const liveNutritionCache = new Map();
const LIVE_LOOKUP_TIMEOUT_MS = 4500;

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  themeToggleText.textContent = theme === "dark" ? "Light mode" : "Dark mode";
}

function initializeTheme() {
  const savedTheme = localStorage.getItem("nutriguide-theme");
  const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  applyTheme(savedTheme || preferredTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
  const nextTheme = currentTheme === "dark" ? "light" : "dark";
  localStorage.setItem("nutriguide-theme", nextTheme);
  applyTheme(nextTheme);
}

function renderNutrients() {
  nutrientGrid.innerHTML = nutrientData.map((item) => `
    <article class="nutrient-card">
      <div class="nutrient-card-header">
        <div>
          <h3>${item.title}</h3>
          <p class="muted">${item.uses}</p>
        </div>
        <span class="nutrient-tag" style="background:${item.color}">${item.tag}</span>
      </div>
      <ul>
        <li><strong>Functions:</strong> ${item.functions}</li>
        <li><strong>Sources:</strong> ${item.sources}</li>
        <li><strong>Excess can cause:</strong> ${item.excess}</li>
        <li><strong>Low levels may cause:</strong> ${item.deficiency}</li>
      </ul>
    </article>
  `).join("");
}

function renderCalorieChart() {
  calorieChart.innerHTML = calorieChartData.map((item) => `
    <div class="chart-item">
      <span>${item.name}</span>
      <strong>${item.calories} kcal</strong>
    </div>
  `).join("");
}

function renderDetailGrid(target, items) {
  target.innerHTML = items.map((item) => `
    <article class="detail-card">
      <h3>${item.title}</h3>
      <ul>
        <li><strong>Functions:</strong> ${item.functions}</li>
        <li><strong>Sources:</strong> ${item.sources}</li>
        <li><strong>Excess can cause:</strong> ${item.excess}</li>
        <li><strong>Low levels may cause:</strong> ${item.deficiency}</li>
      </ul>
    </article>
  `).join("");
}

function renderMacroChart(target, items) {
  target.innerHTML = items.map((item) => `
    <div class="chart-item">
      <span>${item.name}</span>
      <strong>${item.value}</strong>
    </div>
  `).join("");
}

function getBmiCategory(bmi) {
  if (bmi < 18.5) return { label: "Underweight", advice: "You may need more balanced calories and protein support." };
  if (bmi < 25) return { label: "Healthy weight", advice: "Your BMI is in the general healthy range." };
  if (bmi < 30) return { label: "Overweight", advice: "A modest calorie deficit and activity plan may help." };
  return { label: "Obesity range", advice: "Consider a structured nutrition and activity plan with professional support." };
}

function handleBmiSubmit(event) {
  event.preventDefault();
  const weight = Number(document.getElementById("weight").value);
  const selectedHeightUnit = heightUnit.value;
  let height = 0;

  if (selectedHeightUnit === "cm") {
    height = Number(document.getElementById("height").value);
  } else {
    const feet = Number(document.getElementById("height-feet").value);
    const inches = Number(document.getElementById("height-inches").value);
    height = (feet * 30.48) + (inches * 2.54);
  }

  if (!height || !weight) {
    bmiResult.innerHTML = "<h3>Your result</h3><p>Please enter valid height and weight values.</p>";
    return;
  }

  const bmi = weight / ((height / 100) ** 2);
  const category = getBmiCategory(bmi);

  bmiResult.innerHTML = `
    <h3>Your result</h3>
    <p><strong>BMI:</strong> ${bmi.toFixed(1)}</p>
    <p><strong>Status:</strong> ${category.label}</p>
    <p>${category.advice}</p>
  `;
}

function normalizeIngredientName(value) {
  return value.trim().toLowerCase();
}

function convertToBaseQuantity(quantity, unit) {
  if (unit === "piece") return quantity;
  return quantity * (unitToGrams[unit] || 1);
}

function estimateFromFallback(name, quantity, unit) {
  const item = fallbackCalories[name];
  if (!item) return null;

  let calories = 0;
  let protein = 0;
  let fibre = 0;
  if (item.per === "piece" && unit === "piece") {
    calories = quantity * item.calories;
    protein = quantity * item.protein;
    fibre = quantity * item.fibre;
  } else if (item.per === "g") {
    const baseQuantity = convertToBaseQuantity(quantity, unit);
    calories = baseQuantity * item.calories;
    protein = baseQuantity * item.protein;
    fibre = baseQuantity * item.fibre;
  } else if (item.per === "ml") {
    const baseQuantity = convertToBaseQuantity(quantity, unit);
    calories = baseQuantity * item.calories;
    protein = baseQuantity * item.protein;
    fibre = baseQuantity * item.fibre;
  } else if (item.per === unit) {
    calories = quantity * item.calories;
    protein = quantity * item.protein;
    fibre = quantity * item.fibre;
  } else {
    return null;
  }

  return {
    source: "Local reference values",
    calories,
    protein,
    fibre,
    label: `${name} (${quantity} ${unit})`
  };
}

async function fetchCaloriesOnline(name, quantity, unit) {
  let nutritionPer100g = liveNutritionCache.get(name);

  if (!nutritionPer100g) {
    const searchUrl = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(name)}&search_simple=1&action=process&json=1&page_size=1`;
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), LIVE_LOOKUP_TIMEOUT_MS);

    let response;
    try {
      response = await fetch(searchUrl, { signal: controller.signal });
    } finally {
      window.clearTimeout(timeoutId);
    }

    if (!response.ok) {
      throw new Error("Online search failed.");
    }

    const data = await response.json();
    const product = data.products && data.products[0];
    const kcalPer100g = Number(product?.nutriments?.["energy-kcal_100g"] || 0);
    const proteinPer100g = Number(product?.nutriments?.proteins_100g || 0);
    const fibrePer100g = Number(product?.nutriments?.fiber_100g || 0);

    if (!kcalPer100g) {
      throw new Error("No calorie data found online.");
    }

    nutritionPer100g = {
      kcalPer100g,
      proteinPer100g,
      fibrePer100g
    };
    liveNutritionCache.set(name, nutritionPer100g);
  }

  const baseQuantity = unit === "piece" ? quantity * 50 : convertToBaseQuantity(quantity, unit);
  const calories = (nutritionPer100g.kcalPer100g / 100) * baseQuantity;
  const protein = (nutritionPer100g.proteinPer100g / 100) * baseQuantity;
  const fibre = (nutritionPer100g.fibrePer100g / 100) * baseQuantity;

  return {
    source: "Open Food Facts live search",
    calories,
    protein,
    fibre,
    label: `${name} (${quantity} ${unit})`
  };
}

function renderAddedItems() {
  if (!addedItems.length) {
    addedItemsContainer.innerHTML = '<div class="empty-state">Add ingredients to build your calorie total.</div>';
    totalCalories.textContent = "0 kcal";
    totalProtein.textContent = "0 g";
    totalFibre.textContent = "0 g";
    return;
  }

  addedItemsContainer.innerHTML = addedItems.map((item, index) => `
    <div class="added-item">
      <div>
        <strong>${item.label}</strong>
        <div class="added-item-meta">${item.source}</div>
        <div class="added-item-meta">Protein: ${item.protein.toFixed(1)} g | Fibre: ${item.fibre.toFixed(1)} g</div>
      </div>
      <div>
        <strong>${item.calories.toFixed(1)} kcal</strong>
        <button class="button secondary button-small remove-item" data-index="${index}" type="button">Remove</button>
      </div>
    </div>
  `).join("");

  const total = addedItems.reduce((sum, item) => sum + item.calories, 0);
  const proteinTotal = addedItems.reduce((sum, item) => sum + item.protein, 0);
  const fibreTotal = addedItems.reduce((sum, item) => sum + item.fibre, 0);
  totalCalories.textContent = `${total.toFixed(1)} kcal`;
  totalProtein.textContent = `${proteinTotal.toFixed(1)} g`;
  totalFibre.textContent = `${fibreTotal.toFixed(1)} g`;
}

async function handleIngredientSubmit(event) {
  event.preventDefault();

  const ingredient = normalizeIngredientName(ingredientNameInput.value);
  const quantity = Number(ingredientQuantityInput.value);
  const unit = ingredientUnitInput.value;

  if (!ingredient || !quantity) {
    lookupStatus.textContent = "Please enter an ingredient name and quantity.";
    return;
  }

  lookupStatus.textContent = `Searching calories for ${ingredient}...`;

  try {
    const liveResult = await fetchCaloriesOnline(ingredient, quantity, unit);
    addedItems.push(liveResult);
    lookupStatus.textContent = `${liveResult.label} added using live data.`;
    ingredientForm.reset();
  } catch (error) {
    const fallbackResult = estimateFromFallback(ingredient, quantity, unit);
    if (fallbackResult) {
      addedItems.push(fallbackResult);
      lookupStatus.textContent = `${fallbackResult.label} added from built-in nutrition values because live lookup was unavailable.`;
      ingredientForm.reset();
    } else {
      lookupStatus.textContent = "No calorie match found online or in local reference data. Try a simpler ingredient name.";
      return;
    }
  }

  renderAddedItems();
}

function clearItems() {
  addedItems.length = 0;
  lookupStatus.textContent = "Ingredient list cleared.";
  renderAddedItems();
}

function handleAddedItemsClick(event) {
  const removeButton = event.target.closest(".remove-item");
  if (!removeButton) return;

  addedItems.splice(Number(removeButton.dataset.index), 1);
  renderAddedItems();
}

function formatRoundedNumber(value) {
  return Math.round(value).toLocaleString("en-IN");
}

function formatWeight(value) {
  return Number(value).toFixed(1).replace(/\.0$/, "");
}

function clampNumber(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function roundToStep(value, step) {
  return Math.round(value / step) * step;
}

function getDietTargets(weight, goal, activity, meals) {
  const goalPreset = goalPresets[goal];
  const activityPreset = activityPresets[activity];
  const maintenanceCalories = weight * activityPreset.factor;
  const targetCalories = Math.max(weight * 24, maintenanceCalories + goalPreset.caloriesDelta);
  const proteinTarget = weight * goalPreset.proteinFactor;
  const mealCount = Number(meals);
  const proteinPerMeal = proteinTarget / mealCount;
  const waterLitres = Math.max(1.8, weight * 0.035);
  const fibreTarget = Math.max(25, Math.round((targetCalories / 1000) * 14));

  return {
    goalPreset,
    activityPreset,
    maintenanceCalories,
    targetCalories,
    proteinTarget,
    proteinPerMeal,
    waterLitres,
    fibreTarget
  };
}

function getDietPortions(weight, goal, meals, targets) {
  const mealCount = Number(meals);
  const calorieScale = clampNumber(targets.targetCalories / 2200, 0.85, 1.35);
  const proteinScale = clampNumber(targets.proteinPerMeal / 30, 0.85, 1.35);
  const mealScale = mealCount === 5 ? 0.94 : mealCount === 3 ? 1.08 : 1;
  const weightScale = clampNumber(weight / 68, 0.82, 1.28);
  const carbScale = clampNumber(calorieScale * mealScale * weightScale, 0.8, 1.35);

  const baseChapatiCount = clampNumber(Math.round(2 * carbScale), 2, goal === "weight-gain" ? 4 : 3);
  const dinnerChapatiCount = Math.max(1, baseChapatiCount - (goal === "weight-loss" ? 1 : 0));

  return {
    oatsG: roundToStep(45 * carbScale, 5),
    pohaG: roundToStep(140 * carbScale, 10),
    milkMl: roundToStep(220 * calorieScale, 10),
    soyMilkMl: roundToStep(240 * calorieScale, 10),
    smoothieMl: roundToStep((goal === "weight-loss" ? 280 : goal === "muscle-gain" ? 360 : 420) * mealScale, 10),
    buttermilkMl: roundToStep(250 * mealScale, 10),
    waterGlassMl: 300,
    yogurtG: roundToStep(170 * proteinScale, 10),
    curdG: roundToStep(180 * proteinScale, 10),
    paneerG: roundToStep(110 * proteinScale, 10),
    tofuG: roundToStep(135 * proteinScale, 10),
    chickenG: roundToStep(125 * proteinScale, 10),
    fishG: roundToStep(135 * proteinScale, 10),
    eggsCount: clampNumber(Math.round(2.3 * proteinScale), 2, 4),
    dalMl: roundToStep(190 * carbScale, 10),
    riceG: roundToStep(160 * carbScale, 10),
    lightRiceG: roundToStep(125 * clampNumber(carbScale, 0.8, 1.1), 10),
    quinoaG: roundToStep(155 * carbScale, 10),
    potatoG: roundToStep(180 * carbScale, 10),
    vegetablesG: roundToStep((goal === "weight-loss" ? 240 : 200) * mealScale, 10),
    saladG: roundToStep((goal === "weight-loss" ? 160 : 120) * mealScale, 10),
    soupMl: 300,
    nutsG: roundToStep((goal === "weight-loss" ? 15 : goal === "muscle-gain" ? 20 : 30) * mealScale, 5),
    chanaG: roundToStep((goal === "weight-loss" ? 35 : 45) * mealScale, 5),
    sproutsG: roundToStep(100 * proteinScale, 10),
    breadSlices: clampNumber(goal === "weight-gain" ? 3 : 2, 2, 3),
    peanutButterG: roundToStep((goal === "weight-loss" ? 16 : goal === "muscle-gain" ? 24 : 32) * mealScale, 4),
    fruitPieces: goal === "weight-gain" ? 2 : 1,
    datesCount: goal === "weight-gain" ? 4 : 2,
    wheyG: 30,
    cheeseToastSlices: goal === "weight-gain" ? 2 : 1,
    chapatiCount: baseChapatiCount,
    dinnerChapatiCount
  };
}

function buildMealList(goal, dietStyle, meals, targets, weight) {
  const mealCount = Number(meals);
  const portions = getDietPortions(weight, goal, meals, targets);
  const templates = {
    vegetarian: {
      "weight-loss": [
        {
          title: "Breakfast",
          focus: "Protein-rich start",
          items: [
            `${portions.oatsG} g oats or ${portions.pohaG} g poha`,
            `${portions.yogurtG} g curd or Greek yogurt`,
            `${portions.fruitPieces} fruit`,
            "1 tbsp chia or flax seeds",
            `${portions.waterGlassMl} ml water or unsweetened tea`
          ],
          note: "Keep breakfast simple and high in fibre so hunger stays steadier."
        },
        {
          title: "Lunch",
          focus: "Balanced main meal",
          items: [
            `${portions.chapatiCount} chapatis or ${portions.lightRiceG} g cooked brown rice`,
            `${portions.dalMl} ml dal`,
            `${portions.tofuG} g tofu or ${portions.paneerG} g paneer`,
            `${portions.vegetablesG} g mixed vegetables`,
            `${portions.saladG} g salad`
          ]
        },
        {
          title: "Snack",
          focus: "Light bridge meal",
          items: [
            `${portions.chanaG} g roasted chana or ${portions.sproutsG} g sprouts chaat`,
            `${portions.buttermilkMl} ml buttermilk`,
            `${portions.fruitPieces} fruit`
          ]
        },
        {
          title: "Dinner",
          focus: "Light but filling",
          items: [
            `${portions.tofuG} g tofu or ${portions.paneerG} g paneer stir-fry`,
            `${portions.vegetablesG} g vegetables`,
            `${portions.soupMl} ml clear soup`,
            `${portions.dinnerChapatiCount} chapati or ${portions.lightRiceG} g cooked rice`
          ]
        },
        {
          title: "Optional mini meal",
          focus: "Only if hungry",
          items: [
            `${portions.curdG} g curd or ${portions.soyMilkMl} ml soy milk`,
            `${portions.fruitPieces} fruit`
          ]
        }
      ],
      "muscle-gain": [
        {
          title: "Breakfast",
          focus: "Protein + training fuel",
          items: [
            `${portions.oatsG} g oats`,
            `${portions.milkMl} ml milk or ${portions.soyMilkMl} ml soy milk`,
            `${portions.fruitPieces} banana`,
            `${portions.peanutButterG} g peanut butter`,
            `${portions.wheyG} g whey or soy protein if you use it`
          ]
        },
        {
          title: "Lunch",
          focus: "Heavy recovery meal",
          items: [
            `${portions.riceG} g cooked rice or ${portions.chapatiCount} chapatis`,
            `${portions.dalMl} ml dal`,
            `${portions.paneerG} g paneer`,
            `${portions.curdG} g curd`,
            `${portions.vegetablesG} g vegetables`
          ]
        },
        {
          title: "Snack",
          focus: "Easy calories",
          items: [
            `${portions.smoothieMl} ml smoothie with milk or soy milk`,
            `${portions.nutsG} g nuts`,
            `${portions.fruitPieces} banana or other fruit`
          ]
        },
        {
          title: "Dinner",
          focus: "Protein repeat",
          items: [
            `${portions.tofuG} g tofu or ${portions.paneerG} g paneer`,
            `${portions.quinoaG} g cooked quinoa or ${portions.riceG} g cooked rice`,
            `${portions.vegetablesG} g vegetables`
          ]
        },
        {
          title: "Optional mini meal",
          focus: "Post-workout top-up",
          items: [
            `${portions.curdG} g curd or cottage cheese`,
            `${portions.milkMl} ml milk`
          ]
        }
      ],
      "weight-gain": [
        {
          title: "Breakfast",
          focus: "Higher-calorie start",
          items: [
            `${portions.smoothieMl} ml banana shake with milk`,
            `${portions.oatsG} g oats`,
            `${portions.peanutButterG} g peanut butter`,
            `${portions.nutsG} g nuts`
          ]
        },
        {
          title: "Lunch",
          focus: "Main surplus meal",
          items: [
            `${portions.riceG} g cooked rice`,
            `${portions.dalMl} ml dal`,
            `${portions.paneerG} g paneer`,
            `${portions.potatoG} g potatoes`,
            `${portions.curdG} g curd`
          ]
        },
        {
          title: "Snack",
          focus: "Compact calories",
          items: [
            `${portions.nutsG} g trail mix`,
            `${portions.smoothieMl} ml smoothie or lassi`,
            `${portions.datesCount} dates or 1 peanut chikki`
          ]
        },
        {
          title: "Dinner",
          focus: "Full meal",
          items: [
            `${portions.chapatiCount} chapatis or ${portions.riceG} g cooked rice`,
            `${portions.tofuG} g tofu or ${portions.paneerG} g paneer curry`,
            `${portions.vegetablesG} g vegetables`
          ]
        },
        {
          title: "Optional mini meal",
          focus: "Easy extra intake",
          items: [
            `${portions.milkMl} ml milk`,
            `${portions.nutsG} g nuts or dried fruit`,
            `1 slice toast with ${portions.peanutButterG} g nut butter`
          ]
        }
      ]
    },
    "non-vegetarian": {
      "weight-loss": [
        {
          title: "Breakfast",
          focus: "Lean protein start",
          items: [
            `${portions.eggsCount} eggs`,
            `${portions.breadSlices} slices high-fibre toast`,
            `${portions.fruitPieces} fruit`,
            `${portions.waterGlassMl} ml water or unsweetened tea`
          ]
        },
        {
          title: "Lunch",
          focus: "Balanced main meal",
          items: [
            `${portions.chickenG} g grilled chicken or ${portions.fishG} g fish`,
            `${portions.lightRiceG} g cooked rice or ${portions.chapatiCount} chapatis`,
            `${portions.vegetablesG} g vegetables`,
            `${portions.saladG} g salad`
          ]
        },
        {
          title: "Snack",
          focus: "Hold hunger steady",
          items: [
            `${portions.yogurtG} g yogurt`,
            `${Math.max(1, portions.eggsCount - 1)} boiled egg or ${portions.chanaG} g roasted chana`,
            `${portions.fruitPieces} fruit`
          ]
        },
        {
          title: "Dinner",
          focus: "Lighter evening meal",
          items: [
            `${portions.fishG} g fish or ${portions.chickenG} g chicken`,
            `${portions.soupMl} ml soup`,
            `${portions.vegetablesG} g vegetables`,
            `${portions.dinnerChapatiCount} chapati or ${portions.lightRiceG} g cooked rice`
          ]
        },
        {
          title: "Optional mini meal",
          focus: "Only if hungry",
          items: [
            `${portions.yogurtG} g yogurt`,
            `${portions.fruitPieces} fruit`
          ]
        }
      ],
      "muscle-gain": [
        {
          title: "Breakfast",
          focus: "Protein + carb start",
          items: [
            `${portions.eggsCount} eggs`,
            `${portions.oatsG} g oats`,
            `${portions.milkMl} ml milk`,
            `${portions.fruitPieces} banana`
          ]
        },
        {
          title: "Lunch",
          focus: "Main recovery meal",
          items: [
            `${portions.chickenG} g chicken`,
            `${portions.riceG} g cooked rice`,
            `${portions.dalMl} ml dal`,
            `${portions.curdG} g curd`,
            `${portions.vegetablesG} g vegetables`
          ]
        },
        {
          title: "Snack",
          focus: "Protein top-up",
          items: [
            `${portions.yogurtG} g yogurt`,
            `${portions.breadSlices} slices bread with ${portions.peanutButterG} g peanut butter`,
            `${portions.smoothieMl} ml protein smoothie`
          ]
        },
        {
          title: "Dinner",
          focus: "Repeat protein target",
          items: [
            `${portions.fishG} g fish or ${portions.chickenG} g chicken`,
            `${portions.potatoG} g potatoes or ${portions.riceG} g cooked rice`,
            `${portions.vegetablesG} g vegetables`
          ]
        },
        {
          title: "Optional mini meal",
          focus: "Post-workout or before bed",
          items: [
            `${Math.max(2, portions.eggsCount - 1)} eggs or ${portions.milkMl} ml milk`
          ]
        }
      ],
      "weight-gain": [
        {
          title: "Breakfast",
          focus: "Higher-calorie start",
          items: [
            `${portions.eggsCount} egg omelette`,
            `${portions.breadSlices} slices toast`,
            `${portions.milkMl} ml milk`,
            `${portions.fruitPieces} fruit`
          ]
        },
        {
          title: "Lunch",
          focus: "Big main meal",
          items: [
            `${portions.chickenG} g chicken or ${portions.fishG} g fish`,
            `${portions.riceG} g cooked rice`,
            `${portions.dalMl} ml dal`,
            `${portions.vegetablesG} g vegetables`
          ]
        },
        {
          title: "Snack",
          focus: "Easy surplus calories",
          items: [
            `${portions.nutsG} g nuts`,
            `${portions.yogurtG} g yogurt`,
            `${portions.smoothieMl} ml smoothie`,
            `${portions.breadSlices} slices bread with ${portions.peanutButterG} g peanut butter`
          ]
        },
        {
          title: "Dinner",
          focus: "Full evening meal",
          items: [
            `${portions.chickenG} g chicken curry or ${portions.eggsCount} eggs`,
            `${portions.chapatiCount} chapatis or ${portions.riceG} g cooked rice`,
            `${portions.saladG} g salad`
          ]
        },
        {
          title: "Optional mini meal",
          focus: "Before-bed add-on",
          items: [
            `${portions.milkMl} ml milk`,
            `${portions.nutsG} g nuts`,
            `${portions.datesCount} dates or ${portions.cheeseToastSlices} cheese toast`
          ]
        }
      ]
    }
  };

  const [breakfast, lunch, snack, dinner, extra] = templates[dietStyle][goal];

  if (mealCount === 3) {
    return [breakfast, lunch, dinner];
  }

  if (mealCount === 4) {
    return [breakfast, lunch, snack, dinner];
  }

  return [breakfast, lunch, snack, dinner, extra];
}

function renderMealPlanCards(mealPlan) {
  return `
    <div class="planner-meal-grid">
      ${mealPlan.map((meal) => `
        <article class="planner-meal-card">
          <div class="planner-meal-head">
            <div>
              <span class="planner-meal-label">${meal.title}</span>
              <strong>${meal.focus}</strong>
            </div>
          </div>
          <ul class="planner-meal-items">
            ${meal.items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
          ${meal.note ? `<p class="planner-meal-note">${meal.note}</p>` : ""}
        </article>
      `).join("")}
    </div>
  `;
}

function buildStrategyList(goal, targets, meals) {
  const strategies = [
    `Start near ${formatRoundedNumber(targets.targetCalories)} kcal per day and track your body-weight trend for 2 to 3 weeks before making a big change.`,
    `Aim for about ${formatRoundedNumber(targets.proteinPerMeal)} g of protein across each of your ${meals} meals.`,
    `Keep water near ${targets.waterLitres.toFixed(1)} L per day and fibre near ${targets.fibreTarget} g per day for better appetite and digestion support.`
  ];

  if (goal === "weight-loss") {
    strategies.push("Keep most meals built around lean protein, vegetables, fruit, pulses, and high-fibre carbs so the calorie deficit feels easier.");
  } else if (goal === "muscle-gain") {
    strategies.push("Use the higher 2.0 g/kg protein target and keep one meal or shake close to training to support recovery and growth.");
  } else {
    strategies.push("Use energy-dense extras like nuts, dairy, olive oil, potatoes, rice, and smoothies so calories go up without forcing huge meals.");
  }

  return strategies;
}

function handleDietSubmit(event) {
  event.preventDefault();
  const weight = Number(dietWeightInput.value);
  const activity = dietActivityInput.value;
  const dietStyle = document.getElementById("diet-style").value;
  const goal = document.getElementById("diet-goal").value;
  const meals = document.getElementById("diet-meals").value;

  if (!weight || weight < 25) {
    dietResult.innerHTML = `
      <h3>Your diet plan</h3>
      <p>Please enter a valid body weight in kilograms to build a weight-based diet plan.</p>
    `;
    return;
  }

  const targets = getDietTargets(weight, goal, activity, meals);
  const mealPlan = buildMealList(goal, dietStyle, meals, targets, weight);
  const strategyList = buildStrategyList(goal, targets, meals);
  const dietLabel = dietStyle === "vegetarian" ? "Vegetarian" : "Non-vegetarian";

  dietResult.innerHTML = `
    <div class="planner-result-head">
      <div>
        <p class="eyebrow">Personal plan</p>
        <h3>${targets.goalPreset.label} starter plan</h3>
      </div>
      <p class="planner-target-copy">${targets.goalPreset.summary}</p>
      <p class="planner-target-copy"><strong>Weight:</strong> ${formatWeight(weight)} kg | <strong>Style:</strong> ${dietLabel} | <strong>Activity:</strong> ${targets.activityPreset.label}</p>
    </div>
    <div class="planner-summary-grid">
      <article class="planner-summary-card">
        <span>Target calories</span>
        <strong>${formatRoundedNumber(targets.targetCalories)} kcal</strong>
        <small>Maintenance estimate: ${formatRoundedNumber(targets.maintenanceCalories)} kcal</small>
      </article>
      <article class="planner-summary-card">
        <span>Protein target</span>
        <strong>${formatRoundedNumber(targets.proteinTarget)} g/day</strong>
        <small>${targets.goalPreset.proteinFactor.toFixed(1)} g per kg body weight</small>
      </article>
      <article class="planner-summary-card">
        <span>Protein per meal</span>
        <strong>${formatRoundedNumber(targets.proteinPerMeal)} g</strong>
        <small>Split across ${meals} meals</small>
      </article>
      <article class="planner-summary-card">
        <span>Hydration goal</span>
        <strong>${targets.waterLitres.toFixed(1)} L</strong>
        <small>Simple daily water target</small>
      </article>
    </div>
    <div class="planner-strategy-grid">
      <div>
        <h4>Suggested meal flow</h4>
        <p class="planner-note">Portions below are ready-to-eat amounts unless a drink or powder is mentioned.</p>
        ${renderMealPlanCards(mealPlan)}
      </div>
      <div>
        <h4>How to use it</h4>
        <ul class="diet-result-list">
          ${strategyList.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>
    </div>
    <p class="planner-note">This is a rough educational estimate based on weight, activity, and goal. If you are under 18, pregnant, have kidney disease, diabetes, or another medical condition, use a qualified clinician or dietitian for a personal plan.</p>
  `;
}

function updateHeightInputs() {
  const useFeet = heightUnit.value === "ft";
  heightCmGroup.classList.toggle("hidden", useFeet);
  heightFtGroup.classList.toggle("hidden", !useFeet);
}

function updateNutrientFilter() {
  const value = nutrientFilter.value;
  filterSections.forEach((section) => {
    const isMatch = value === "all" || section.dataset.filterGroup === value;
    section.classList.toggle("is-hidden", !isMatch);
  });
}

function openMenu() {
  sideMenu.classList.add("open");
  sideMenu.setAttribute("aria-hidden", "false");
  menuToggle.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  sideMenu.classList.remove("open");
  sideMenu.setAttribute("aria-hidden", "true");
  menuToggle.setAttribute("aria-expanded", "false");
}

function updateBackToTopVisibility() {
  backToTopButton.classList.toggle("visible", window.scrollY > 320);
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

bmiForm.addEventListener("submit", handleBmiSubmit);
ingredientForm.addEventListener("submit", handleIngredientSubmit);
addedItemsContainer.addEventListener("click", handleAddedItemsClick);
clearItemsButton.addEventListener("click", clearItems);
dietForm.addEventListener("submit", handleDietSubmit);
themeToggle.addEventListener("click", toggleTheme);
heightUnit.addEventListener("change", updateHeightInputs);
nutrientFilter.addEventListener("change", updateNutrientFilter);
menuToggle.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);
menuLinks.forEach((link) => link.addEventListener("click", closeMenu));
backToTopButton.addEventListener("click", scrollToTop);
window.addEventListener("scroll", updateBackToTopVisibility, { passive: true });

initializeTheme();
updateHeightInputs();
updateNutrientFilter();
updateBackToTopVisibility();
renderNutrients();
renderDetailGrid(vitaminGrid, vitaminDetails);
renderDetailGrid(mineralGrid, mineralDetails);
renderDetailGrid(aminoGrid, aminoDetails);
renderDetailGrid(hormoneGrid, hormoneDetails);
renderCalorieChart();
renderMacroChart(proteinChart, proteinChartData);
renderMacroChart(fibreChart, fibreChartData);
renderAddedItems();
