export type Entry = {
    name: string;
    date: Date;
    price: string;
    rating: number;
    description: string;
    photo: string;
    slug: string;
    googleMaps: string;
}

export const entries: Entry[] = [
    {
        name: "Demartino",
        date: new Date("2026-03-06"),
        price: "£29",
        rating: 8.5,
        description: "An excellent pasta dish. Rich seafood flavour accompanied by well-cooked linguine. On the expensive side",
        photo: "/photos/demartino.JPG",
        slug: "demartino",
        googleMaps: "https://maps.app.goo.gl/bUFbgWruMWEzDAra8",
    },
    {
        name: "Casa Tua King's Cross",
        date: new Date("2026-02-01"),
        price: "£24.90",
        rating: 6,
        description: "An unremarkable pasta with average flavour and not much seafood to it. Very pricey for what it is.",
        photo: "/photos/casa-tua.JPG",
        slug: "casa-tua",
        googleMaps: "https://maps.app.goo.gl/SEqsbki3Qs7GoxDm6",
    }
]