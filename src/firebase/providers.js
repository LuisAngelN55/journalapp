import { async } from "@firebase/util";
import { ErrorSharp } from "@mui/icons-material";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
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
            displayName, email, photoURL, uid, displayName
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

export const registerUserWithEmailPassword = async({ email, password, displayName }) => {

    try {

        const result = await createUserWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL } = result.user;
        await updateProfile( FirebaseAuth.currentUser, { displayName } );
        return {
            ok: true,
            uid, photoURL, email
        }

    } catch (error) {
        return {ok: false, errorMessage: error.message}
    }
}