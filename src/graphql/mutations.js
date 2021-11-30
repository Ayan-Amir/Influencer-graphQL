import gql from 'graphql-tag'

export const LOGIN_USER = gql`
    mutation createSession ($email: String! $password: String! ){
        createSession(email: $email password: $password ){
            token
        }
    }`