import { useState } from 'react';
import { createStore } from 'reusable';

export type UserType = {
	privateKey: string
	publicKey: string,
	address: {
		id: string,
		amount: Number
	},
}

const useUserInfo = createStore(() => {
	const [userInfo, setUserInfo]: [UserType, any] = useState({
			privateKey: "",
			publicKey: "",
			address: {
				id: "",
				amount: 0
			}
	})

	return [
		userInfo,
		(userInfo:UserType) => setUserInfo(userInfo)
	]
});

export default useUserInfo;
