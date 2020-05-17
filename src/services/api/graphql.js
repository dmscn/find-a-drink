export const getPOC = {
  query: `
    query pocSearchMethod($now: DateTime!, $algorithm: String!, $lat: String!, $long: String!) {
    pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {
      __typename
      id
      status
      tradingName
      officialName
      deliveryTypes {
        __typename
        pocDeliveryTypeId
        deliveryTypeId
        price
        title
        subtitle
        active
      }
      paymentMethods {
        __typename
        pocPaymentMethodId
        paymentMethodId
        active
        title
        subtitle
      }
      pocWorkDay {
        __typename
        weekDay
        active
        workingInterval {
          __typename
          openingTime
          closingTime
        }
      }
      address {
        __typename
        address1
        address2}
        number
        city
        province
        zip
        coordinates
      }
      phone {
        __typename
        phoneNumber
      }
    }
  }
  `,
  variables: {
    algorithm: 'NEAREST',
    lat: '-23.632919',
    long: '-46.699453',
    now: '2017-08-01T20:00:00.000Z',
  },
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

export const getCategoryList = {
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
