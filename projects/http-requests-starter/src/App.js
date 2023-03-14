import React, {useCallback, useEffect, useState} from "react";

import JokeList from "./components/JokeList";
import "./App.css";
import preloaderImg from "./assets/images/preloader.gif"
import AddJoke from "./components/AddJoke";

function App() {
    const [jokes,  setJokes] = useState([]);
    const [isLoading,  setIsLoading] = useState(false);
    const [error,  setError] = useState(null);
    const getDummyJokesHandler = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try{
            // JokeAPI const url = 'https://official-joke-api.appspot.com/random_ten';
            const url = 'https://rg-react-test-default-rtdb.firebaseio.com/jokes.json';
            const response = await fetch(url);
            if (!response.ok)
                throw new Error('We have big problems...')
            const data = await response.json();

            const loadedJokes = [];
            for (const key in data){
                loadedJokes.push({
                    id: key,
                    type: data[key].type,
                    setup: data[key].setup,
                    punchline: data[key].punchline,
                })
            }
            //console.log(loadedJokes)
            setJokes(loadedJokes);
        }catch (e) {
            setError(e.message);
        }
        setIsLoading(false);
    }, []);
    useEffect(() => {
        getDummyJokesHandler().then(r => r);
    }, [getDummyJokesHandler]);

    const addJokeHandler = async (joke) => {
        try{
            const url = 'https://rg-react-test-default-rtdb.firebaseio.com/jokes.json';
            const response = await fetch(url,{
                method: 'POST',
                body: JSON.stringify(joke),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok)
                throw new Error('We have big problems...')
            const data = await response.json();
            setJokes(data);
        }catch (e) {
            setError(e.message);
        }
    }
    const content = () => {
        if (jokes !== null && jokes !== undefined && jokes.length > 0)
            return <JokeList jokes={jokes} />
        if (error)
            return <p>{error}</p>
        if (isLoading)
            return <img src={preloaderImg}  alt="preloader"/>
        return <p>Not found...</p>;
    }
    return (
        <>
            <section>
                <AddJoke onAddJoke={addJokeHandler}/>
            </section>
            <section>
                <button onClick={getDummyJokesHandler}>Fetch Jokes</button>
            </section>
            <section>
                {content()}
            </section>
        </>
    );
}

export default App;