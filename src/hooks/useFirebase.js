import React, { useState, useEffect} from 'react';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, updateProfile , getIdToken} from "firebase/auth";
import initializeAuthentication from '../Pages/Login/Firebase/Firebase.init';

initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, seterror] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [admin, setAdmin] = useState(false)
    const [token ,setToken] = useState('')

    // console.log(user)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider()


    //Google
    const signInWithGoogle = (location, history) =>{
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
  .then((result) => {
    const user = result.user;
    saveUser(user.email, user.displayName, 'PUT')
    const destination = location?.state?.from || '/'
    history.replace(destination)
    seterror('')
    
  })
  .catch((error) => {
    seterror(error.message)
  })
  .finally(()=>setIsLoading(false))

    }


    //Register
    const registerUser = (email, password, history, name) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
               seterror('')
            //    const newUser = {email, displayName:name}
            //    setUser(newUser)

            //save user to the database
            saveUser(email,  name, 'POST')
            //   // // send name to firebase after creation
            //    updateProfile(auth.currentUser, {
            //     displayName: name
            //   }).then(() => {
                
            //   }).catch((error) => {
            //   });
            history.replace('/')
              
            })
            .catch((error) => {
                seterror(error.message)
            })

            .finally(()=> setIsLoading(false))

    }
    

    // Login
    const login = (email, password, location, history) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/'
                history.replace(destination)
                seterror('')
            })
            .catch((error) => {
                seterror(error.message)
            })
            .finally(()=> setIsLoading(false))
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user)
                .then(idToken=>{
                    setToken(idToken)
                   
                })
            } else {
                setUser({})
            }
             setIsLoading(false)
        });
        return () => unsubscribe
    }, [])

    //logout
    const logout = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            seterror(error.message)
        })
        .finally(()=> setIsLoading(false))
    }
    const saveUser = ( email, displayName, method) =>{
        const user = {email, displayName}
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }

    useEffect(()=>{
        fetch(`http://localhost:5000/users/${user.email}`)
        .then(res=> res.json())
        .then(data => setAdmin(data.admin))
    },[user.email])

    return { user, registerUser, logout, error , login, isLoading,signInWithGoogle, admin, token }
};

export default useFirebase;