export interface CardModel {
    id: number;
    title: string;
    desc: string;
}

export const deck: CardModel[] = [
    { id: 1, title: 'Plant Beacons', desc: 'ACTION: Begin planting beacons while within 6" of a battlefield edge.\nEnd of round: 1VP for each unit planting beacons per battlefield edge' },
    { id: 2, title: 'Outflank', desc: 'End of round: for each battlefield corner after the first, which you have a unit within 9", you score 1VP' },
    { id: 3, title: 'Assasinate', desc: 'Whenever you destroy an enemy hero model you score 1VP If that model had tough 6 or higher you score 1 more End of round: if there are no enemy hero models on the battlefield, you score 1 VP (max 3)' },
    { id: 4, title: 'Bloodbath', desc: 'End of round, score 1 VP for each of the following thats true (Max 3):\n- If you destroyed an enemy model with tough 6\n- If you destroyed an enemy model with tough 12\n- If you destroyed an enemy multi model unit' },
    { id: 5, title: 'Cleanse Structure', desc: 'ACTION: Begin cleansing a cover terrain\nEnd of round: 1 VP for each cleansed terrain you control (max 3)' },
    { id: 6, title: 'Prized Prey', desc: 'When you draw this card, your opponent selects two of their models. you select one of their models\nWhenever you destroy a model selected this way, score 1 VP' },
    { id: 7, title: 'Claim Land', desc: 'End of round:\n- if you have one or more units beyond the middle of the battlefield, score 1 VP\n- If you have one or more units in the enemy deployment zone, score 1 VP' },
    { id: 8, title: 'Raze Objective', desc: 'ACTION: Raze an objective. Razed objectives cannot be scored off this turn\nEnd of turn score 1 VP for each zone in which your units are razing an objective (max 3):\n- Your deployment zone\n- No mans land\n- Your opponents deployment zone' },
    { id: 9, title: 'Hold the Line', desc: 'End of round:\n- score 2 VP. For each objective you controlled at the start of the round, that you no longer control, score 1 less.\nNo minus points fuck you.' },
    { id: 10, title: 'Defend Stronghold', desc: 'End of round:\n- If you control the objective in your deployment zone, score 1VP' },
    { id: 11, title: 'Storm Enemy Objective', desc: 'If this is drawn during the first round, reroll it\nEnd of round: For each objective you seized this turn, gain 1 VP.' },
    { id: 12, title: 'Sabotage', desc: 'ACTION: Begin sabotaging a cover terrain.\nEnd of round:\n- If you sabotaged a terrain wholly within your opponents board half, score 1 VP\n- If you sabotaged a terrain wholly within your board half, score 1 VP' },
    { id: 13, title: 'Overwhelming Force', desc: 'Each time you destroy an enemy unit within 3" of an objective this round, score 1VP' },
    { id: 14, title: 'Combat Expertise', desc: 'End of round:\n- If you won a melee combat by 3 or more wounds, score 1 VP\n- If you dealt 5 or more wounds in a single shooting attack, score 1 VP' },
    { id: 15, title: 'Cull the Horde', desc: 'End of round, score 1 VP for each completed this round (max 3):\n- You dealt 15 or more wounds\n- You dealt 20 or more wounds\n- You dealt 25 or more wounds\nNOT COUNTING OVERKILL' },
    { id: 16, title: 'Secure Territory', desc: 'If drawn during the first round, reroll this\n End of round:\n- If no enemy unit is in your battlefield half, score 1 VP\n- If no enemy unit is in your deployment zone, score 1 VP.' },
    { id: 17, title: 'Recover Assets', desc: 'When drawn: You opponent places 3 markers more than 6" from their deployment zone, and more than 18" from eachother.\nACTION: Begin recovering an asset within 1". Ambushing units can score this.\nEnd of round: for each objective you`re recovering, score 1 VP. (Max 3)' },
    { id: 18, title: 'Area Denial', desc: 'End of round:\n- If there are no enemy units with 12" of the battlefield center, score 1 VP\n- If there are no enemy units with 6" of the battlefield center, score 1 VP' },
    { id: 19, title: 'Secure no mans land', desc: 'End of round:\n- If you control one or more objectives in no mans land, score 1 VP \n- If you control two or more objectives in no mans land, score 1 VP\n' },
    { id: 20, title: 'Surround', desc: 'End of round:\n- If your warlord is on the battlefield, score 1 VP\n- If the opponent warlord is not on the battlefield, score 1 VP' },
];