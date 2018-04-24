import $ from 'jquery';

class Modal {
    constructor() {
        this.openModalBtn = $('.open-modal');
        this.modal = $('.modal');
        this.closeModalBtn = $('.modal__close');
        this.events();
    }

    events() {
        this.openModalBtn.click(this.openModal.bind(this));
        this.closeModalBtn.click(this.closeModal.bind(this));
        $(document).keyup(this.keyPressHandler.bind(this));
    }

    keyPressHandler() {
        if (e.keyCode == 27) {
            this.closeModal();
        }
    }
    
    closeModal() {
        console.log('close modal');
        this.modal.removeClass('modal--is-visible');
    }
    
    openModal() {
        console.log('open modal');        
        this.modal.addClass('modal--is-visible');
        return false;
    }
}

export default Modal;