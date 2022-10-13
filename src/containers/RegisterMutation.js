import { gql, useMutation } from '@apollo/client'

const REGISTER = gql`
    mutation signup($input: UserCredentials!){
        signup(input: $input)
    }
`
export const useRegisterMutation = () => {
  console.log('useMutation(REGISTER)', useMutation(REGISTER))
  const [registerMutation, { error, loading }] = useMutation(REGISTER)
  console.log({error })
  return { registerMutation, error, loading }
}