import { faker } from '@faker-js/faker';
import { type UnionMember, UNION_MEMBERS } from '../UnionMember';

export const randomUnionMember = () =>
  faker.helpers.arrayElement<UnionMember>(UNION_MEMBERS);
