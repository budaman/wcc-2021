import { gql } from "@apollo/client";

export const GET_ANIMALS_QUERY = gql`
  query GetAnimalList {
    animals {
      edges {
        cursor
        node {
          id
          imageUrl
          name
        }
      }
    }
  }
`;

export const GET_ANIMAL_PROFILE = gql`
  query GetAnimal($id: Int!) {
    animal(id: $id) {
      id
      name
      details {
        gender {
          value
        }
        color {
          id
          value
        }
        birthDate
        weight
        allergy
        food
        breed {
          id
          value
        }
        species {
          id
          value
        }
      }
      imageUrl
      comments
    }
  }
`;
