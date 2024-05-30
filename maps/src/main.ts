import {CustomMap} from "./CustomMap.ts";
import {User} from "./User.ts";
import {Company} from "./Company.ts";

const customMap= new CustomMap('map');
const user = new User();
const company = new Company();
customMap.addMarker(user);

customMap.addMarker(company);