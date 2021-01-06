import gql from "graphql-tag";


export const FM_UPDATE_INFOR = gql`
    mutation UpdateUser(
        $id: ID!,
        $budget: Float,
        $aboutMe: String,
        $moveInDate: String,
        $minStay: String,
        $headline: String,
        $cleanliness: String,
        $overnightGuests: String,
        $partyHabits: String,
        $getUp: String,
        $goToBed: String,
        $foodReference: String,
        $smoker: String,
        $workSchedule: String,
        $occupation: String,
        $pet: String,
    ) {
        updateUser(
            id: $id,
            profileInput: {
                aboutMe: $aboutMe,
                budget: $budget,
                moveInDate: $moveInDate,
                minStay: $minStay,
                headline: $headline,
                cleanliness: $cleanliness,
                overnightGuests :$overnightGuests,
                partyHabits: $partyHabits,
                getUp: $getUp,
                goToBed: $goToBed,
                foodReference: $foodReference,
                smoker: $smoker,
                workSchedule: $workSchedule,
                occupation: $occupation,
                pet: $pet,
                
            }) {
            id
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
        }
    }
`
export const FM_CREATE_LOCATION = gql`
  mutation CreateLocation(
          $latitude: Float!, 
          $longitude: Float!
          ){
            createLocation(
                locationInput: {
                    latitude: $latitude,
                    longitude: $longitude,
                }
            ){
                latitude
                longitude
                id
            }
        }
`
export const FM_UPDATE_LOCATION = gql`
    mutation UpdateLocation(
        $id: ID!,
        $latitude: Float,
        $longitude: Float,
    ) {
        updateLocation(
            id: $id,
            locationInput: {
                latitude: $latitude,
                longitude: $longitude,
            }) {
            latitude
            longitude  
        }
    }
`

export const SEND_MESSAGE = gql`
    mutation SendMessage(
        $receiver: String!,
        $content: String!
    ) {
        sendMessage(
            receiver: $receiver,
            content: $content
        ) {
            id
            sender
            receiver
            content
            createdAt
        }
    }
`