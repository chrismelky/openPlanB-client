export * from './accountResource.service';
import { AccountResourceService } from './accountResource.service';
export * from './attributeResource.service';
import { AttributeResourceService } from './attributeResource.service';
export * from './attributeValueResource.service';
import { AttributeValueResourceService } from './attributeValueResource.service';
export * from './optionSetResource.service';
import { OptionSetResourceService } from './optionSetResource.service';
export * from './optionValueResource.service';
import { OptionValueResourceService } from './optionValueResource.service';
export * from './orgUnitGroupResource.service';
import { OrgUnitGroupResourceService } from './orgUnitGroupResource.service';
export * from './orgUnitGroupSetResource.service';
import { OrgUnitGroupSetResourceService } from './orgUnitGroupSetResource.service';
export * from './orgUnitLevelResource.service';
import { OrgUnitLevelResourceService } from './orgUnitLevelResource.service';
export * from './organisationUnitResource.service';
import { OrganisationUnitResourceService } from './organisationUnitResource.service';
export * from './userJwtController.service';
import { UserJwtControllerService } from './userJwtController.service';
export * from './userResource.service';
import { UserResourceService } from './userResource.service';
export const APIS = [AccountResourceService, AttributeResourceService, AttributeValueResourceService, OptionSetResourceService, OptionValueResourceService, OrgUnitGroupResourceService, OrgUnitGroupSetResourceService, OrgUnitLevelResourceService, OrganisationUnitResourceService, UserJwtControllerService, UserResourceService];
