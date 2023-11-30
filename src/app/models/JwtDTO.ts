export class JwtDTO {
    constructor(
        public jwt: string,
        public username: string
    ) {}
}