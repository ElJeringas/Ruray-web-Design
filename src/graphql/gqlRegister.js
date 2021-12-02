import { gql,} from '@apollo/client';
export const REGISTER_MUTATION = gql `
mutation Register($uID:Int!, $uName:String!, $uLastName:String!, $uPassword:String!, $uEmail:String!, $uTerm:Boolean!)
{
    createUser(
        uID:$uID
        uName:$uName
        uLastName:$uLastName
        uPassword:$uPassword
        uEmail:$uEmail
        uTerm:$uTerm
      ){
        success
        errors{path,message}
      }
    
}`
;