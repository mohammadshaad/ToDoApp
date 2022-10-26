const removeDiv = document.querySelector('.todos-added');
const deleteBtn = document.querySelector('.todos-added-span');

deleteBtn.addEventListener('click', () => {
    removeDiv.removeChild('div');
});
