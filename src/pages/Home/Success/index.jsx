import imgGameCharacter from '../../../../assets/svgs/image6.svg'
import iconClose from '../../../../assets/svgs/close_btn.svg'

import { ContainerSuccess } from "./style"

export const Success = ({ successIsVisible, 
                          setSuccessIsVisible }) => {

  return (
    <>
      <ContainerSuccess isVisibleSuccess={successIsVisible}>
        
        <div className="popup">

          <div className="close">
            <img 
              onClick={() => setSuccessIsVisible(false)}
              src={iconClose} 
            />
          </div>

          <div className="popup-content">

            <div className="text">
              <hr className="left" />
              <p>
                Pedido realizado 
                <br/> 
                com sucesso!
              </p>
              <hr className="right"/>
            </div>

            <img src={imgGameCharacter} />
            
          </div>

        </div>

      </ContainerSuccess>
    </>
  )
}