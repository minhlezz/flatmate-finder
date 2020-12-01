import gql from "graphql-tag";

export const GET_USER = gql`
    query getUser($id: String!) {
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
    }
}
`



export const FM_USERINFOR = gql`
  query getUser($id: String!) {
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

        }
    } 
`