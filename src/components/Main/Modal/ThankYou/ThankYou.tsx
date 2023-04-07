import thankYou from '../../../../assets/images/icon-check.svg';
import './ThankYou.css'

function ThankYou() {
    function closeModal() {
        const heading = document.getElementById('heading');
        const modal = document.getElementById('modal');
        const overlay = document.getElementById('overlay');
        if (modal && overlay && heading) {
            heading.style.zIndex = '';
            modal.style.display = '';
            overlay.style.display = '';
        }
    }
    return (
        <div id='thank-you'>
            <img src={thankYou} alt='Completed'></img>
            <h2>Thank you for your support!</h2>
            <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
            <button type='button' onClick={closeModal}>Got it!</button>
        </div>
    )
}

export default ThankYou;
