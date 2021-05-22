import React from 'react'
import {Disco} from './Disco'

interface Props{
    disco : Disco
}

const DiscoItem = ({disco}: Props) => {
    return (
            <div>
                    <h1>{disco.title}</h1>
                    <p>{disco.descripcion}</p>
                    <p>{disco.url}</p>
            </div>
    )
}

export default DiscoItem
