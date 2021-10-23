import './modal.css'


export default function({ message, show, hideFunc }) {

  return (
    <div className={show ? 'showModal' : 'hideModal'} onClick={hideFunc}>
      <div className='modalView'>
        <div className='modalDialog'>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}
