import z from 'zod'; //Para validaciones

const movieSchema = z.object({
    title: z.string({
        invalid_type_error: 'Movie title must be a string',
        required_error: 'Movie title is required'
    }),
    year: z.number().int().min(1900).max(2026),
    director: z.string(),
    duration: z.number().int().positive(),
    rate: z.number().min(0).max(10),
    poster: z.string(),
    genre: z.array(
        z.enum(['Action', 'Adventure', 'Comedy', 'Romance', 'Drama', 'Fantasy', 'Horror', 'Thriller', 'Sci-Fi', 'Suspense']),
        {
            required_error: 'Movie genre is required',
            invalid_type_error: 'Movie genre must be an array of enum Genre'
        }
    )
});

export function validateMovie(object){
    return movieSchema.safeParse(object);
}

export function validatePartialMovie(input){
    return movieSchema.partial().safeParse(input);
}