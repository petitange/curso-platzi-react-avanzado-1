import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Button, Title, Error } from './styles'

export const UserForm = ({ disabled, error, onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input disabled={disabled} placeholder='Email' {...email} onChange={email.onChange} />
        <Input disabled={disabled} placeholder='Password' type='password' {...password} onChange={password.onChange} />
        <Button disabled={disabled} >{title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}
