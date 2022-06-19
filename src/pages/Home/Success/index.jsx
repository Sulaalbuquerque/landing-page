import { useContext } from "react"

import { SuccessIsVisibleContext } from '../../../contexts/SuccessIsVisibleContext'

import imgGameCharacter from '../../../../public/assets/svgs/image6.svg'
import iconClose from '../../../../public/assets/svgs/close_btn.svg'

import { ContainerSuccess } from "./style"

export const Success = () => {

  const { successIsVisible, setSuccessIsVisible } = useContext(SuccessIsVisibleContext)

  const showScrollSuccess = () => {
    document.body.style.overflow = 'auto'
  }

  const closeSuccess = () => {
    setSuccessIsVisible(false)
    showScrollSuccess()
  }

  return (
    <>
      <ContainerSuccess isVisibleSuccess={successIsVisible}>
        
        <div className="popup">

          <div className="close">
            <img 
              onClick={closeSuccess}
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