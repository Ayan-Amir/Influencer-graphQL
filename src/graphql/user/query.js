import gql from 'graphql-tag'

export const LOGGED_IN_USER = gql`
query{
	me{
		id
		email
		state
		type
        avatar
		first_name
		last_name
		city
        birth_date
        address
		country
		pin
		gender
		phone
        responseRate
        jobOnTime
        completion
	}
}
`
export const CHECK_USERNAME = gql` query usernameAvailable($email: String){
    usernameAvailable(email: $email){
        state,
        msg
    }
}
`

export const NOTIFICATION = gql`
query {
	notifications {
		id
		timestamp
		title
		image
		url
	}
}`

export const OFFER_DETAILS = gql`query offer($id: Int!) {
	offer(id: $id) {
		id
		name
		image
		type
		logo
		company
		left
		description
		expirationDate
		category {
			id
			name
		}
		location {
			id
			name
		}
		details {
			title
			description
			gallery
		}
	}
}`

export const OFFERS_FILTERS = gql`
query {
	offersFilters {
		locations {
			id
			name
		}
		categories {
			id
			name
		}
		default {
			locations {
				id
				name
			}
			categories {
				id
				name
			}
		}
	}
}`

export const OFFERS = gql`
query offers($page: Int, $locations: [String], $categories: [String] , $search : String) {
	offers(page: $page, locations: $locations, categories: $categories, search: $search ) {
		id
		name
		image
		logo
		type
		description
		expirationDate
	}
}`

export const OFFER_DETAIL = gql`
query offer($id: Int!) {
	offer(id: $id) {
		id
		name
		image
		type
		logo
		company
		left
		description
		expirationDate
		category {
			id
			name
		}
		location {
			id
			name
		}
		details {
			title
			description
			gallery
		}
	}
}`

export const CAMPAIGNS = gql`
query campaigns($page: Int, $locations: [String], $categories: [String] , $search : String, $subscriptions: [String]){
	campaigns(page: $page, locations: $locations, categories: $categories, search: $search, subscriptions: $subscriptions ) {
		id
	  	name
	  	logo
	  	type
	  	company
	  	category{
			id
			name
	  	}
	  	location{
			id
			name
	  	}
	  	price
	  	description
	  	image
	  	details{
			title
			description
			gallery
	  	}
		subscription{
			state
			images{
				id
			  	value
			}
		}
	}
}`

export const CAMPAIGN_DETAILS = gql`
query campaign($id: Int) {
	campaign(id: $id) {
		id
		name
		logo
		type
		company
		category{
		  id
		  name
		}
		location{
		  id
		  name
		}
		price
		description
		image
		details{
		  title
		  description
		  gallery
		}
		subscription{
			state
			images{
				id
			  	value
			}
		}
	}
}`

export const COMPAIGNS_FILTER = gql`
query {
	campaignsFilters {
		locations {
			id
			name
		}
		categories {
			id
			name
		}
		default {
			locations {
				id
				name
			}
			categories {
				id
				name
			}
		}
	}
}`

export const CAMPAIGN_SUBSCRIPTION = gql`
query campaigns($page: Int, $locations: [String], $categories: [String] , $search : String, $subscriptions: [String]){
	campaigns(page: $page, locations: $locations, categories: $categories, search: $search, subscriptions: $subscriptions ) {
		id
	  	name
	  	logo
	  	type
	  	company
	  	category{
			id
			name
	  	}
	  	location{
			id
			name
	  	}
	  	price
	  	description
	  	image
	  	details{
			title
			description
			gallery
	  	}
		subscription {
			state
			images {
				id
			  	value
			}
		}
	}
}`
export const STORY_RECOMENDED_PRICE = gql`
query mediaAccounts($type: [String]){
    mediaAccounts(type: $type){
        priceRecommendations{
            story{
                value,
                description
            }
        }
    }
}
`