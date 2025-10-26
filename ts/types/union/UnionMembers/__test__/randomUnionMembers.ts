import { faker } from '@faker-js/faker';
import { type UnionMember, UNION_MEMBERS } from '../../UnionMember';

export const randomUnionMembers = ({
	invalid = false
}: Record<string, unknown> = {}) => {
	let unionMembers = faker.helpers.arrayElements<UnionMember>(UNION_MEMBERS);

	if (invalid) {
		unionMembers = [...unionMembers, faker.lorem.word()]
	}

	return unionMembers;
};
