export type AdminInput = {
    inputType: "email" | "password";
    value: string;
    onChange: (value: string) => void;
}

export type ButtonRpl = {
    email: string;
    password: string;
    setConfirm: (value: boolean) => void;
    // buttonText: string;
}

export type PopUp = {
    type: "logout" | "hapus" | "konfirmasi" | "succes" | null
    onClose: () => void
}

export type popupConfig = {
    title: string;
    desc: string;
    icon: string;
}