import './BackThisProject.css';
import { RewardDto } from "../../../../dto/reward.dto";
import RewardSelect from './RewardSelect/RewardSelect';


function BackThisProject(props: {
    rewards: RewardDto[]
}) {
    return (
        <div id='back-this-project'>
             <h2>Back this project</h2>
             <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
             {props.rewards.map((reward, i) => <RewardSelect key={i} heading={reward.heading} description={reward.description} pledgeNumber={reward.pledgeNumber} stockNumber={reward.stockNumber}></RewardSelect>)}
        </div>
    )
}

export default BackThisProject;
