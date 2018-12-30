require('es6-promise').polyfill();
require('isomorphic-fetch');

// Gal's example //
const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

export const fetchtData = () => {
    return fetch(API + DEFAULT_QUERY)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Something went wrong ...');
        })
}

// Gal's example 2 //  

export const createNewProfile = (profile) => {
    const formData = new FormData();
    formData.append('first_name', profile.firstName);
    formData.append('last_name', profile.lastName);
    formData.append('email', profile.email);
    return fetch('http://example.com/api/v1/registration', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
}

// createNewProfile(profile)
//     .then((json) => {
//         // handle success
//     })
//     .catch(error => error);



function update(data) {
    return fetch('/api/update', {
        method: 'put',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',

        }
    })
        .then(response => {
            if (response.ok) {
                return response.jason();
            }
            throw new Error('Something went wrong ...');
        })
    // .then(data => this.setState({ hits: data.hits, isLoading: false }))
    // .catch(error => this.setState({ error, isLoading: false }));
}

// Example POST method implementation:

// postData(`http://example.com/answer`, { answer: 42 })
//     .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
//     .catch(error => console.error(error));

// function postData(url = ``, data = {}) {
//     // Default options are marked with *
//     return fetch(url, {
//         method: "POST", // *GET, POST, PUT, DELETE, etc.
//         mode: "cors", // no-cors, cors, *same-origin
//         cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//         credentials: "same-origin", // include, *same-origin, omit
//         headers: {
//             "Content-Type": "application/json",
//             // "Content-Type": "application/x-www-form-urlencoded",
//         },
//         redirect: "follow", // manual, *follow, error
//         referrer: "no-referrer", // no-referrer, *client
//         body: JSON.stringify(data), // body data type must match "Content-Type" header
//     })
//         .then(response => response.json()); // parses response to JSON
// }