import { useEffect, useState } from "react";

const useFetchCountryList = () => {
    const [countries, setCountries] = useState(null);

    useEffect(() => {
        const fetchCountryLists = async () => {
            try {
                const response = await fetch("http://worldtimeapi.org/api/timezone/");
                const countryLists = await response.json();
                setCountries(countryLists);
            } catch (error) {
                console.error("Error fetching Country List:", error);
            }
        };
        fetchCountryLists();
    }, []);

    if (countries) {
        return countries;
    }
};

export default useFetchCountryList;
