export const STAGE_WIDTH = 12
export const STAGE_HEIGHT = 20

/*
The stage is an array of arrays. 
create an array given for each height, and in each of those
arrays, create an array with stage width.

For each cell, we fill it depending on its property: 0 , clear or 1, shape

@return a 2d Array of cells
*/
export const createStage = () =>
    Array.from(Array(STAGE_HEIGHT), () =>
        new Array(STAGE_WIDTH).fill([0, "clear"])
    )


