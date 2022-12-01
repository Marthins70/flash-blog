interface TitleProps {
    children: string;
}

export function Title({ children }: TitleProps) {
    return(
        <h2 className="text-amber-500 text-4xl w-full text-center uppercase pb-8">{children}</h2>
    )
}