import React from 'react'
import { StyledCell } from './styles/StyledCell'
import { TETROMINOS } from '../tetrominos'

/*
@params type the type of tetrominos
*/
 const Cell = ({ type }) => <div>
     <StyledCell type={'L'} color={TETROMINOS['L'].color}>  </StyledCell>
 </div>

 export default Cell