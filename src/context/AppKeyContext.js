import React, { createContext, useState, useEffect } from 'react';

export const AppKeyContext = createContext();

export const AppKeyProvider = ({ children }) => {
    const [appKey, setAppKey] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAppKey = async () => {
            try {
                setLoading(true); 
                const response = await fetch('https://staging.marasoftbank.com/oop/api/dashboard/auth/get_app_key');
                const data = await response.json();
                
                if (data.app_key) {
                    setAppKey(data.app_key);  
                    // console.log('App key fetched:', data.app_key);
                } else {
                    console.error('App key not found in response:', data);
                }
            } catch (error) {
                console.error('Error fetching app key:', error);
            } finally {
                setLoading(false);  
            }
        };

        fetchAppKey();  
    }, []);

    return (
        <AppKeyContext.Provider value={{ appKey, loading }}>
            {children}
        </AppKeyContext.Provider>
    );
};
