import gql from "graphql-tag";

export const GET_USER = gql`
    query getUser($id: ID!) {
        getUser(id: $id) {
            id,
            email,
            username,
            mobile
            age,
            gender,
            aboutMe,
            moveInDate
        }
    }     
`;

export const ALL_USERS = gql`
   query {
        users{
            id
            username
            budget
            gender
            moveInDate
            age
            mobile
            location {
                latitude
                longitude
                    user {
                        username
                        
                    }
            }
    }
}
`;



export const FM_USERINFOR = gql`
  query getUser($id: ID!) {
        getUser(id: $id) {
            id,
            budget
            aboutMe 
            moveInDate
            minStay
            headline
            cleanliness
            overnightGuests 
            partyHabits
            getUp
            goToBed
            foodReference
            smoker
            workSchedule
            occupation
            pet
            location{
                id
                latitude
                longitude
            }

        }
    } 
`;

export const FM_GET_LOCATION = gql`
      query GetLocation($id: ID!) {
        getLocation(id: $id) {
            id,
            latitude,
            longitude

        }
    } 
`;

export const GET_USERS_MESSAGE = gql`
    query Users {
        users {
            id
            email
            username
            latestMessage {
                id
                sender
                receiver
                content
                createdAt
            }
        }
    }
`;

export const GET_MESSAGES = gql`
    query getMessages($sender: String!) {
        getMessages(sender: $sender) {
            id sender receiver content createdAt
        }
    }
`

/**Household */

export const GET_HOUSEHOLDS = gql`
    query GetHouseHolds {
        getHouseHolds {
            houseTitle
            houseDescription
            area
            bath
            bed
            budget
          }
    }
`