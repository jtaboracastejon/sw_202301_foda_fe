import { useState } from "react";
import { LoginUX } from "./LoginUX"

export const Login = () => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget;
        if (name === "email") {
            setEmail(value);
            setEmailError("")
        }
        else if (name === "password") {
            setPassword(value);
            setPasswordError("")
        }
    }
    const onClickHandler = (event: React.MouseEvent) => {
        console.log("LOGIN", {email, password})
        if(!(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/).test(password)){
            setPasswordError("PASSWORD IS INVALID")
        }
        if(!(/^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})$/i).test(password)){
            setEmailError("EMAIL IS INVALID")
        }
    }
    return (
        <LoginUX 
        email={email}
        password={password}
        onChangeHandler={onChangeHandler}
        onClickHandler={onClickHandler}
        passwordError = {passwordError}
        />
    )
}

export default Login