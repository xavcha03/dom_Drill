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

//Random the content
randomElt(ulElt);

//put the important franchise to top of list
putImportantAtFirst(ulElt, franchiseToFind);



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
		let randNum = Math.round(Math.random() * children.length);
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
			console.log(listElt);
			parentElement.prepend(elt);
		}
	}
}

//Reçoit une liste de node et supprime les élément en double
function cleanList(listElt) {
	let nodesArr = [...listElt];
	//Premier parcours
	for (let i = 0; i < nodesArr.length; i++) {
		let currentContent = nodesArr[i].innerHTML;
		//second parcour depuis la position courrante
		for (let j = i + 1; j < nodesArr.length - 1; j++) {
			//test si les 2 elements sont identique
			if (nodesArr[i].innerHTML === nodesArr[j].innerHTML) {
				nodesArr[j].remove();
			}
		}
	}
}
