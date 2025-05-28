import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

export function RecentSales() {
    return (
        <div className="space-y-8">
            <div className="flex items-center">
                <Avatar className="h-9 w-9">
                    <AvatarImage src="/avatars/01.png" alt="Avatar" />
                    <AvatarFallback>S</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Sonia</p>
                    <p className="text-sm text-muted-foreground">Sona52@email.com</p>
                </div>
                <div className="ml-auto font-medium">+$1,299.00</div>
            </div>
            <div className="flex items-center">
                <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
                    <AvatarImage src="/avatars/02.png" alt="Avatar" />
                    <AvatarFallback>AS</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Athar Siddiqui</p>
                    <p className="text-sm text-muted-foreground">Eng.AtherSid@email.com</p>
                </div>
                <div className="ml-auto font-medium">+$45.00</div>
            </div>
            <div className="flex items-center">
                <Avatar className="h-9 w-9">
                    <AvatarImage src="/avatars/03.png" alt="Avatar" />
                    <AvatarFallback>AA</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Anaya Angle</p>
                    <p className="text-sm text-muted-foreground">anayaAngle58@email.com</p>
                </div>
                <div className="ml-auto font-medium">+$150.00</div>
            </div>
            <div className="flex items-center">
                <Avatar className="h-9 w-9">
                    <AvatarImage src="/avatars/04.png" alt="Avatar" />
                    <AvatarFallback>WK</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Waseem khan</p>
                    <p className="text-sm text-muted-foreground">waseekhan@email.com</p>
                </div>
                <div className="ml-auto font-medium">+$157.00</div>
            </div>
            <div className="flex items-center">
                <Avatar className="h-9 w-9">
                    <AvatarImage src="/avatars/05.png" alt="Avatar" />
                    <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Shumaila Danish</p>
                    <p className="text-sm text-muted-foreground">s.Dani@email.com</p>
                </div>
                <div className="ml-auto font-medium">+$39.00</div>
            </div>
        </div>
    )
}
