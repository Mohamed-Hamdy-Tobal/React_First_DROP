import React, { useEffect, useState } from 'react'
import usePrevState from '../../hooks/usePrevState';
import axios from 'axios'

const Wikipedia = () => {

    const [term, setTerm] = useState('react');
    const [result, setResult] = useState([]);
    const termUseRef = usePrevState(term)


    useEffect(() => {

        if (term.trim() === '') {
                setResult([]);
                console.log("empty")
                return;
        }
        const search = async () => {
            try {
                const response = await axios.get('https://en.wikipedia.org/w/api.php', {
                    params: {
                        action: 'query',
                        list: 'search',
                        origin: '*',
                        format: 'json',
                        srsearch: term
                    }
                });

                const queryData = response.data.query.search;
                setResult(queryData);
                console.log(queryData);
            } catch (error) {
                console.error('API request error:', error);
            }
        };

        if (!result.length) {
            if (term) {
                search()
            }
        } else if (termUseRef !== term) {
            const debounce = setTimeout(() => {
                if (term) {
                    search()
                }
            }, 1200)
            return () => {
                clearTimeout(debounce)
            }
        }


    }, [term, result.length, termUseRef]);

    console.log("re-render")


    const finalRes = result.map((item, idx) => {
        return (
            <tr key={idx}>
                <td>{idx+1}</td>
                <td>{item.title}</td>
                <td><span dangerouslySetInnerHTML={{"__html": item.snippet}}></span></td> 
            </tr>
            )
    })

    return (
        <div className="container mt-4">
            <h2>Wikipedia Search</h2>
            
            <div className="mb-3">
                <label htmlFor='searchInput' style={{margin: '10px',display: 'block',textAlign: 'left',fontWeight: 'bold'}}>Search Input</label>
                <input type="text" className="form-control" id="searchInput" placeholder="Search" onChange={(e) => {
                    setTerm(e.target.value)
                    console.log(term)
                }}/>
            </div>
            
            <table className="table">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {finalRes}
                </tbody>
            </table>

            
            <p>Current Item : {term}</p>
            <p>Prev Item : {termUseRef}</p>
        </div>
    )
}

export default Wikipedia


// 17