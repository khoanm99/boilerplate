import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query {
    products {
      data {
        attributes {
          title
        }
      }
    }
  }
`