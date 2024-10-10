import Link from "next/link"

function BtnCircleBack({href}: {href: string}) {
  return (
   <Link className="w-12 h-12 rounded-full shadow-md border border-slate-50 flex items-center justify-center" href={href}>
        <i className="pi pi-angle-left -ml-0.5 text-lg text-gray-700"></i>
   </Link>
  )
}

export default BtnCircleBack