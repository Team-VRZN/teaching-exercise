function appendVegetables() {
    let container = document.querySelector(".vegetable-list");
    let inputValue = document.querySelector(".input-list");
    const newSection = document.createElement('li');
    newSection.textContent = inputValue.value;
    newSection.classList.add('section');
    container.append(newSection);
    inputValue.value = "";
}

function appendFruit() {
    let container = document.querySelector(".fruit-list");
    let inputValue = document.querySelector(".input-list");
    const newSection = document.createElement('li');
    newSection.textContent = inputValue.value;
    newSection.classList.add('section');
    container.append(newSection);
    inputValue.value = "";
}
