import { Session } from "next-auth"

interface AccountInformationProps {
    session: Session;
}

export function AccountInformation({ session }: AccountInformationProps) {
    const { user } = session;

    return(
        <div className="flex gap-x-2">
            <p className="flex flex-col">
                <span className="text-sm text-white text-right font-light">
                    {user?.name}
                </span>
                <span className="text-xs text-white text-right font-light">
                    {user?.email}
                </span>
            </p>
            <div className="flex items-center justify-center">
                <img src={user?.image || ''} alt="User Profile Picture" className="rounded-full h-10 w-10" />
            </div>
        </div>
    )
}