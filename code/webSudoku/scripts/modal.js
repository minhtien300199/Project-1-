document.addEventListener('DOMContentLoaded', function () {
    var overlay = document.getElementsByClassName('overlay')[0];
    console.log(overlay);
    document.getElementById('selector').addEventListener('click', renderLevelSelect);
    document.getElementById('startForm').addEventListener('submit', handleSubmit);
});
function handleSubmit(event) {
    event.preventDefault();
    // console.log(event);
    if (document.getElementById('selector').selectedIndex !== 0) {
                hideModal(document.getElementsByClassName('overlay')[0]);
                matrixGenerator();
                startTimer();                                    
                render(sudokuArray);
                renderNum(max);
                renderDrafts(max);
            
    }
    return false;
}

function showModal() {
    //TODO: show modal
    var overlay = document.getElementsByClassName('overlay')[0];
    overlay.classList.remove('hidden');
}

function hideModal(overlay) {
    //TODO: hide modal
    overlay.classList.add('hidden');

}