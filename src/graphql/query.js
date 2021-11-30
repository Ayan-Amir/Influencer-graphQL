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