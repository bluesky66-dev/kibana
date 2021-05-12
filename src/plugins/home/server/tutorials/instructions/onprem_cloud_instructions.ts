/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { i18n } from '@kbn/i18n';

export const createTrycloudOption1 = () => ({
  title: i18n.translate('home.tutorials.common.premCloudInstructions.option1.title', {
    defaultMessage: 'Option 1: Try in HyperSec Cloud',
  }),
  textPre: i18n.translate('home.tutorials.common.premCloudInstructions.option1.textPre', {
    defaultMessage:
      'Go to [HyperSec Cloud]({link}). Register if you \
do not already have an account. Free 14-day trial available.\n\n\
Log into the HyperSec Cloud console\n\n\
To create a cluster, in HyperSec Cloud console:\n\
 1. Select **Create Deployment** and specify the **Deployment Name**\n\
 2. Modify the other deployment options as needed (or not, the defaults are great to get started)\n\
 3. Click **Create Deployment**\n\
 4. Wait until deployment creation completes\n\
 5. Go to the new Cloud Kibana instance and follow the Kibana Home instructions',
    values: {
      link: 'https://www.elastic.co/cloud/as-a-service/signup?blade=kib',
    },
  }),
});

export const createTrycloudOption2 = () => ({
  title: i18n.translate('home.tutorials.common.premCloudInstructions.option2.title', {
    defaultMessage: 'Option 2: Connect local Kibana to a Cloud instance',
  }),
  textPre: i18n.translate('home.tutorials.common.premCloudInstructions.option2.textPre', {
    defaultMessage:
      'If you are running this Kibana instance against a hosted HyperSec instance, \
proceed with manual setup.\n\n\
Save the **HyperSec** endpoint as {urlTemplate} and the cluster **Password** as {passwordTemplate} for your records',
    values: {
      urlTemplate: '`<es_url>`',
      passwordTemplate: '`<password>`',
    },
  }),
});
