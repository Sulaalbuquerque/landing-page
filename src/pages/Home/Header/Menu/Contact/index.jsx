import { useContext } from "react"

import { ContactIsVisibleContext } from '../../../../../contexts/ContactIsVisibleContext'

import { ContainerContact } from "./style"

export const Contact = () => {

  const { contactIsVisible } = useContext(ContactIsVisibleContext)

  return (
    <>
      <ContainerContact isVisibleContact={contactIsVisible}>

        <div className="arrow"></div>

        <form>
          <div className="main">
            <div className="informations">
              <div className="option name">
                <label>Nome<div className="asterisk">*</div></label>
                <input type="text" placeholder="Seu nome"/>
              </div>

              <div className="option email">
                <label>E-mail<div className="asterisk">*</div></label>
                <input type="text" placeholder="Seu e-mail"/>
              </div>
            </div>

            <div className="option msg">
              <label>Mensagem<div className="asterisk">*</div></label>
              <textarea placeholder="Sua mensagem" rows={7}/>
            </div>
          </div>

          <p>* Campos necessários</p>

          <button type="submit">Enviar mensagem</button>
        </form>
      </ContainerContact>
    </>
  )
}