import { useState } from 'react';
import { createStore } from 'reusable';

const useUserLoginPage = createStore(() => {
	const [showLoginPage, setShowLoginPage] = useState<Boolean | null>(true);
	return [showLoginPage, setShowLoginPage];
});

export default useUserLoginPage;
