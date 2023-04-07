import { MouseEvent, KeyboardEvent, ChangeEvent, useState } from "react";

import { RewardDto } from "../../../../../dto/reward.dto";

import './RewardSelect.css';

import CustomCheckbox from "./CustomCheckbox/CustomCheckbox";

function RewardSelect(props: RewardDto) { 
    const [pledge, setPledge] = useState(0);

    function hanldeSelectReward(e: MouseEvent<HTMLDivElement>) {
        if (props.stockNumber === 0) {
            e.preventDefault();
            return;
        }

        // Outline Handler
        if (e.currentTarget.parentElement) {
            const rewardSelections = document.getElementsByClassName('reward-select');
            for (let i = 0; i < rewardSelections.length; i++) {
                rewardSelections[i].setAttribute('style', '');
                rewardSelections[i].getElementsByClassName('proceed')[0].setAttribute('style', '');
            }

            e.currentTarget.parentElement.style.outlineColor = 'var(--moderate-cyan)';
            e.currentTarget.parentElement.style.outlineWidth = '0.2rem';
            e.currentTarget.parentElement.style.outlineStyle = 'solid';

            // Handling content justification of proceed class 
            const aspectRatio = window.innerWidth / window.innerHeight;
            if (document.getElementsByClassName('proceed')[0] === e.currentTarget.parentElement.getElementsByClassName('proceed')[0]) {
                if (aspectRatio >= 1) {
                    document.getElementsByClassName('proceed')[0].setAttribute('style', 'display: flex; justify-content: end;');
                } else {
                    document.getElementsByClassName('proceed')[0].setAttribute('style', 'display: flex; justify-content: center;');
                }
                
            } else {
                if (aspectRatio >= 1) {
                    e.currentTarget.parentElement.getElementsByClassName('proceed')[0].setAttribute('style', 'display: flex;');
                } else {
                    e.currentTarget.parentElement.getElementsByClassName('proceed')[0].setAttribute('style', 'display: block;');
                }
                
            }
        }
        

        // Checkbox Handler
        const checkboxes = document.getElementsByClassName('checkbox');
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].getElementsByClassName('checked')[0].setAttribute('style', '');
        }
        e.currentTarget.getElementsByClassName('checked')[0].setAttribute('style', 'display: block;');
    }

    function preventInvalidLetters(e: KeyboardEvent<HTMLInputElement>, regexr: RegExp) {
        if (!regexr.test(e.key) && e.key !== 'Tab' && e.key !== 'Backspace' && e.key !== 'Delete' && e.key !== 'F5') {
            e.preventDefault();
        }    
    }

    function handlePledge(e: ChangeEvent<HTMLInputElement>) {
        if (!isNaN(parseInt(e.currentTarget.value))) {
            setPledge(parseInt(e.currentTarget.value));
        } else {
            setPledge(0);
        }
        
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
            <div className="proceed">
                {props.pledgeNumber ? <p>Enter your pledge</p> : ''}
                <div className="proceed-actions">
                    {props.pledgeNumber ? <input type="text" placeholder={String(props.pledgeNumber)} onKeyDown={(e) => preventInvalidLetters(e, /^[0-9]+$/)} onChange={handlePledge}></input> : ''}
                    <button type="button" disabled={props.pledgeNumber ? pledge < props.pledgeNumber : !props.pledgeNumber ? false : true} onClick={props.handlePledge}>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default RewardSelect;
