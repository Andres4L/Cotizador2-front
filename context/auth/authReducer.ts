import { AuthState } from './AuthProvider';


   type AuthActionType = 
   | {type: 'Auth - ActionName'}

     export const authReducer = (state: AuthState, action: AuthActionType): AuthState =>{

        switch (action.type) {
            case 'Auth - ActionName':
                return{
                 ...state,
                  }

                default:
                  return state
               }
     }