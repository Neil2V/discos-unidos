import React, {useEffect,useState} from 'react'
import {Disco} from './Disco'
import * as discoService from './DiscoService'
import DiscoItem from './DiscoItem'

const DiscosList = () => {

    const [discos, setDiscos] = useState<Disco[]>([])

    const loadDiscos = async () =>{
        const res = await discoService.getDiscos()
        setDiscos(res.data)
    }

    useEffect(() => {
        loadDiscos()
      }, [])

    return (
        <div>
            {discos.map((disco) =>{
                return <DiscoItem disco={disco}/>
            })
            }
        </div>
    )
}

export default DiscosList