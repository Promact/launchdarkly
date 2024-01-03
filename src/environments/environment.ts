const {
    Production,
    API_URL,
    ProdName,
    LD_ClientID
} = {
    Production: false,
    API_URL: 'Local_API_URL',
    ProdName: 'local',    // Add environment name
    LD_ClientID: 'Development_ClientId' // Add development environment clientID from LaunchDarkly web app, You don't need to create local environment on Luanch Darkly web application
}
export const environment = {
    Production,
    API_URL,
    ProdName,
    LD_ClientID
}