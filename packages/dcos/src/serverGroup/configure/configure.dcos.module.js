import { module } from 'angular';

import { DCOS_SERVERGROUP_CONFIGURE_COMMANDBUILDER } from './CommandBuilder';
import { DCOS_SERVERGROUP_CONFIGURE_CONFIGURATION_SERVICE } from './configuration.service';
import { DCOS_SERVERGROUP_CONFIGURE_WIZARD_CLONE_CONTROLLER } from './wizard/Clone.controller';
import { DCOS_SERVERGROUP_CONFIGURE_WIZARD_BASICSETTINGS_CONTROLLER } from './wizard/basicSettings.controller';
import { DCOS_SERVERGROUP_CONFIGURE_WIZARD_CONTAINERSETTINGS_CONTROLLER } from './wizard/containerSettings.controller';
import { DCOS_SERVERGROUP_CONFIGURE_WIZARD_ENVIRONMENTVARIABLES_CONTROLLER } from './wizard/environmentVariables.controller';
import { DCOS_SERVERGROUP_CONFIGURE_WIZARD_HEALTHCHECKS_CONTROLLER } from './wizard/healthChecks.controller';
import { DCOS_SERVERGROUP_CONFIGURE_WIZARD_NETWORK_CONTROLLER } from './wizard/network.controller';
import { DCOS_SERVERGROUP_CONFIGURE_WIZARD_OPTIONAL_CONTROLLER } from './wizard/optional.controller';
import { DCOS_SERVERGROUP_CONFIGURE_WIZARD_VOLUMES_CONTROLLER } from './wizard/volumes.controller';

('use strict');

export const DCOS_SERVERGROUP_CONFIGURE_CONFIGURE_DCOS_MODULE = 'spinnaker.dcos.serverGroup.configure';
export const name = DCOS_SERVERGROUP_CONFIGURE_CONFIGURE_DCOS_MODULE; // for backwards compatibility
module(DCOS_SERVERGROUP_CONFIGURE_CONFIGURE_DCOS_MODULE, [
  DCOS_SERVERGROUP_CONFIGURE_CONFIGURATION_SERVICE,
  DCOS_SERVERGROUP_CONFIGURE_COMMANDBUILDER,
  DCOS_SERVERGROUP_CONFIGURE_WIZARD_BASICSETTINGS_CONTROLLER,
  DCOS_SERVERGROUP_CONFIGURE_WIZARD_CLONE_CONTROLLER,
  DCOS_SERVERGROUP_CONFIGURE_WIZARD_CONTAINERSETTINGS_CONTROLLER,
  DCOS_SERVERGROUP_CONFIGURE_WIZARD_ENVIRONMENTVARIABLES_CONTROLLER,
  DCOS_SERVERGROUP_CONFIGURE_WIZARD_HEALTHCHECKS_CONTROLLER,
  DCOS_SERVERGROUP_CONFIGURE_WIZARD_NETWORK_CONTROLLER,
  DCOS_SERVERGROUP_CONFIGURE_WIZARD_VOLUMES_CONTROLLER,
  DCOS_SERVERGROUP_CONFIGURE_WIZARD_OPTIONAL_CONTROLLER,
]);