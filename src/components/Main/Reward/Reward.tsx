import './Reward.css'
import { RewardDto } from '../../../dto/reward.dto'

function Reward(props: RewardDto) {
    return (
        <div className={props.stockNumber === 0 ? 'reward disabled' : 'reward'}>
            <hgroup>
                <h2>{props.heading}</h2>
                <span>Pledge ${props.pledgeNumber} or more</span>
            </hgroup>
            <p>{props.description}</p>
            <div className='stock-and-action'>
                <h1>{props.stockNumber} <span>left</span></h1>
                <button type="button" className='reward-btn' disabled={props.stockNumber === 0}>{props.stockNumber === 0 ? 'Out of stock' : 'Select Reward'}</button>
            </div>
        </div>
    )
}   

export default Reward;
