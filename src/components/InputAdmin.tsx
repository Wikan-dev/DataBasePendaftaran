import type { AdminInput } from "../typs/type"

export default function InputAdmin({inputType, value, onChange}: AdminInput ) {

    
    return (
        <div>
            <h1 className="font-semibold text-rpl-blue-500 mb-1.5">{inputType}</h1>
            <input className="border-4 border-rpl-blue-500 py-3 px-4 rounded-2xl w-full focus:outline-0" value={value} onChange={(e) => onChange(e.target.value)} type={inputType} placeholder={inputType == "email" ? "Email" : "Password"} />
        </div>
    )
}