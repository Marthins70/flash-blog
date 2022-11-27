declare type PrismicImage = {
    dimensions: {
        width: number;
        height: number;
    },
    alt: string | null;
    copyright: string | null;
    url: string;
}

declare type PrismicLink = {
    link_type: string;
    url: string;
}