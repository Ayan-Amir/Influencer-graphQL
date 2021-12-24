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
mutation updateUser($firstName: String, $lastName: String, $birthdate: String , $address:String, $city:String, $country:String, $phone:String, $gender: String) {
    updateUser(firstName: $firstName, lastName: $lastName, birthdate: $birthdate , address: $address, city: $city, country: $country, phone: $phone, gender: $gender) {
      state
    }
}`

export const MEDIA_ACCOUNT = gql`
mutation mediaAccount($type: String!, $username: String) {
    mediaAccount(type: $type, username:  $username) {
      state
    }
}`

export const UPDATE_STORY_PRICE = gql`
mutation mediaAccount($type: String!, $price: String, $priceNegotiable: Boolean) {
    mediaAccount(type: $type, price:  $price, priceNegotiable: $priceNegotiable) {
      state
    }
}`

export const UPLOAD_IMAGE = gql`
mutation uploadProfile($image: Upload) {
  uploadProfile(image: $image) {
      value
    }
}`

export const UPDATE_PASSWORD = gql`
mutation updatePassword($password:String, $retype:String) {
  updatePassword(password: $password, retype: $retype) {
      state,
      msg
    }
}`