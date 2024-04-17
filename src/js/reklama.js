let modalOpened = false;

window.addEventListener('scroll', function () {
    if (!modalOpened && window.scrollY + window.innerHeight >= document.body.scrollHeight) {
        openModal();
        modalOpened = true;
    }
});

function openModal() {
    let modal = document.createElement('div');
    modal.classList.add('modals');

    modal.innerHTML = `
    <div class="modal-content">
    <div style=" display: flex;
    justify-content: space-between;
    margin-bottom: 10px;" class="modal-box-but">
    <p style="color: #FAFAFA;
    font-size: 16px;
    text-align: center;" class="modal-p">Our project</p>
    <button style="background-color: #FAFAFA;
    height: 24px;
    width: 24px;
    color: black;
    border-radius: 50%;
    border: 2px solid #FAFAFA;" class="close">X</button>
    </div>
    <a href="https://gladja.github.io/team-project/index.html" target="_blank"><img style="border-radius: 3%" src="/img/project.png" loading="eager" alt="Image" width="256"></a>
    
</div>
    `;

    document.body.appendChild(modal);

    let closeButton = modal.querySelector('.close');

    closeButton.addEventListener('click', function () {
        modal.classList.add('close');
    });

}

export { openModal };