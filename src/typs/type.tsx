export type AdminInput = {
    inputType: "email" | "password";
    value: string;
    onChange: (value: string) => void;
}

export type ButtonRpl = {
    username: string;
    password: string;
    buttonText: string;
}