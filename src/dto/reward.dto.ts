import { MouseEventHandler } from "react";

interface RewardDto {
    heading: string,
    pledgeNumber?: number,
    stockNumber?: number,
    description: string,
    handlePledge?: MouseEventHandler,
    isCompleted?: boolean
}

export type { RewardDto };
