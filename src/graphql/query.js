import gql from 'graphql-tag'

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
			code: id
			name: name
		}
		categories {
			code: id
			name: name
		}
		default {
			locations {
				code: id
				name: name
			}
			categories {
				code: id
				name: name
			}
		}
	}
}`

export const OFFERS = gql`
query offers($page: Int, $locations: [String], $categories: [String]) {
	offers(page: $page, locations: $locations, categories: $categories) {
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