export async function getProfileFromGitHub(url: string) {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error(`Failed to fetch profile from GitHub: ${response.statusText}`)
    }
    return response.json()
}
