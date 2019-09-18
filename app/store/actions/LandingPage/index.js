import { ActionType } from '../../index';

export const historyUser = res => { 
    return {
        type: ActionType.HistorySearch, payload: res 
    }
};