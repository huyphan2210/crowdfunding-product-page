import { MouseEvent } from "react";

import { RewardDto } from "../../../../../dto/reward.dto";

import './RewardSelect.css';

import CustomCheckbox from "./CustomCheckbox/CustomCheckbox";

function RewardSelect(props: RewardDto) { 
    function hanldeSelectReward(e: MouseEvent<HTMLDivElement>) {
        const checkboxes = document.getElementsByClassName('checkbox');
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].getElementsByClassName('checked')[0].setAttribute('style', '');
        }

        e.currentTarget.getElementsByClassName('checked')[0].setAttribute('style', 'display: block;');
        
    }
    return (
        <div className={props.stockNumber === 0 ? 'reward-select disabled' : 'reward-select'}>
            <div className="select-section" onClick={hanldeSelectReward}>
                <div className="heading-section">  
                    <hgroup>
                        <CustomCheckbox></CustomCheckbox> 
                        <h3>{props.heading}</h3>
                        {props.pledgeNumber ? <h3 className="pledge">Pledge ${props.pledgeNumber} or more</h3> : ''}
                    </hgroup>
                    {props.stockNumber || props.stockNumber === 0 ? <h3 className="stock">{props.stockNumber} <span>left</span></h3> : ''}
                </div>
                <p>{props.description}</p>
                {props.stockNumber || props.stockNumber === 0 ? <h3 className="stock-mobile">{props.stockNumber} <span>left</span></h3> : ''}
            </div>
            
        </div>
    )
}

export default RewardSelect;
