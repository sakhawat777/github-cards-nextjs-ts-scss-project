export type profileType = {
    name: string,
    login: string,
    avatar_url: string,
    blog: string,
    bio: string,
    public_repos: number,
    public_gists: number,
}
export const defaultProfiles: profileType[] = [
    {
        "login": "defunkt",
        "avatar_url": "https://avatars.githubusercontent.com/u/2?v=4",
        "name": "Chris Wanstrath",
        "blog": "http://chriswanstrath.com/",
        "bio": "🍔",
        "public_repos": 107,
        "public_gists": 273,
      }
]