import { gql, useQuery } from '@apollo/client';
export const GET_USER = gql `{
    allUsers
    {_id,
    uName
    }
  }
`;