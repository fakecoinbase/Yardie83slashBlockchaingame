import { useState } from 'react';
import { createStore } from 'reusable';

type User = {
	privateKey: String
	publicKey: String,
	address: {
		id: String,
		amount: Number
	},
}

const useUserInfo = createStore(() => {
	const [userInfo, setUserInfo]: [User, any] = useState({
			privateKey: "",
			publicKey: "",
			address: {
				id: "",
				amount: 0
			}
	})

	return [
		userInfo,
		(userInfo:User) => setUserInfo(userInfo)
	]
});

export default useUserInfo;
