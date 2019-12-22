import { useState } from 'react';
import { createStore } from 'reusable';

const useUserInfo = createStore(() => {
	const [userInfo, setUserInfo] = useState({
			privateKey: "",
			publicKey: "",
			address: "",
	})

	return [
		userInfo,
		(userInfo) => setUserInfo(userInfo)
	]
});

export default useUserInfo;
