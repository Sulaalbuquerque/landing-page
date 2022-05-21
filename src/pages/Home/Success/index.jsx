import { ContainerSuccess } from "./style"

export const Success = ({ successIsVisible, setSuccessIsVisible }) => {

  return (
    <>
      <ContainerSuccess isVisibleSuccess={successIsVisible}>
        <div className="popup">
          <div className="close">
            <img 
              onClick={() => setSuccessIsVisible(false)}
              src="assets/svgs/close_btn.svg" 
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