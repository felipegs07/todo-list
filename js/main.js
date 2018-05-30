//GLOBALVARS/DOM OBJECTS
let btnAdd = document.querySelector('#btnAdd');


//EVENTS
btnAdd.addEventListener('click', () => {
    console.log('enter on event');
    let card = document.querySelector('#cardBody');
    let objTodo = `
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <div class="input-group-text">
                    <input type="checkbox" aria-label="Checkbox for following text input">
                </div>
            </div>
            <input type="text" class="form-control" aria-label="Text input with checkbox" value="">
        </div>
    `;
    card.innerHTML += objTodo;
})
