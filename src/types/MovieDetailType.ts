import {RatingsType} from "./RatingsType";
import {GenreType} from "./GenreType";

export type MovieDetailType = {
    ratingsSummary: RatingsType,
    primaryImage: {
        url: string
    },
    genres: {
        genres: GenreType[]
    },
    id: number,
    author: string,
    titleText:{
        text: string
    },

    releaseYear: {
        year: number
    }
}