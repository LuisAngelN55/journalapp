import { async } from "@firebase/util";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";


const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {

    try {
        
        const result = await signInWithPopup( FirebaseAuth, googleProvider );
        // const credentials = GoogleAuthProvider.credentialFromResult( result );
        // console.log({ credentials }); // Información de credenciales TOKEN
        // const user = result.user;
        // console.log( user ); // Información del usuario
        const { displayName, email, photoURL, uid } = result.user

        return {
            ok: true,
            // Información del usuario
            displayName, email, photoURL, uid
        };

    } catch (error) {
        
        const errorCode = error.errorCode;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credencial = GoogleAuthProvider.credentialFromError( error );

        return {
            ok: false,
            errorMessage,
        }
    }
}