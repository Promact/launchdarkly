const {
    Production,
    API_URL,
    ProdName,
    LD_ClientID
} = {
    Production: true,
    API_URL: 'Production_API_URL',
    ProdName: 'production',    // Add environment name
    LD_ClientID: 'Production_ClientId' // Add production environment clientID from LaunchDarkly web app
}
export const environment = {
    Production,
    API_URL,
    ProdName,
    LD_ClientID
}