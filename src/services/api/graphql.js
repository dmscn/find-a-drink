import createGraphqlFetcher from './helpers/graphqlFetcher'

const BASE_URL = 'https://api.code-challenge.ze.delivery/public/graphql'
const graphqlFetcher = createGraphqlFetcher(fetch, BASE_URL)

export const getPocs = () => {
  const query = `
  query pocSearchMethod($now: DateTime!, $algorithm: String!, $lat: String!, $long: String!) {
    pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {
      id
      status
      tradingName
      officialName
      deliveryTypes {
        deliveryTypeId
        price
        title
        subtitle
        active
      }
      paymentMethods {
        paymentMethodId
        active
        title
        subtitle
      }
      pocWorkDay {
        weekDay
        active
        workingInterval {
          openingTime
          closingTime
        }
      }
      address {
        address1
        address2
        number
        city
        province
        zip
        coordinates
      }
      phone {
        phoneNumber
      }
    }
  }
  `

  const specifiedLatitude = '-23.632919'
  const specifiedLongitude = '-46.699453'

  // Using the query variables as fixed values
  // to guarantee the correct result for the test
  const variables = {
    algorithm: 'NEAREST',
    lat: specifiedLatitude,
    long: specifiedLongitude,
    now: new Date().toISOString(),
  }

  return graphqlFetcher(query, variables)
}

export const getProducts = {
  query: `
    query poc($id: ID!, $categoryId: Int, $search: String){
      poc(id: $id) {
        id
        products(categoryId: $categoryId, search: $search) {
          id
          title
          rgb
          images {
            url
          }
          productVariants {
            availableDate
            productVariantId
            price
            inventoryItemId
            shortDescription
            title
            published
            volume
            volumeUnit
            description
            subtitle
            components {
              id
              productVariantId
              productVariant {
                id
                title
                description
                shortDescription
              }
            }
          }
        }
      }
    }
  `,
  variables: {
    id: '532',
    search: '',
    categoryId: null,
  },
}

export const getCategories = {
  query: `
    query allCategoriesSearch {
      allCategory{
        title
        id
      }
    }
  `,
  variables: {
    id: '532',
    search: '',
    categoryId: null,
  },
}

export default {
  getPocs,
  getProducts,
  getCategories,
}
