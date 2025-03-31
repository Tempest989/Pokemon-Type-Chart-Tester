// ------------------------------------------------------------- TYPE CHART TEST CODE --------------------------------------------------------------

const content = document.getElementById("content");
const title = document.getElementById("title");
const instructions = document.getElementById("instructions");
const typeSelect = [document.getElementById("type-select-1"), document.getElementById("type-select-2")];
const dualTypes = [...document.getElementsByClassName("dual-types")].slice();
const answerTable = document.getElementById("answer-table");
const typeTable = document.getElementById("type-chart-table");
const score = document.getElementById("score");
const submit = document.getElementById("submit");
const next = document.getElementById("next");
const startMenu = document.getElementById("play-choose-test");
const attackStartMenu = document.getElementById("play-attack-test");
const normalButton = document.getElementById("normal-test");
const reverseButton = document.getElementById("reverse-test");
const mixedButton = document.getElementById("mixed-test");
const backMenuButton = document.getElementById("back-menu");
const answerArea = document.getElementById("answer");

const types = ["normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel", "fire", "water", "grass", "electric", "psychic", "ice", "dragon", "dark", "fairy"];

// const typeChart = [[1, 1, 1, 1, 1, 0.5, 1, 0, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//                    [2, 1, 0.5, 0.5, 1, 2, 0.5, 0, 2, 1, 1, 1, 1, 0.5, 2, 1, 2, 0.5],
//                    [1, 2, 1, 1, 1, 0.5, 2, 1, 0.5, 1, 1, 2, 0.5, 1, 1, 1, 1, 1],
//                    [1, 1, 1, 0.5, 0.5, 0.5, 1, 0.5, 0, 1, 1, 2, 1, 1, 1, 1, 1, 2],
//                    [1, 1, 0, 2, 1, 2, 0.5, 1, 2, 2, 1, 0.5, 2, 1, 1, 1, 1, 1],
//                    [1, 0.5, 2, 1, 0.5, 1, 2, 1, 0.5, 2, 1, 1, 1, 1, 2, 1, 1, 1],
//                    [1, 0.5, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 0.5, 1, 2, 1, 2, 1, 1, 2, 0.5],
//                    [0, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 0.5, 1],
//                    [1, 1, 1, 1, 1, 2, 1, 1, 0.5, 0.5, 0.5, 1, 0.5, 1, 2, 1, 1, 2],
//                    [1, 1, 1, 1, 1, 0.5, 2, 1, 2, 0.5, 0.5, 2, 1, 1, 2, 0.5, 1, 1],
//                    [1, 1, 1, 1, 2, 2, 1, 1, 1, 2, 0.5, 0.5, 1, 1, 1, 0.5, 1, 1],
//                    [1, 1, 0.5, 0.5, 2, 2, 0.5, 1, 0.5, 0.5, 2, 0.5, 1, 1, 1, 0.5, 1, 1],
//                    [1, 1, 2, 1, 0, 1, 1, 1, 1, 1, 2, 0.5, 0.5, 1, 1, 0.5, 1, 1],
//                    [1, 2, 1, 2, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 0.5, 1, 1, 0, 1],
//                    [1, 1, 2, 1, 2, 1, 1, 1, 0.5, 0.5, 0.5, 2, 1, 1, 0.5, 2, 1, 1],
//                    [1, 1, 1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 1, 1, 2, 1, 0],
//                    [1, 0.5, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 0.5, 0.5],
//                    [1, 2, 1, 0.5, 1, 1, 1, 1, 0.5, 0.5, 1, 1, 1, 1, 1, 2, 2, 1]]

// for (let i = 0, len = typeChart.length; i < len; i++) {
// 	let temp = [];
// 	for (let j = 0; j < len; j++) {
// 		temp.push(typeChart[j][i]);
// 	}
// 	console.log(temp);
// }

const typeChart = [[1, 2, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 2, 1, 1, 0.5, 0.5, 1, 1, 1, 1, 1, 1, 2, 1, 1, 0.5, 2],
					[1, 0.5, 1, 1, 0, 2, 0.5, 1, 1, 1, 1, 0.5, 2, 1, 2, 1, 1, 1],
					[1, 0.5, 1, 0.5, 2, 1, 0.5, 1, 1, 1, 1, 0.5, 1, 2, 1, 1, 1, 0.5],
					[1, 1, 1, 0.5, 1, 0.5, 1, 1, 1, 1, 2, 2, 0, 1, 2, 1, 1, 1],
					[0.5, 2, 0.5, 0.5, 2, 1, 1, 1, 2, 0.5, 2, 2, 1, 1, 1, 1, 1, 1],
					[1, 0.5, 2, 1, 0.5, 2, 1, 1, 1, 2, 1, 0.5, 1, 1, 1, 1, 1, 1],
					[0, 0, 1, 0.5, 1, 1, 0.5, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
					[0.5, 2, 0.5, 0, 2, 0.5, 0.5, 1, 0.5, 2, 1, 0.5, 1, 0.5, 0.5, 0.5, 1, 0.5],
					[1, 1, 1, 1, 2, 2, 0.5, 1, 0.5, 0.5, 2, 0.5, 1, 1, 0.5, 1, 1, 0.5],
					[1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0.5, 0.5, 2, 2, 1, 0.5, 1, 1, 1],
					[1, 1, 2, 2, 0.5, 1, 2, 1, 1, 2, 0.5, 0.5, 0.5, 1, 2, 1, 1, 1],
					[1, 1, 0.5, 1, 2, 1, 1, 1, 0.5, 1, 1, 1, 0.5, 1, 1, 1, 1, 1],
					[1, 0.5, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 0.5, 1, 1, 2, 1],
					[1, 2, 1, 1, 1, 2, 1, 1, 2, 2, 1, 1, 1, 1, 0.5, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0.5, 0.5, 0.5, 1, 2, 2, 1, 2],
					[1, 2, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 1, 1, 0, 1, 1, 0.5, 2],
					[1, 0.5, 1, 2, 1, 1, 0.5, 1, 2, 1, 1, 1, 1, 1, 1, 0, 0.5, 1]];

const tableSections = [document.getElementById("x4-types"), document.getElementById("x2-types"), document.getElementById("x1-types"), document.getElementById("x0.5-types"), document.getElementById("x0.25-types"), document.getElementById("x0-types")];

const answerTableSections = [document.getElementById("x4-types-a"), document.getElementById("x2-types-a"), document.getElementById("x1-types-a"), document.getElementById("x0.5-types-a"), document.getElementById("x0.25-types-a"), document.getElementById("x0-types-a")]

const typeDivs = [];

const answerDivs = [];

const testTypes = [];

let dual = false;

let currentScore = 0;
// style = 0 => Normal, = 1 => Reverse
let testStyle = 0;

let mixed = false;

let dragged = null;

let answerChart = null;

const createTypeDiv = (type) => {
	// console.log(type);
	const newDiv = document.createElement("div");
	newDiv.textContent = type;
	newDiv.classList.add("type", type);
	return newDiv;
}

const setupTestTypes = () => {
	const div = document.getElementById("test-types");
	testTypes.push(createTypeDiv(types[Math.floor(Math.random()*18)]));
	testTypes.push(createTypeDiv(types[Math.floor(Math.random()*18)]));
	testTypes[1].classList.add("dual-types");
	div.append(testTypes[0]);
	div.append(testTypes[1]);
	dualTypes.push(testTypes[1]);
}

const updateTestTypeDiv = (div, type) => {
	div.classList.remove(div.textContent);
	div.textContent = type;
  	div.classList.add(type);
}

const changeTestTypes = (type1, type2, dualTypeFunc) => {
	updateTestTypeDiv(type1, types[Math.floor(Math.random()*18)]);
	if (Math.floor(Math.random() * 10)) {
		let tempType = types[Math.floor(Math.random()*18)];
		while (tempType === type1.textContent) {
			tempType = types[Math.floor(Math.random()*18)];
		}
		updateTestTypeDiv(type2, tempType);
		dualTypeFunc();
	} else if (dual === true) {
		dualTypeFunc();
	}
}

const typeChartInteraction = (type1, type2=null) => {
	console.log(" before 1answerchart = ", answerChart);
	console.log("type1.textcontent = ", type1);
	console.log("types index of type1.textcontent = ", types.indexOf(type1));
	// console.log("type1.textcontent = ", type1.textContent);
	answerChart = typeChart[types.indexOf(type1)];
	console.log("after 1answerchart = ", answerChart);
	if (dual === true && type2) {
		console.log("entering second type interaction sections");
		console.log("answerchart2 = ", answerChart);
		const tempChart2 = typeChart[types.indexOf(type2)];
		answerChart = answerChart.map((e, index) => e * tempChart2[index]);
	}
	console.log("end answerchart = ", answerChart);
}

const updateTestTypes = () => {
	changeTestTypes(testTypes[0], testTypes[1], toggleDualTypes)
	typeChartInteraction(testTypes[0].textContent, testTypes[1].textContent);
	for (let i = 0, len = answerDivs.length; i < len; i++) {
		switch (answerChart[i]) {
			case 1:
				answerTableSections[2].append(answerDivs[i]);
				break;
			case 0.5:
				answerTableSections[3].append(answerDivs[i]);
				break;
			case 2:
				answerTableSections[1].append(answerDivs[i]);
				break;
			case 0:
				answerTableSections[5].append(answerDivs[i]);
				break;
			case 4:
				answerTableSections[0].append(answerDivs[i]);
				break;
			default:
				answerTableSections[4].append(answerDivs[i]);
				break;
		}
	}
}

const setupTypeDivs = () => {
	// console.log("drag start:  ", typeDivs[i]);
	for (let i = 0, len = types.length; i < len; i++) {
		answerDivs.push(createTypeDiv(types[i]));
		typeDivs.push(createTypeDiv(types[i]));
		typeDivs[i].setAttribute("draggable", true);
		typeDivs[i].addEventListener("dragstart", (event)=>{
			dragged = i;
			event.target.classList.add("dragging");
		});
		typeDivs[i].addEventListener("dragend", (event)=>{event.target.classList.remove("dragging");});
	}
}

let dragMutex = null;

const setupTableSections = () => {
	for (let i = 0, len = tableSections.length; i < len; i++)
	{
		tableSections[i].addEventListener("dragenter", (event)=>{
			// console.log("entering dropzone: ", event.target);
			dragMutex = event.target;
			if (event.target.classList.contains("dropzone")) {
				event.target.classList.add("dragover");
			}
		});
		tableSections[i].addEventListener("dragleave", (event)=>{
			// console.log("dragleave: ", event.target, " :: mutex ", dragMutex);
			if (dragMutex.parentNode !== event.target)
				event.target.classList.remove("dragover");
		});
		tableSections[i].addEventListener("dragover", (event)=>{event.preventDefault();}, false);
		tableSections[i].addEventListener("drop", (event) => {
			event.preventDefault();
			// console.log("dropped: ", event.target);
			if (event.target.classList.contains("dropzone")) {
				// console.log("hitt!! drop if statement!!");
				event.target.classList.remove("dragover");
				event.target.appendChild(typeDivs[dragged]);
			} else if (event.target.parentNode.classList.contains("dropzone")) {
				// console.log("hitt!! drop ELSE if statement!!");
				event.target.parentNode.classList.remove("dragover");
				event.target.parentNode.appendChild(typeDivs[dragged]);
			}
		});
	}
	// console.log(typeDivs);
	// console.log(tableSections);
	resetTypeTable();
}

const resetTypeTable = () => {
	tableSections[2].append(...typeDivs);
}

const toggleDualTypes = () => {
	console.log("toggle dual types");
	// console.log(dualTypes);
	for (let i = 0, len = dualTypes.length; i < len; i++)
	{
		// console.log(dualTypes[i]);
		// console.log(dualTypes[i].classList);
		dualTypes[i].classList.toggle("dual-types");
	}
	dual = !dual;
}

const backMenu = () => {
	content.classList.add("hidden");
	typeSelect[0].classList.add("hidden");
	typeSelect[1].classList.add("hidden");
	next.classList.add("hidden");
	answerTable.classList.add("hidden");
	normalButton.classList.add("hidden");
	reverseButton.classList.add("hidden");
	mixedButton.classList.add("hidden");
	answerArea.classList.add("hidden");

	attackType.parentNode.classList.add("hidden");
	attackType.classList.add("hidden")
	effectiveness.classList.add("hidden");
	nextAttack.classList.add("hidden");
	attackTypeButton.classList.add("hidden");
	effectivenessTypeButton.classList.add("hidden");
	defenseTypes[0].parentNode.classList.add("hidden");
	defenseTypes[1].classList.add("hidden");
	defenseTypesOutput[1].classList.add("hidden");
	for (let i = 0, len = attackTypeOutput.length; i < len; i++)
		attackTypeOutput[i].classList.add("hidden");
	answerAttackArea.classList.add("hidden");
	

	testTypes[0].parentNode.classList.remove("hidden");
	submit.classList.remove("hidden");
	typeTable.classList.remove("hidden");

	submitAttack.classList.remove("hidden");
	defenseTypesOutput[0].parentNode.classList.remove("hidden");
	effectivenessOutput.classList.remove("hidden");
	attackTypeOutput[0].parentNode.classList.remove("hidden");
	

	// startMenu.classList.remove("hidden");
	// attackStartMenu.classList.remove("hidden");
	// backMenuButton.classList.add("hidden");

	mixed = false;
	dual = false;
	currentScore = 0;
	currentScoreAttack = 0;
	attackTypeAnswers = [];

	toggleBackStartMenu();
}

const updateScore = (answerMarks) => {
	currentScore += answerMarks;
	score.textContent = currentScore;
	switch (answerMarks) {
		case 0: 
			answerArea.textContent = "Wrong";
			answerArea.classList.add("incorrect");
			break;
		case 1:
			answerArea.textContent = "Correct";
			answerArea.classList.add("correct");
			break;
		case 0.5:
			answerArea.textContent = "Half Correct";
			answerArea.classList.add("half-correct");
			break;
	}
	toggleAnswer();
}

const updateNormalTest = () => {
	updateTestTypes();
	resetTypeTable();
}

const updateReverseTest = () => {
	updateTestTypes();
}

const submitNormalTest = () => {
	let wrongAnswers = 0;
	for (let i = 0, len = answerChart.length; i < len; i++) {
		switch (answerChart[i]) {
			case 1:
				if (typeDivs[i].parentNode.id !== "x1-types") {
					wrongAnswers++;
				}
				break;
			case 0.5:
				if (typeDivs[i].parentNode.id !== "x0.5-types") {
					wrongAnswers++;
				}
				break;
			case 2:
				if (typeDivs[i].parentNode.id !== "x2-types") {
					wrongAnswers++;
				}
				break;
			case 0:
				if (typeDivs[i].parentNode.id !== "x0-types") {
					wrongAnswers++;
				}
				break;
			case 4:
				if (typeDivs[i].parentNode.id !== "x4-types") {
					wrongAnswers++;
				}
				break;
			default:
				if (typeDivs[i].parentNode.id !== "x0.25-types") {
					wrongAnswers++;
				}
				break;
		}
	}
	switch (wrongAnswers) {
		case 0:
			updateScore(1);
			break;
		case 1: case 2: case 3:
			updateScore(0.5);
		default:
			updateScore(0);
	}
	toggleAnswerTable();
	toggleNextSubmit();
}

const submitReverseTest = () => {
	toggleTestType();
	console.log("typeSelects: ", typeSelect[0].value, " ", typeSelect[1].value, "\nTestTypes: ", testTypes[0].textContent, " ", testTypes[1].textContent);
	switch (typeSelect[0].value) {
		case testTypes[0].textContent: case testTypes[1].textContent:
			updateScore(0.5);
	}
	if (dual === true) {
		switch (typeSelect[1].value) {
			case testTypes[0].textContent: case testTypes[1].textContent:
				updateScore(0.5);
		}
	} else if (typeSelect[1].value === "none") {
		updateScore(0.5);
	}
	toggleNextSubmit();
}

const submitAnswer = () => {
	if (testStyle === 0)
		submitNormalTest();
	else
		submitReverseTest();
}

const switchNormalReverse = () => {
	toggleTypeSelect();
	toggleTypeTable();
}

const nextQuestion = () => {
	if (mixed === true) {
		if (Math.round(Math.random())) {
			if (testStyle === 1)
				switchNormalReverse();
			testStyle = 0;
		} 
		else {
			if (testStyle === 0)
				switchNormalReverse();
			testStyle = 1;
		}
	}
	toggleNextSubmit();
	toggleAnswer();
	answerArea.classList.remove("correct");
	answerArea.classList.remove("incorrect");
	answerArea.classList.remove("half-correct");
	if (testStyle === 0) {
		console.log("normal!");
		toggleAnswerTable();
		updateNormalTest();
	}
	else {
		console.log("reverse!");
		toggleTestType();
		updateReverseTest();
	}
}

const toggleAnswer = () => {
	answerArea.classList.toggle("hidden");
}

const toggleTestTypeButtons = () => {
	normalButton.classList.toggle("hidden");
	reverseButton.classList.toggle("hidden");
	mixedButton.classList.toggle("hidden");
}

const toggleBackStartMenu = () => {
	startMenu.classList.toggle("hidden");
	attackStartMenu.classList.toggle("hidden");
	backMenuButton.classList.toggle("hidden");
}

const toggleNextSubmit = () => {
	submit.classList.toggle("hidden");
	next.classList.toggle("hidden");
}

const toggleInstructions = () => {
	instructions.classList.toggle("hidden");
}

const toggleContent = () => {
	content.classList.toggle("hidden");
}

const toggleAnswerTable = () => {
	answerTable.classList.toggle("hidden");
}

const toggleTypeTable = () => {
	typeTable.classList.toggle("hidden");
}

const toggleTypeSelect = () => {
	typeSelect[0].classList.toggle("hidden");
	typeSelect[1].classList.toggle("hidden");
}

const toggleTestType = () => {
	testTypes[0].parentNode.classList.toggle("hidden");
}

const runReverseTest = () => {
	toggleTestType();
	toggleTypeSelect();
	toggleAnswerTable();
	toggleTypeTable();
	updateReverseTest();
}

const setupContent = (inputTitle, inputTestStyle, inputInstruction) => {
	title.textContent = inputTitle;
	currentScore = 0;
	score.textContent = currentScore;
	//   updateTestType();
	// console.log(inputInstruction);
	// console.log(instructions);
	instructions.innerText = inputInstruction;
	testStyle = inputTestStyle;
}

const normalTypeChartTest = () => {
	toggleTestTypeButtons();
	setupContent("Type Chart Test", 0, "Match the Correct Effectiveness of each Pokemon Attack Type for the Type / Types Presented Above the Table.\n +1 Score for all Types Correct, +0.5 Score for 1-3 Wrong, +0 Score for more than 3 Wrong.\n Good Luck and Have Fun!");
  	// console.log("normal test");
	toggleContent();
	updateNormalTest();
}

const reverseTypeChartTest = () => {
	toggleTestTypeButtons();
	setupContent("Reverse Type Chart Test", 1, "Match the Correct Typing of the Pokemon Based on the Effectiveness of each Pokemon Attack Type Presented in the below Table.\n +1 Score for all Types Correct, +0.5 Score for 1 Type Wrong, +0 Score for all Wrong.\n Good Luck and Have Fun!");
	// console.log("reverse test");
	toggleContent();
	runReverseTest();
}

const mixedTypeChartTest = () => {
	toggleTestTypeButtons();
	setupContent("Mixed Type Chart Test", 2, "Mixture of Questions from the Normal Test and Reverse Test with the Same Scoring Systems for Each Game.\n +1 Score for all Types Correct, +0.5 Score for 1-3 Wrong for Normal or 1 Type Wrong for Reverse, +0 Score for more than 3 Wrong for Normal and All Wrong for Reverse.\n Good Luck and Have Fun!");
	// console.log("mixed test");
	mixed = true;
	toggleContent();
	if (Math.round(Math.random())) {
		testStyle = 0;
		console.log("normal!");
		updateNormalTest();
	} 
	else {
		testStyle = 1;
		console.log("reverse!");
		runReverseTest();
	}
}

const playTypeChartTester = () => {
	toggleTestTypeButtons();
	toggleBackStartMenu();
}

setupTestTypes();
setupTableSections();
setupTypeDivs();


// --------------------------------------------------------- ATTACK TYPE TESTS CODE --------------------------------------------------

const attackTypeButton = document.getElementById("attack-type-test");
const defenseTypeButton = document.getElementById("defense-type-test");
const effectivenessTypeButton = document.getElementById("effectiveness-type-test");
const mixedAttackButton = document.getElementById("mixed-attack-test");
const attackType = document.getElementById("attack-type");
const defenseTypes = [document.getElementById("defense-type-1"), document.getElementById("defense-type-2")];
const effectiveness = document.getElementById("effectiveness");
const answerAttackArea = document.getElementById("answer-attack");

const attackTypeOutput = [];
const defenseTypesOutput = [createTypeDiv(types[Math.floor(Math.random()*18)]), createTypeDiv(types[Math.floor(Math.random()*18)])];
const effectivenessOutput = document.getElementById("effectiveness-output");

const submitAttack = document.getElementById("submit-attack");
const nextAttack = document.getElementById("next-attack");

const scoreAttack = document.getElementById("score-attack");

let currentScoreAttack = 0;
let effectivenessMultiplier = 0;
let attackTypeAnswers = [];

const toggleAttackType = () => {
	attackType.classList.toggle("hidden");
}

const toggleAttackTypeOutput = () => {
	attackTypeOutput[0].parentNode.classList.toggle("hidden");
}

const toggleEffectiveness = () => {
	effectiveness.classList.toggle("hidden");
}

const toggleEffectivenessOutput = () => {
	effectivenessOutput.classList.toggle("hidden");
}

const toggleDefenseType = () => {
	defenseTypes[0].parentNode.classList.toggle("hidden");
}

const toggleDefenseTypeDual = () => {
	defenseTypesOutput[1].classList.toggle("hidden");
	dual = !dual;
}

const toggleDefenseOutput = () => {
	defenseTypesOutput[0].parentNode.classList.toggle("hidden");
}

const toggleAttackContent = () => {
	attackType.parentNode.classList.toggle("hidden");
}

const toggleAttackDefenseEffectiveButtons = () => {
	attackTypeButton.classList.toggle("hidden");
	defenseTypeButton.classList.toggle("hidden");
	effectivenessTypeButton.classList.toggle("hidden");
	mixedAttackButton.classList.toggle("hidden");
}

const toggleAttackSubmitNext = () => {
	submitAttack.classList.toggle("hidden");
	nextAttack.classList.toggle("hidden");
}

const toggleAnswerAttack = () => {
	answerAttackArea.classList.toggle("hidden");
}

const updateScoreAttack = (amount, showAnswer = true) => {
	currentScoreAttack += amount;
	scoreAttack.textContent = currentScoreAttack;
	if (showAnswer) {
		switch (amount) {
			case 0:
				answerAttackArea.textContent = "Wrong";
				answerAttackArea.classList.add("incorrect");
				break;
			case 1:
				answerAttackArea.textContent = "Correct";
				answerAttackArea.classList.add("correct");
				break;
		}
		toggleAnswerAttack();
	}
}

const setupAttackTestParameters = () => {
	console.log("setup attack test parameters!");
	updateScoreAttack(0, false);
	for (let i = 0, len = types.length; i < len; i++) {
		attackTypeOutput.push(createTypeDiv(types[i]));
		attackTypeOutput[i].classList.add("hidden");
	}
	document.getElementById("attack-type-output").append(...attackTypeOutput);
	defenseTypesOutput[1].classList.add("hidden");
	document.getElementById("defense-types-output").append(defenseTypesOutput[0], defenseTypesOutput[1]);
	console.log("attack type output: ", attackTypeOutput);
}

const updateAttackTypeOutputRandom = () => {
	const temp = Math.floor(Math.random()*18);
	attackTypeOutput[temp].classList.toggle("hidden");
	attackTypeAnswers.push(temp);
	console.log("updated attack type random done");
}

const updateDefenseTypesOutputRandom = () => {
	console.log("updated defense type random started");
	console.log("defenseTypesoutput[0]: ", defenseTypesOutput[0], "defenseTypeoutputs[1] = ", defenseTypesOutput[1]);
	changeTestTypes(defenseTypesOutput[0], defenseTypesOutput[1], toggleDefenseTypeDual);
	console.log("AFTER CHANGE :::: defenseTypesoutput[0]: ", defenseTypesOutput[0], "defenseTypeoutputs[1] = ", defenseTypesOutput[1]);
	console.log("answers = ", answerChart);
	console.log("dual == ", dual);
	typeChartInteraction(defenseTypesOutput[0].textContent, defenseTypesOutput[1].textContent);
	console.log("answers after interactions = ", answerChart);
	console.log("updated defense type random done");
}

const updateEffectivenessOutputRandom = () => {
	let temp = 0;
	if (dual === true)
		temp = Math.floor(Math.random()*6);
	else
		temp = Math.floor(Math.random()*4);
	switch (temp) {
		case 0:
			effectivenessOutput.textContent = "Neutral Damage (x1)";
			effectivenessMultiplier = 1;
			break;
		case 1:
			effectivenessOutput.textContent = "Not Very Effective Damage (x0.5)";
			effectivenessMultiplier = 0.5;
			break;
		case 2:
			effectivenessOutput.textContent = "Super Effective Damage (x2)";
			effectivenessMultiplier = 2;
			break;
		case 3:
			effectivenessOutput.textContent = "No Damage (x0)";
			effectivenessMultiplier = 0;
			break;
		case 4:
			effectivenessOutput.textContent = "Super Effective Damage (x4)";
			effectivenessMultiplier = 4;
			break;
		default:
			effectivenessOutput.textContent = "Not Very Effective Damage (x0.25)";
			effectivenessMultiplier = 0.25;
			break;
	}
	console.log("updated effectiveness type random done");
}

const attackAnswerCheck = () => {
	console.log("value = ", attackType.value);
	console.log("answer chart: ", answerChart[types.findIndex((e) => e === attackType.value)]);
	console.log("types findIndex = ", types.findIndex((e) => e === attackType.value));
	if (answerChart[types.findIndex((e) => e === attackType.value)] === effectivenessMultiplier)
		updateScoreAttack(1);
	else
		updateScoreAttack(0);
	toggleAttackTypeOutput();
}

// will be annoying for multiple potential answers possible

const defenseAnswerCheck = () => {
	if (defenseTypes[1].value === "none") {
		console.log("before type interaction");
		console.log("answerchart = ", answerChart);
		typeChartInteraction(defenseTypes[0].value);
		console.log("after type interaction");
	}
	else {
		console.log("before type interaction");
		console.log("answerchart = ", answerChart);
		typeChartInteraction(defenseTypes[0].value, defenseTypes[1].value);
		console.log("after type interaction");
	}
	console.log("attack type answer: ", attackTypeAnswers);
	console.log("answerchart = ", answerChart);
	console.log("effectiveness: ", effectivenessMultiplier);
	if (answerChart[attackTypeAnswers[0]] === effectivenessMultiplier)
		updateScoreAttack(1);
	else
		updateScoreAttack(0);
	toggleDefenseOutput();
}

const effectivenessAnswerCheck = () => {
	console.log(types);
	console.log(answerChart);
	console.log("value = ", effectiveness.value);
	// console.log("answer chart: ", answerChart[types.findIndex((e) => e === attackTypeOutput.textContent)]);
	// console.log("types findIndex = ", types.findIndex((e) => e === attackTypeOutput.textContent));
	console.log("effectivenessMultiplier = ", effectivenessMultiplier);
	if (effectivenessMultiplier == effectiveness.value)
		updateScoreAttack(1);
	else
		updateScoreAttack(0);
	toggleEffectivenessOutput();
}

const submitAttackAnswer = () => {
	switch (testStyle) {
		case 0:
			attackAnswerCheck();
			break;
		case 2:
			defenseAnswerCheck();
			break;
		default:
			effectivenessAnswerCheck();
			break;
	}
	toggleAttackSubmitNext();
}

const nextAttackQuestion = () => {
	console.log("attack = ", attackTypeOutput);
	console.log("answers in next  = ", attackTypeAnswers);
	for (let i = 0, len = attackTypeAnswers.length; i < len; i++)
		attackTypeOutput[attackTypeAnswers[i]].classList.toggle("hidden");
	attackTypeAnswers = [];
	toggleAnswerAttack();
	answerAttackArea.classList.remove("correct");
	answerAttackArea.classList.remove("incorrect");
	if (mixed === true)
		updateMixedTest();
	else {
		switch (testStyle) {
			case 0:
				updateAttackTest();
				break;
			case 2:
				updateDefenseTest();
				break;
			default:
				updateEffectivenessTest();
				break;
		}
	}
	toggleAttackSubmitNext();
}

const updateAttackTest = () => {
	updateDefenseTypesOutputRandom();
	while (!attackTypeAnswers.length) {
		updateEffectivenessOutputRandom();
		for (let i = 0, len = answerChart.length; i < len; i++) {
			if (answerChart[i] === effectivenessMultiplier) {
				attackTypeOutput[i].classList.toggle("hidden");
				attackTypeAnswers.push(i);
			}
		}
	}
	toggleAttackTypeOutput();
	console.log("attack = ", attackTypeOutput);
	console.log("defense = ", defenseTypesOutput);
	console.log("effectiveness = ", effectivenessMultiplier);
	console.log("answers  = ", attackTypeAnswers);
}

const updateDefenseTest = () => {
	updateAttackTypeOutputRandom();
	updateDefenseTypesOutputRandom();
	let i = 20;
	for (; i >= 20; ) {
		updateEffectivenessOutputRandom();
		for (i = 0; i < 20; i++) {
			if (answerChart[attackTypeAnswers[0]] === effectivenessMultiplier) {
				console.log("update defense test break hitttt!!!");
				break;
			}
			updateDefenseTypesOutputRandom();
		}
	}
	toggleDefenseOutput();
}

const updateEffectivenessTest = () => {
	updateAttackTypeOutputRandom();
	updateDefenseTypesOutputRandom();
	switch (answerChart[attackTypeAnswers[0]]) {
		case 1:
			effectivenessOutput.textContent = "Neutral Damage (x1)";
			effectivenessMultiplier = 1;
			break;
		case 0.5:
			effectivenessOutput.textContent = "Not Very Effective Damage (x0.5)";
			effectivenessMultiplier = 0.5;
			break;
		case 2:
			effectivenessOutput.textContent = "Super Effective Damage (x2)";
			effectivenessMultiplier = 2;
			break;
		case 0:
			effectivenessOutput.textContent = "No Damage (x0)";
			effectivenessMultiplier = 0;
			break;
		case 4:
			effectivenessOutput.textContent = "Super Effective Damage (x4)";
			effectivenessMultiplier = 4;
			break;
		default:
			effectivenessOutput.textContent = "Not Very Effective Damage (x0.25)";
			effectivenessMultiplier = 0.25;
			break;
	}
	toggleEffectivenessOutput();
}

const updateMixedTest = () => {
	const pastStyle = testStyle;
	testStyle = Math.floor(Math.random() * 3);
	if (pastStyle !== testStyle) {
		console.log("updating past test styles stuff");
		switch (pastStyle) {
			case 0:
				toggleAttackType();
				break;
			case 2:
				toggleDefenseType();
				break;
			case 1:
				toggleEffectiveness();
				break;
		}
	}
	console.log("switch parameter updates");
	switch (testStyle) {
		case 0:
			toggleAttackType();
			updateAttackTest();
			break;
		case 2:
			toggleDefenseType();
			updateDefenseTest();
			break;
		default:
			toggleEffectiveness();
			updateEffectivenessTest();
			break;
	}
}

// const updateAttackTestParameters = () => {
// 	console.log("starting parameter updates");
// 	if (mixed === true)
// 		testStyle = Math.floor(Math.random() * 3);
// 	console.log("switch parameter updates");
// 	switch (testStyle) {
// 		case 0:
// 			updateAttackTest();
// 			break;
// 		case 2:
// 			updateDefenseTest();
// 			break;
// 		default:
// 			updateEffectivenessTest();
// 			break;
// 	}
// }

const attackTypeTest = () => {
	testStyle = 0;
	toggleAttackType();
	toggleAttackContent();
	toggleAttackDefenseEffectiveButtons();
	updateAttackTest();
	console.log("attack type test done!");
}

const defenseTypeTest = () => {
	testStyle = 2;
	toggleDefenseType();
	toggleAttackContent();
	toggleAttackDefenseEffectiveButtons();
	updateDefenseTest();
}

const effectivenessTest = () => {
	testStyle = 1;
	toggleEffectiveness();
	toggleAttackContent();
	toggleAttackDefenseEffectiveButtons();
	updateEffectivenessTest();
}

const mixedAttackTest = () => {
	mixed = true;
	testStyle = -1;
	toggleAttackContent();
	toggleAttackDefenseEffectiveButtons();
	updateMixedTest();
}

const playAttackTester = () => {
	toggleAttackDefenseEffectiveButtons();
	toggleBackStartMenu();
	currentScoreAttack = 0;
}

setupAttackTestParameters();
