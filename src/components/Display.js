import React from 'react'
import { StyledDisplay } from './styles/StyledDisplay'

const Display = ({ gameOver, text }) => <div>
    <StyledDisplay> { text } </StyledDisplay>
</div>

export default Display