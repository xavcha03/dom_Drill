//params
let franchiseToFind = "Fast and Furious";

//Object de référence
let ulElt = document.querySelector("ul");
let children = [];
if (ulElt.hasChildNodes()) {
	children = ulElt.childNodes;
}

//Delete duplicate nodes
cleanList(children);

//put the important franchise to top of list
putImportantAtFirst(ulElt, franchiseToFind);

//Ajout d'un event au body
addEventToBody();

//Create new diw before list
let newDiv = document.createElement("div");
//Création de l'élément Select
let selectElt = document.createElement("select");
//creation des option du select
let option = document.createElement("option");
option.value = "important franchises";
option.innerHTML = "important franchises";
selectElt.appendChild(option);
option = document.createElement("option");
option.value = "normal franchises";
option.innerHTML = "normal franchises";
selectElt.appendChild(option);

//Delete duplicate nodes
cleanList(children);
//Ajout de l'eventListenner sur le select
selectElt.addEventListener("change", (e) => {
	for (child of children) {
		if (
			child.classList.contains("important") &&
			e.target.value == "important franchises"
		) {
			child.style.visibility = "visible";
		} else if (
			!child.classList.contains("important") &&
			e.target.value == "normal franchises"
		) {
			child.style.visibility = "visible";
		} else {
			child.style.visibility = "hidden";
		}
	}
});

newDiv.appendChild(selectElt);

ulElt.parentNode.insertBefore(newDiv, ulElt);

//Loop on children
for (child of children) {
	//Test if current element of loop is a node
	if (child.nodeType === 1) {
		//Test if current element contain the franchiseToFind
		let importantFranchise = null;
		if (child.innerHTML === franchiseToFind) {
			importantFranchise = child;
			importantFranchise.classList.add("important");
		}

		//Add eventListener on every item
		child.addEventListener("click", (e) => {
			let eTargetContent = e.target.innerHTML;

			//Alert on click and test if clicked element is the franchise to find
			let textToInsert = null;
			if (eTargetContent == franchiseToFind) {
				textToInsert =
					"The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.";
			} else {
				textToInsert = eTargetContent;
			}
			alert(textToInsert);
		});
	}
}

//function recoit un élément du Dom et change aléatoirement l'ordre
function randomElt(parentElt) {
	children = parentElt.childNodes;
	//parcours et mélange
	for (let i = 0; i < children.length; i++) {
		let randNum = Math.round(Math.random() * (children.length - 1));
		console.log(randNum);
		if (children[i].nodeType == 1) {
			parentElt.prepend(children[randNum]);
		}
	}
}

//place l'élément chercher en premiere position
function putImportantAtFirst(parentElement, eltToSearch) {
	let listElt = parentElement.children;
	let children = console.log(listElt);

	for (elt of listElt) {
		if (elt.innerHTML === eltToSearch) {
			//deplacement to the first element
			parentElement.prepend(elt);
		}
	}
}

//Reçoit une liste de node et supprime les élément en double
function cleanList(listElt) {
	let nodesArr = listElt;
	//Premier parcours
	for (let i = 0; i < nodesArr.length; i++) {
		//si l'élement courant n'est pas un node, on le supprime
		if (nodesArr[i].nodeType != 1) nodesArr[i].remove();

		//second parcour depuis la position courrante
		for (let j = i + 1; j < nodesArr.length - 1; j++) {
			//test si les 2 elements sont identique
			if (nodesArr[i].innerHTML === nodesArr[j].innerHTML) {
				nodesArr[j].remove();
			}
		}
	}
}

function addEventToBody() {
	let bodyElt = document.querySelector("body");

	bodyElt.addEventListener("keyup", (e) => {
		switch (e.key) {
			case "r":
				randomElt(ulElt);
				putImportantAtFirst(ulElt, franchiseToFind);
				break;
			case "d":
				let importantFranchise = [...children].find((elt) => {
					return elt.innerHTML == franchiseToFind;
				});

				let clone = importantFranchise.cloneNode(true);
				console.log(clone);
				break;
		}
	});
}
