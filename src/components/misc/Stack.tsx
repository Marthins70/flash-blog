import { ReactNode } from "react"

interface StackProps {
    children: ReactNode;
    direction: 'col' | 'row';
    gap: string;
}

export function Stack({ children, direction, gap }: StackProps) {
    const flexDirection = direction == 'col' ? 'flex-col' : '';

    return(
        <div className={`flex ${flexDirection} ${gap}`}>
            {children}
        </div>
    )
}