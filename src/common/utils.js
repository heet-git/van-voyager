import { redirect } from "react-router-dom";

export async function authRequired(){
    const isLoggedIn = false 

    if(!isLoggedIn) {
        throw redirect("/login")
    }
}