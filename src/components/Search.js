import React, { useState, useEffect } from "react";

const NameForm = () => {
    const [filter, setFilter] = useState("");
    const [PersonList, setPersonList] = useState([]);
    const [hasError, setErrors] = useState(false);

    useEffect(() => {
        async function fetchData() {
          const res = await fetch("localhost:8080/PrepExamBack/api/person/all");
          res
            .json()
            .then(res => setPersonList(res))
            .catch(err => setErrors(err));
        }
    
        fetchData();
      },[]);

    function handleChange(event) {
        const target = event.target;
        //const id = target.id;
        const value = target.value;
        setFilter({ value });
    }
    function handleSubmit(event) {
        event.preventDefault();
    }

    useEffect(() => {
        function filterPerson() {
            const lowerCaseFilter = filter.toLowerCase();
            PersonList.filter(p => {
                return (
                    
                )
            })
        }
        filterPerson();
    },[])

    return (
        <div>
            <span>Has error: {JSON.stringify(hasError)}</span>
            <form onChange={handleChange} onSubmit={handleSubmit}>
                <input type="text" placeholder="E-mail" />
                <input type="submit" value="Search" />
            </form>
            <p id="searchResult"></p>
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