import { gql,} from '@apollo/client';
export const LOGIN_MUTATION = gql `
mutation Login($uID:Int!, $uPassword:String!)
{
  login(
    uID: $uID
    uPassword:$uPassword
    
  ) {success
      token
      errors{message path}} 
}`
;