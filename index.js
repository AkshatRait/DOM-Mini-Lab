const headingOne = document.querySelector('h1');
const contentForHead = headingOne.textContent = "Some Text";
const originalHeaderText = headingOne.textContent;
const hideH1Btn = document.querySelector("button");

let buttonVisibility = false;
const hideBtnFnc = () => {
    if (!buttonVisibility) {
        buttonVisibility = true;
        return headingOne.style.display = "none";
    } else {
        buttonVisibility = false;
        headingOne.textContent = originalHeaderText;
         return headingOne.style.display = "block";
    }
    
}

// const checkIfTrue = () =>{
//     if(headingOne.style.display == "none"){
//         hideH1Btn.textContent = "Unhide";
//     }else if(headingOne.style.display == "block"){
//         hideH1Btn.textContent = "Hide";
//     }
// }

hideH1Btn.addEventListener("click", hideBtnFnc);
// hideH1Fnc.addEventListener("click", checkIfTrue)