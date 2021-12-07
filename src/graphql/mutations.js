import gql from 'graphql-tag'

export const LOGIN_USER = gql`
mutation createSession($email: String!, $password: String!) {
    createSession(email: $email, password: $password) {
      token
    }
}`

export const REGISTER_USER = gql`
mutation registerUser($email: String!, $password: String!, $type: Int!) {
    registerUser(email: $email, password: $password , type: $type) {
      token
    }
}`

export const UPDATE_USER = gql`
mutation updateUser($firstName: String, $lastName: String, $email: String, $birthdate:String , $address:String, $city:String, $country:String, $phone:String, $gender: String) {
    updateUser(firstName: firstName, lastName: lastName, email: email, birthdate: birthdate , address: address, city: city, country: country, phone: phone, gender: gender) {
      state
    }
}`