import { Injectable } from '@angular/core';
import * as LaunchDarkly from 'launchdarkly-js-client-sdk';
import { LDFlagSet } from 'launchdarkly-js-client-sdk';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LaunchDarklyService {
  private prodName = environment.ProdName; // Get environment name
	private Ls_ClientId = environment.LD_ClientID; // Get environment ClientID 

  envName = this.prodName; // Map environment name
  clientSideId = this.Ls_ClientId; // Map environment ClientID
  
	client!: LaunchDarkly.LDClient; // Launch Darkly client
	flags!: LDFlagSet; // Launch Darkly flags
	subjectFlag: Subject<object> = new Subject<object>();

  constructor() { 

    this.initialize();
    if (this.client) {
			this.client.on('ready', () => {
				this.setFlags();
			});

			this.client.on('change', (flags: LDFlagSet) => {
				for (const flag in flags) {
					this.flags[flag] = flags[flag].current;
				}

				this.subjectFlag.next(this.flags);
			});
		}
  }

  /**
	 * Method to initialize client
	 * @returns return client object
	 */
	initialize(): boolean {
		const user = {
			anonymous: true,
		} as LaunchDarkly.LDUser;
		this.client = LaunchDarkly.initialize(this.clientSideId, user);

		return this.client ? true : false;
	}

    /**
	 * Method to get current flag from flags array
	 * @param flagName get flag name
	 * @returns return flag value
	 */
	getFlags(flagName: string): boolean {
		let flag = false;

		if (this.flags !== undefined) {
			const newFlagName = `${this.envName}.${flagName}`;
			flag = this.flags[newFlagName];

			if (flag === undefined) {
				this.flags[flagName] = false;
				flag = false;
			}
		}
		return flag;
	}

	/**
	 * Method to pass value to subject
	 */
	setFlags(): void {
		this.flags = this.client.allFlags();
		this.subjectFlag.next(this.flags);
	}
}
