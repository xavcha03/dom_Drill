//Object de référence
let ulElt = document.querySelector("ul");
let children = [];
if (ulElt.hasChildNodes()) {
  children = ulElt.childNodes;
  console.log(children);
}

//Loop on children
for (child of children) {
  console.log(child);
}
