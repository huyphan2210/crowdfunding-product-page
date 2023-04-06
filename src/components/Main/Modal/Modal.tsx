import BackThisProject from "./BackThisProject/BackThisProject";
import ThankYou from "./ThankYou/ThankYou";

import { RewardDto } from "../../../dto/reward.dto";
import closeMenu from '../../../assets/images/icon-close-modal.svg'

import './Modal.css'

function Modal(props: {
    rewards: RewardDto[]
}) {
    function closeModal() {
        const overlay = document.getElementById('overlay');
        const modal = document.getElementById('modal');
        if (overlay) {
            overlay.style.display = '';
        }
        if (modal) {
            modal.style.display = '';
        }
    }
    return (
        <section id="modal">
            <img src={closeMenu} alt="Close" onClick={closeModal}></img>
            <BackThisProject rewards={props.rewards}></BackThisProject>
        </section>
    )
}

export default Modal;