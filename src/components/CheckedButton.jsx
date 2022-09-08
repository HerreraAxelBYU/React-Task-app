
export function CheckedButton()  {

    function ButtonChecked() {
        let imagen = document.querySelector('#chequeado');
        imagen.classList.toggle('hidden')
        console.log(imagen)
        console.log('Funciona')
    }

    return (

        <div>
            <button className='w-[20px] h-[20px] p-1 relative border rounded-full' id="botoncito"
            onClick={ ButtonChecked }>
            </button>
            <div className='absolute top-5 left-5 hidden' id="chequeado">
                <img src="./src/assets/icon-check.svg" alt="" className='w-[18px] h-[14px] '/>
            </div>
            
        </div>
      
    )
}

