import React, { useState, useEffect } from "react";

const NameForm = () => {
    const [filter, setFilter] = useState("");
    const [PersonList, setPersonList] = useState([]);
    const [hasError, setErrors] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("http://localhost:8080/PrepExamBack/api/person/all");
            res
                .json()
                .then(res => setPersonList(res))
                .catch(err => setErrors(err));
        }
        fetchData();
    }, []);

    function handleChange(event) {
        const target = event.target;
        //const id = target.id;
        const value = target.value;
        setFilter(value);
    }
    function handleSubmit(event) {
        event.preventDefault();
    }

    const filteredPerson = PersonList.filter((person) => {

        return person.firstName.toLowerCase().indexOf(filter.toLowerCase()) !== -1
    })


    return (
        <div>
            <span>Has error: {JSON.stringify(hasError)}</span>
            <form onChange={handleChange} onSubmit={handleSubmit}>
                <input type="text" placeholder="Indtast her..." />
                <input type="submit" value="Search" />
            </form>
            <ul>
                {filteredPerson.map((person) => {

                    const personString = person.firstName + ", " + person.lastName

                    return (

                        <li key={person.id}>{personString}</li>
                    )
                })}
            </ul>
        </div>
    );
};

export default function Search() {
    return (
        <div style={{ marginTop: 25 }}>
            <NameForm />
        </div>
    );
}