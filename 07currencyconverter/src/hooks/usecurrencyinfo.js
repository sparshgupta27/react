import { useEffect, useState } from 'react'

// Fallback currency data in case API fails
const fallbackRates = {
    usd: {
        aed: 3.67, aud: 1.53, bdt: 119.5, bhd: 0.376, brl: 5.7, cad: 1.42,
        chf: 0.88, cny: 7.24, czk: 22.8, dkk: 6.88, eur: 0.92, gbp: 0.79,
        hkd: 7.77, huf: 357, idr: 15875, ils: 3.67, inr: 83.12, jpy: 149.5,
        krw: 1320, kwd: 0.307, lkr: 301, mur: 45.5, mxn: 17.1, myr: 4.72,
        nok: 10.7, nzd: 1.65, php: 55.8, pkr: 278, pln: 4.02, rub: 91.5,
        sar: 3.75, sek: 10.4, sgd: 1.34, thb: 35.5, try: 32.2, twd: 31.5,
        uah: 41.2, usd: 1, vnd: 24500, zar: 18.7
    }
}

// Generate reverse rates for all currencies
const generateAllRates = () => {
    const allRates = { ...fallbackRates }
    
    // For each currency, generate its rates to all others
    Object.keys(fallbackRates.usd).forEach(currency => {
        if (!allRates[currency]) {
            allRates[currency] = {}
        }
        
        // Add USD rate
        allRates[currency].usd = 1 / fallbackRates.usd[currency]
        
        // Add rates to other currencies
        Object.keys(fallbackRates.usd).forEach(targetCurrency => {
            if (currency !== targetCurrency) {
                allRates[currency][targetCurrency] = 
                    fallbackRates.usd[targetCurrency] / fallbackRates.usd[currency]
            }
        })
    })
    
    return allRates
}

const allCurrencyRates = generateAllRates()

function useCurrencyInfo(currency) { 
    const [data, setData] = useState({})
    useEffect(() => {
        // Try to fetch from API first (note: will use fallback data if API is unavailable)
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => {
                if (res[currency] && Object.keys(res[currency]).length > 0) {
                    setData(res[currency]);
                } else {
                    // Use fallback if API returns empty data
                    setData(allCurrencyRates[currency] || fallbackRates.usd);
                }
            })
            .catch(() => {
                console.log("Using fallback currency data");
                // Use fallback data when API fails
                setData(allCurrencyRates[currency] || fallbackRates.usd);
            });
    
}, [currency]);
    return data
}
export default useCurrencyInfo;