export interface Character {
    id: number;
    name: string;
    image: string;
    status: string;
}
export interface CharacterInfo {
    info: {
        count: number;
        next: string;
        pages: number;
        prev: string;
    }
    results: Character[];
}
