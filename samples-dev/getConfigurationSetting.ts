// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary Demonstrates the use of a ConfigurationClient to retrieve a setting value.
 */

import { ConfigurationClient } from "template-test";

async function main() {

  const client = new ConfigurationClient();

  const setting = await client.getConfigurationSetting();
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
