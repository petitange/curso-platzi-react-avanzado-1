import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../containers/RegisterMutation'

export const NotRegisteredUser = () => {
  const { registerMutation, error, loading } = useRegisterMutation()

  return (
    <Context.Consumer>
      {
                ({ activateAuth }) => {
                  const onSubmit = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    registerMutation({ variables })
                      .then(activateAuth)
                  }

                  const errorMsg = error && 'El usuario ya existe o hayl algun problema'

                  return (
                    <>
                      <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Registrarse' />
                      <UserForm error={errorMsg} onSubmit={activateAuth} title='Iniciar Sesion' />
                    </>
                  )
                }
            }
    </Context.Consumer>
  // <h1>NotRegisteredUser</h1>
  )
}
