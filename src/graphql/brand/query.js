import gql from 'graphql-tag';

export const CAMPAIGN_DEFAULT_FILTER = gql`
query newCampaign {
    campaignDefaultFilter {
        followers
        priceStart
        priceEnd
        rating
        ageStart
        ageEnd
        gender
        location
        interests
    }
}`