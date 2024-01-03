const {
    Production,
    API_URL,
    ProdName,
    LD_ClientID
} = {
    Production: false,
    API_URL: 'Staging_API_URL',
    ProdName: 'staging',    // Add environment name
    LD_ClientID: 'Staging_ClientId' // Add staging environment clientID from LaunchDarkly web app
}
export const environment = {
    Production,
    API_URL,
    ProdName,
    LD_ClientID
}