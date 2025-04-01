import Link from "next/link";
import { ReactNode } from "react";

const RootLayout = ({children}: {children: ReactNode}) => {
  return (
    <div className="root-layout">
      <nav>
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" width={40} height={40} />
          Agent CX
        </Link>
      </nav>
      {children}
    </div>
  )

}

export default RootLayout
