# LaunchDarkly Frontend Integration

The LaunchDarkly is used to manage feature flags. Feature flags are if-else that saparate code accross the deployment environment. Using feature flags, you can control what user can and cannot see in your application. You can create different type of flags. The types of flags are boolean, string, number and object.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.8.

## Setting up LaunchDarkly

The below is the user [docs](https://docs.launchdarkly.com/home). The setting up the SDK and creating a flag is the basic and important step.
- [Getting Started](https://docs.launchdarkly.com/home/getting-started "Getting Started")

After complete [Getting Started](https://docs.launchdarkly.com/home/getting-started "Getting Started") process, we can start using LaunchDarkly JavaScript SDK in our application. To install JavaScript SDK using node package manager.

`npm install launchdarkly-js-client-sdk`

## Initializing the client

After installing the SDK, intialize the LaunchDarkly client to create a client instance. To create client instance we need LaunchDarkly environment client-side ID that is available under the Environments on the Projects tab on the Account Setting page. We can do this in component ngOnInit or even in the app initializer, it depends on our need.

We have created three environments dev, staging, and production. **We can create new environments on the Environments on the Projects tab on the Account Setting page.** We can get the client-side ID of the respective environment.

We will add Client-side ID and environment name in the respective environment file. Provide respective Client-side ID into the environment files. So, we will get Client-side ID and environment name from the environment files. See the below examples for more understanding. 

**Referee:** environment.newdev.ts, environment.staging.ts, and environment.prod.ts

    ProdName: 'production',
    LD_ClientID: 'Development_ClientId', // Add environment clientID from LaunchDarkly web app

## Creating a feature flag

We can create and modify flags from the flag list.

To create flags.
1. Navigate to feature flags from the left sidebar.
1. Click **Create flag**.
1. Choose given option or we can create Custom flag. Mostly, we will create custom flags.
1. Enter unique name. Follow pattern, **environment.flagName**.
**e.g.** dev.graph, production.employeeTable
1. (Optional) You can add description of the flag.
1. Click **Next**. Different option will appear based on the flag.
1. You can see different type of flags.
	- **Boolean:** optionally update the Name of the true and false variations.
	- **String:** enter a **Value** for each variation, and optionally update the **Name** of each variation. To add more variations, click **+Add variation**.
	- **Number:** enter a **Value** for each variation, and optionally update the **Name** of each variation. To add more variations, click **+Add variation**.
	- **JSON:** enter a **Value** for each variation, and optionally update the **Name** of each variation. To add more variations, click **+Add variation**. 
1. Click on **Advanced configuration**.
	- Check the **SDKs using client-side ID** checkbox to designate which SDKs the flag should be available to.
1. Click **Create flag**.

For more details you can refere the feature-flags [docs](https://docs.launchdarkly.com/home/creating-flags/feature-flags "docs").

## Integration

We have created LaunchDarkly service which handles what LaunchDarkly JavaScript SDK sends us. Mostly, we will use Boolean flag to show/hide feature based on environments and companies.

The integration is simple and easy to understand. For Laumch Darkly integration referee **launch-darkly.service.ts** file.

You will find below variables and methods in the service file. Please referee this for more understanding. 

1. `LD_ClientID` Get Client-side ID of respective environment. 
2. `ProdName` Get environment from the current environment file  
3. `initialize()` This method initialize client to create client instance
4. `getFlags(flagName: string)`
	- This method is used get respective flag. Wherever we want the flag value just pass the post fix of the flag. The company name and environment name is postfix and we will manage it as default in launchService file.

	- **e.g**. dev.employeeTable
		dev - Environment Name
		employeeTable - Flag Name

	- You just need to pass **employeeTable**. Postfix value of environment name. We will concate the envrionment and flag name like below 
		`${this.envName}.${flagName}`
	- This method return value of flags if it valid and return false if invalid.

For more information referee **app.component.ts** file.

Next, we use `getFlags('Flag_Name')` function which returns value of the flag. This happens inside the component where we use the flag value to determine if and when the user see the feature.

This is simple illustration which demonstrate how easily we can integrate LuanchDarkly feature in an application.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
