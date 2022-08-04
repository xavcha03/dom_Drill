//params
let franchiseToFind = "Fast and Furious";

//Object de référence
let ulElt = document.querySelector("ul");
let children = [];
if (ulElt.hasChildNodes()) {
  children = ulElt.childNodes;
  console.log(children);
}

//Loop on children
for (child of children) {
  //Test if current element of loop is a node
  if (child.nodeType === 1) console.log(child);

  //Test if current element contain the franchiseToFind
  let importantFranchise = null;
  if (child.innerHTML === franchiseToFind) {
    importantFranchise = child;
    importantFranchise.classList.add("important");
  }

  //Add eventListener on every item
  child.addEventListener("click", (e) => alert(e.target.innerHTML));
}
