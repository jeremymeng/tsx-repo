// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ConfigurationSetting } from "./generated/index.js";

// re-export generated types that are used as public interfaces.
export { ConfigurationSetting };

/**
 * The client class used to interact with the App Configuration service.
 */
export class ConfigurationClient {

  /**
   * Creates an instance of a ConfigurationClient.
   *
   * Example usage:
   * ```ts
   * import { ConfigurationClient} from "@azure/ai-text-analytics";
   * import { DefaultAzureCredential} from "@azure/identity";
   *
   * const client = new ConfigurationClient(
   *    "<app configuration endpoint>",
   *    new DefaultAzureCredential()
   * );
   * ```
   * @param endpointUrl - the URL to the App Configuration endpoint
   * @param credential - used to authenticate requests to the service
   * @param options - optional configuration used to send requests to the service
   */
  constructor(
  ) {
  }

  public async getConfigurationSetting(
  ): Promise<ConfigurationSetting> {
    let key: string;
    let ifNoneMatch: string | undefined;
    throw "NotYetImplemented";
  }
}
