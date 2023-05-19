var itemDeleteButton = document.querySelectorAll(".deleteItemButton");
var delteePopup = document.querySelector(".deletePopupContainer");
var cancelButton = document.querySelector(".cancel-button");
var deleteText = document.querySelector(".delete-text");
var deleteBtn = document.querySelector(".btn-delete-submit");

for(let i = 0; i < itemDeleteButton.length; i++){
    itemDeleteButton[i].addEventListener("click", function(){
        delteePopup.classList.toggle("deletePopupContainer-active");
        deleteText.innerHTML = "delete " + this.value + " ?";
        deleteBtn.setAttribute("value", this.value);
    })
}

cancelButton.addEventListener("click", function(){
    delteePopup.classList.remove("deletePopupContainer-active");
})