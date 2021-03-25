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

export const ALL_LOCATION = gql`
    query {
        allLocations {
        latitude
        longitude
        user {
            id
            username
            email
            budget
        }
        household {
            id
            houseTitle
            budget
            owner {
             username
            }
        }
  }
    }
`


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
export const GET_HOUSEHOLD = gql`
    query GetHouseHold($id: ID!) {
        getHouseHold(id: $id) {
            id
            houseTitle
            houseDescription
            area
            bath
            bed
            budget
            houseHoldSex
            buildingType
            airConditioning
            internet
            parking
            privateBathroom
            yard
            owner {
                id
                username
                gender
                age
            }
          
        }
    }
`

export const GET_HOUSEHOLDS = gql`
    query GetHouseHolds {
        getHouseHolds {
            id
            houseTitle
            houseDescription
            area
            bath
            bed
            budget
            owner {
                id
                username
                gender
                age
            }
          }
    }
`

export const BOTH_QUERY = gql`
    query BOTH_QUERY {
        getHouseHolds {
                id
                houseTitle
                area
                budget
                districtCityHH
                provinceCityHH
                houseHoldSex
        }
        users {
            id
            email
            username
            budget
            gender
            age
            districtCityUser
            provinceCityUser
        }
    }
`

//Filter Query

export const HOME_FILTER = gql`
    query HomeFilters(
        $buildingType: String
        $areaGTE: Float
        $areaLTE: Float
        $budgetGTE: Float
        $budgetLTE: Float
        $bath: Int
        $bed: Int
        $houseHoldSex: Gender
        $airConditioning: Boolean
        $internet: Boolean
        $parking: Boolean
        $privateBathroom: Boolean
        $yard: Boolean
    ){
        homeFilters(
            filtersInput: {
                buildingType: $buildingType
                areaGTE: $areaGTE
                areaLTE: $areaLTE
                budgetLTE: $budgetLTE
                budgetGTE: $budgetGTE
                bath: $bath
                bed: $bed
                houseHoldSex: $houseHoldSex
                airConditioning: $airConditioning
                internet: $internet
                parking: $parking
                privateBathroom: $privateBathroom
                yard: $yard
            }) {
                id
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
                owner {
                    id
                    username
                    gender
                    age
                }
            }
    }
`;

export const USER_FILTER = gql`
    query UserFilters(
        $ageGTE: Int
        $ageLTE: Int
        $budgetGTE: Float
        $budgetLTE: Float
        $gender: Gender
        $cleanliness: String
        $overnightGuests: String
        $partyHabits: String
        $getUp: String
        $goToBed: String
        $foodReference: String
        $smoker: String
        $workSchedule: String
        $occupation: String
        $pet: String
     
    ){
        userFilters(
            userFilterInput: {
                ageGTE: $ageGTE
                ageLTE: $ageLTE
                budgetGTE: $budgetGTE
                budgetLTE: $budgetLTE
                gender: $gender
                cleanliness: $cleanliness
                overnightGuests: $overnightGuests
                partyHabits: $partyHabits
                getUp: $getUp
                goToBed: $goToBed
                foodReference: $foodReference
                smoker: $smoker
                workSchedule: $workSchedule
                occupation: $occupation
                pet: $pet
            }) {
                id
                gender
                age
                budget
                username
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
`;

