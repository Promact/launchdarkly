const {
    Production,
    API_URL,
    ProdName,
    LD_ClientID
} = {
    Production: false,
    API_URL: 'Devlopment_API_URL',
    ProdName: 'development',    // Add environment name
    LD_ClientID: 'Development_ClientId' // Add development environment clientID from LaunchDarkly web app
}
export const environment = {
    Production,
    API_URL,
    ProdName,
    LD_ClientID
}