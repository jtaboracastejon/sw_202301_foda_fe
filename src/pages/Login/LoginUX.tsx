import { FC } from "react";

import Page from "../../components/Page";
import { Field } from "../../components/InputField";
import { PrimaryButton } from "../../components/Buttons";
import ErrorField from "../../components/ErrorField";

interface LoginUXProps{
    email: string;
    emailError?: string;
    passwordError?: string;
    password: string;
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const LoginUX:FC<LoginUXProps> = ({
    email,
    emailError,
    password,
    passwordError,
    onChangeHandler,
    onClickHandler
}) => {    
    return (
        <Page useAbsoluteCenter={true} pageTitle="Login">
            <div className="login-ux">
                <Field 
                labelText={"Correo Electrónico"} 
                placeholder={"Correo Electrónico"} 
                name={"email"}
                id={"email"}
                type={"email"}
                onChange={onChangeHandler}
                value={email}
                />

                <Field 
                labelText={"Contraseña"} 
                placeholder={"Contraseña"} 
                name={"password"}
                id={"password"}
                type={"password"}
                onChange={onChangeHandler}
                value={password}
                />

                {passwordError && <ErrorField>{passwordError}</ErrorField>}
                {emailError && <ErrorField>{emailError}</ErrorField>}

                <PrimaryButton
                    onClick={onClickHandler}
                >
                    Iniciar Sesión
                </PrimaryButton>
            </div>
        </Page>
    );
}