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
/**Household */
export const CREATE_HOUSEHOLD = gql`
    mutation CreateHousehold(
        $houseTitle: String!,
        $houseDescription: String!,
        $area: Float!,
        $budget: Float!,
        $bath: Int!,
        $bed: Int!
    ) {
        createHouseHold(
            houseHoldInput: {
                houseTitle: $houseTitle,
                houseDescription: $houseDescription,
                area: $area,
                budget: $budget,
                bath: $bath,
                bed: $bed
            }) {
            id
            houseTitle
            houseDescription
            area
            budget
            bath
            bed
        }
    }
`

export const UPDATE_HOUSEHOLD = gql`
    mutation UpdateHouseHold(
        $id: ID!,
        $houseTitle: String
        $houseDescription: String
        $buildingType: String
        $area: Float
        $budget: Float
        $bath: Int
        $bed: Int
        $houseHoldSex: Gender
        $airConditioning: Boolean
        $internet: Boolean
        $parking: Boolean
        $privateBathroom: Boolean
        $yard: Boolean
    ) {
        updateHouseHold(
            id: $id,
            houseHoldInput: {
                houseTitle: $houseTitle
                houseDescription: $houseDescription
                buildingType: $buildingType
                area: $area
                budget: $budget
                bath: $bath
                bed: $bed
                houseHoldSex: $houseHoldSex
                airConditioning: $airConditioning
                internet: $internet
                parking: $parking
                privateBathroom: $privateBathroom
                yard: $yard
            }) {
                houseTitle
                houseDescription
                buildingType
                area
                budget
                bath
                bed
                houseHoldSex
                airConditioning
                internet
                parking
                privateBathroom
                yard
        }
} 
`