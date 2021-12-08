import gql from 'graphql-tag';

export const CAMPAIGN_FILTER = gql`
query {
    newCampaignFilters {
      followers
      priceStart
      priceEnd
      influencers
      posts
      locations{
        id
        name
      }
      interests{
        id
        name
      }
      gender{
        id
        name
      }
    }
}`

export const CAMPAIGN_ESTIMATE = gql`
query {
    campaignEstimate{
      location
      potential
      influencers
      reach
      engagement
      buget
    }
}`