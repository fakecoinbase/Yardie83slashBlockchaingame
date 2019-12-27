import { useState } from 'react';
import { createStore } from 'reusable';

const useUserInfo = createStore(() => {
	const [userInfo, setUserInfo] = useState({
			privateKey: "",
			publicKey: "",
			address: {
				id: "",
				amount: 0
			},
	})

	return [
		userInfo,
		(userInfo) => setUserInfo(userInfo)
	]
});

export default useUserInfo;
