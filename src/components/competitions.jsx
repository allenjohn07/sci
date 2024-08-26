import React from 'react'
import CardComponent from './card';
import comp1 from "../assets/sci-kumaraguru.jpg"
import comp2 from "../assets/sci-tamilnadu.jpg"
import comp3 from "../assets/sci-selam.jpg"

const Competitions = ({title}) => {
    return (
        <>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight border-b pb-2">
                {title}
            </h4>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                <CardComponent compImg={comp1} name={"Kumaraguru Open 2024"} />
                <CardComponent compImg={comp2} name={"TamilNadu Cube Challenge 2024"} />
                <CardComponent compImg={comp3} name={"Selam Summer Open 2024"} />
            </div>
        </>
    )
}

export default Competitions