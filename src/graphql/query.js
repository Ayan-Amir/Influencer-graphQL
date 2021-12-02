import gql from 'graphql-tag'

export const LOGGED_IN_USER = gql`
query{
	me{
		id,
		email,
		state,
		type,
		first_name,
		last_name,
		city,
		country,
		pin,
		gender,
		phone
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