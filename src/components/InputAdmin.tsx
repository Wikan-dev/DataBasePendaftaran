import type { AdminInput } from "../typs/type"

export default function InputAdmin({inputType, value, onChange}: AdminInput ) {

    
    return (
        <div>
            <input value={value} onChange={(e) => onChange(e.target.value)} type={inputType} placeholder={inputType == "email" ? "Email" : "Password"} />
        </div>
    )
}