export function PaginationOptions({lower, raise}){

return(

    <div className='buttonsContainer' >
        <span onClick={lower} className='buttonss'>Previous 6</span>
        <span onClick={raise} className='buttonss'>Next 6</span>
    </div>
    )
}