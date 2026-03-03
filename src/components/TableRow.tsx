import type { TdProps } from "../typs/type";

export default function Td({ children, className }: TdProps) {
  return (
    <td className={className || "w-auto h-[53px] px-3 max-w-7 truncate py-2.5 text-left font-bold text-rpl-blue-400 border-2 border-rpl-blue-400"}>
      {children}
    </td>
  );
};