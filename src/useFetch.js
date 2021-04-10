// importing useEffect and useState from react

import {useState, useEffect} from 'react';

// this function will be the hook itself
// all custom hooks in React will start with the word "use" and thus I am using useFetch as the name

const useFetch = (url) => {

        // State one
        const [data, setData] = useState(null);

        // Page loader state
        const [pageLoading, setPageLoading] = useState(true);
    
        // Error mesage storing error
        const[errMessage, setErrMessage] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error('Could not fetch the data for that resourse');
                }
                return res.json();
            })

            .then(data => {
                setData(data);
                setPageLoading(false);
                setErrMessage(null);
            })
            .catch(err =>{
                setPageLoading(false);
                setErrMessage(err.message);
            })
            // fetch("url").then(async response => {
            //     try {
            //      const data = await response.json()
            //      console.log('response data?', data)
            //    } catch(error) {
            //      console.log('Error happened here!')
            //      console.error(error)
            //    }
            //   })
            

        }, 500);

    }, [url]);

    return { data, pageLoading, errMessage };
}

// exporting the function so that we can use it in al the files and components in the future
export default useFetch;