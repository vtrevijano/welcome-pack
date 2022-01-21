export interface Character {
    id: number;
    name: string;
    image: Image;
}

export interface Image {
    src: string;
    alt: string;
}

export interface Biography{
        name: string;
        status: string;
        species: string;
        gender: string;
    
}

export interface Places {
    origin: {
        name: string;
    }
    location: {
        name: string;
    }
}