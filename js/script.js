let allPost = document.querySelector(".allPost")
let name = document.querySelector(".name")
let caption = document.querySelector(".caption")
let mybutton = document.querySelector(".mybutton")
let updateButton = document.querySelector(".updateButton")

let arr = []
let indexStore;

mybutton.addEventListener("click", () => {
  arr.push({
    name: name.value,
    caption: caption.value
  })
  name.value = ""
  caption.value = ""
  allPost.innerHTML = ""

  display()
})
updateButton.addEventListener("click", () => {

  arr[indexStore].name = name.value
  arr[indexStore].caption = caption.value
  // console.log(arr);
  allPost.innerHTML = ""
  display()
  name.value = ""
  caption.value = ""
  updateButton.style.display = "none"
  mybutton.style.display = "inline-block"
})

function display() {
  arr.map(item => {
    allPost.innerHTML += `<div class="card mt-5" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.caption}</p>
          <button class="btn btn-primary edit">Edit</button>
          <button class="btn btn-danger delete">Delete</button>
        </div>
      </div>`
  })
  // delete button start
  let deleteButton = document.querySelectorAll(".delete")
  let convertDeleleButton = Array.from(deleteButton)
  convertDeleleButton.map((allButton, index) => {
    allButton.addEventListener("click", () => {

      arr.splice(index, 1)
      allPost.innerHTML = ""
      display()
    })
  })
  // delete button end

  let editButton = document.querySelectorAll(".edit")
  let convertEditButton = Array.from(editButton)
  convertEditButton.map((editButton, index) => {
    editButton.addEventListener("click", () => {
      indexStore = index
      name.value = arr[index].name
      caption.value = arr[index].caption
      updateButton.style.display = "inline-block"
      mybutton.style.display = "none"
    })
  })
}
