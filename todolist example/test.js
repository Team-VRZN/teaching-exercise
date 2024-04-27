function appendListItem() {
    let container = document.querySelector(".list-container");
    let inputValue = document.querySelector(".enter-input");
    const newSection = document.createElement('li');
    newSection.textContent = inputValue.value;
    newSection.classList.add('section');
    container.append(newSection);
}
