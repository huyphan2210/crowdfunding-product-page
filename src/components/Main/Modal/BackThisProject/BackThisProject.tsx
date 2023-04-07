import './BackThisProject.css';
import { RewardDto } from "../../../../dto/reward.dto";
import RewardSelect from './RewardSelect/RewardSelect';
import { MouseEventHandler } from 'react';


function BackThisProject(props: {
    rewards: RewardDto[],
    handlePledge: MouseEventHandler
}) {
    return (
        <div id='back-this-project'>
             <h2>Back this project</h2>
             <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
             {props.rewards.map((reward, i) => <RewardSelect handlePledge={props.handlePledge} key={i} heading={reward.heading} description={reward.description} pledgeNumber={reward.pledgeNumber} stockNumber={reward.stockNumber}></RewardSelect>)}
        </div>
    )
}

export default BackThisProject;
