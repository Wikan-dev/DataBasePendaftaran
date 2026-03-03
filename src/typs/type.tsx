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
    type: "logout" | "save" | "hapus" | "konfirmasi" | "succes"
    onClose: () => void
}

export type popupConfig = {
    title: string;
    desc: string;
    icon: string;
}

export type TdProps = {
  children: React.ReactNode;
  className?: string;
};

export type TableProps = {
    onEdit: (value: boolean) => void;
    onDelete: (value: boolean) => void;
}