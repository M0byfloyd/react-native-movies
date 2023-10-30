export type MovieType = {
    id: string,
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