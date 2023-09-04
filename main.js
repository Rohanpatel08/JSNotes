
let addBtn = document.getElementById('addBtn')
showData();

function showData(){
    let notes;
    if (localStorage.getItem('notes') == null) {
        notes = [];
    }else{
        notes = JSON.parse(localStorage.getItem('notes'))
    }
    let items = "";

    notes.forEach((element,index) => {
        items += `
            <div class="noteCard card mx-2 my-2" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Note ${index + 1}</h5>
                    <p class="card-text">${element}</p>
                    <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
                    <button id="${index}" onclick="editNote(this.id)" class="btn btn-primary">Edit</button>
                </div>
            </div>
        `;
    });
    noteList = document.getElementById('notes');
    if (notes.length != 0) {
        noteList.innerHTML = items;
      } else {
        noteList.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
      }
    
}


addBtn.addEventListener('click', ()=>{
    console.log("clicked...")
    let inputTxt = document.getElementById('addTxt').value
    let notes;
    if (inputTxt == "") {
        alert("please enter details in note.")
    }else{
        if (localStorage.getItem('notes') == null) {
            notes = [];
        }else{
            notes = JSON.parse(localStorage.getItem('notes'))
        }
        notes.push(inputTxt)
        localStorage.setItem('notes', JSON.stringify(notes));
        inputTxt = "";
        showData();
    }
})


function deleteNote(index){
    let notes;
    if (localStorage.getItem('notes') == null) {
        notes = [];
    }else{
        notes = JSON.parse(localStorage.getItem('notes'));
    }
    notes.splice(index,1);
    localStorage.setItem('notes', JSON.stringify(notes));
    showData();
}

let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})




// let searchTxt = document.getElementById('searchTxt')

// searchTxt.addEventListener('input', ()=>{
//     let inputTxt = searchTxt.value;
//     console.log(inputTxt);
//     let noteCards = document.getElementsByClassName('card');
//     Array.from(noteCards).forEach(function(element){
//         let cardTxt = element.getElementsByTagName("p")[0].innerText;
//         console.log(cardTxt);
//         if (cardTxt.includes(inputTxt)) {
//             element.style.display = "block";
            
//         }else{
//             element.style.display = "none";
//         }
        
//     })
// })