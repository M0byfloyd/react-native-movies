export type MovieType = {
    id: number,
    author: string,
    titleText:{
        text: string
    },
    primaryImage: {
        url: string
    },
    rating: number,
    releaseYear: {
        year: number
    }
}