export interface IUsers {
    id?: number;
    readonly twitterId: string;
    screenName: string;
    iconUrl?: string | null = null;
}
