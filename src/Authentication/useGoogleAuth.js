
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase"

const useGoogleAuth = () => {
    const provider = new GoogleAuthProvider();

    const googleAuth = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // console.log(token)
                sessionStorage.setItem("token", token);
                // The signed-in user info.
                const user = result.user;
                
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    return googleAuth

}

export default useGoogleAuth