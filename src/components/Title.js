import { useEffect } from 'react';


const usePageTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Onboarding`;
    }, [title]);
};

export default usePageTitle;