export function PaginationOptions({lower, raise}){

return(

    <div className='buttonsContainer' >
        <button onClick={(e) => lower(e)} className='buttonss'>Previous 6</button>
        <button onClick={(e) => raise(e)} className='buttonss'>Next 6</button>
    </div>
    )
}