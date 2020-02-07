import { useState, Dispatch, SetStateAction } from 'react';
import { createStore } from 'reusable';

export type UserType = {
	privateKey: String
	publicKey: String,
	address: {
		id: String,
		amount: Number
	},
}

const useAdminInfo = createStore(() => {
	const [adminInfo, setUseAdminInfo]: [UserType | undefined, Dispatch<SetStateAction<UserType | undefined>>] = useState()

	return [
		adminInfo,
		(adminInfo: UserType) => setUseAdminInfo(adminInfo)
	]
});

export default useAdminInfo;
