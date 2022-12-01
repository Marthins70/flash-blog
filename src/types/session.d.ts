declare type Session = {
    expires: string;
    user: {
        email: string;
        name: string;
        image: string;
    }
}