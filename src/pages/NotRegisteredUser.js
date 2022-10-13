import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../containers/RegisterMutation'
import { useLoginMutation } from '../containers/LoginMutation'

export const NotRegisteredUser = () => {
  const { registerMutation, error, loading } = useRegisterMutation()
  const { login, loading: loadingLogin, error: errorLogin } = useLoginMutation()

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

                  const onSubmitLogin = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    login({ variables }).then(res => {
                      console.log(res)
                      activateAuth()
                    }).catch(err => {
                      console.log(err)
                    })
                  }

                  const errorMsg = error && 'El usuario ya existe o hayl algun problema'
                  const errorLoginMsg = errorLogin && 'El usuario no existe o hay algun problema'

                  return (
                    <>
                      <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Registrarse' />
                      <UserForm disabled={loadingLogin} error={errorLoginMsg} onSubmit={onSubmitLogin} title='Iniciar Sesion' />
                    </>
                  )
                }
            }
    </Context.Consumer>
  // <h1>NotRegisteredUser</h1>
  )
}
