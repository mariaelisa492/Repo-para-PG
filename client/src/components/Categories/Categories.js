import React from "react";


export function Categories(){

    const categories = {
        Guitars:[
            'Electric Guitars',
            'Acoustic Guitars',
            'Electro-Acoustic Guitars',
            'Nylon/Classical Guitars'
        ],
        Percussion:[
            'Drum Kits',
            'Digital Drums',
            'Electrical Drum Kits',
            'Tropial',
            'Other'
        ],
        Pianos:[
            'Grand Piano',
            'Vertical Piano',
            'Electrical Piano'
        ],
        Keyboards:[
            'Digital Keyboards'
        ],
        Bass:[
            'Electric Bass', 
            'Acoustic-Electric Bass'
        ]
    }

    let arr = []

    for(let i in categories){
        arr.push(
            <div>
                <h2 className='mainCategory'>
                    {i}
                </h2>
                <ul className='secondaryCategory'>
                    {categories[i].map(e => <li>{e}</li>)}
                </ul>
            </div>
        )
    }
    return(
        arr
    )
}