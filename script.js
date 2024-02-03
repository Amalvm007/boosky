// selecting popup overlay and button
var popupOverlay =document.querySelector(".popup-overlay")
var popupBox = document.querySelector(".popup-box")
var addPopupButton = document.getElementById("add-popup-button")

// function
addPopupButton.addEventListener("click",function(){
  popupOverlay.style.display="block"
  popupBox.style.display="block"
  
})

// selection of cancel button
var cancelButton = document.getElementById("cancel-button")

// function
cancelButton.addEventListener("click",function(event){
    event.preventDefault()
    popupOverlay.style.display="none"
    popupBox.style.display="none"

})

// selection of container , add-button, book-title-input , book-author-input , book-discription

var container  = document.querySelector(".container")
var  addbutton = document.getElementById("add-button")
var titleInput = document.getElementById("book-title-input")
var authorInput = document.getElementById("book-author-input")
var discriptionInput = document.getElementById("book-discription")


// function for add 
addbutton.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML= `<h2>${titleInput.value}</h2>
    <h5>${authorInput.value}</h5>
    <p>${discriptionInput.value}</p>
    <button onclick="deleteBook(event)">Delete</button>` 
    container.append(div)

    popupOverlay.style.display="none"
    popupBox.style.display="none"
})

// deleteBook function

function deleteBook(event){
    event.target.parentElement.remove()

}