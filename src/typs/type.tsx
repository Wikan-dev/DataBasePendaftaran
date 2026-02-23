export type AdminInput = {
    inputType: "email" | "password";
    value: string;
    onChange: (value: string) => void;
}

export type ButtonRpl = {
    email: string;
    password: string;
    // buttonText: string;
}

export type PopUp = {
    type: "logout" | "hapus" | "konfirmasi" | null
    onClose: () => void
}