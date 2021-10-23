export function PaginationOptions({lower, raise}){

return(

    <div className='buttonsContainer' >
        <button onClick={lower} className='buttonss'>Previous 6</button>
        <button onClick={raise} className='buttonss'>Next 6</button>
    </div>
    )
}