import { ContainerSuccess } from "./style"

export const Success = (/* { successIsVisible, setSuccessIsVisible } */) => {
    
      return (
        <>
          <ContainerSuccess /* isVisible={successIsVisible} */>
            <div className="popup">
              <div className="close">
                <img 
                  src="assets/svgs/close_btn.svg" 
                  /* onClick={() => setSuccessIsVisible(false)} */
                />
              </div>
              <div className="popup-content">
                <div className="text">
                  <p>
                    Pedido realizado 
                    <br/> 
                    com sucesso!
                  </p>
                </div>
                <img src="assets/svgs/image6.svg" />
              </div>
            </div>
          </ContainerSuccess>
        </>
      )
  }