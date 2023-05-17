import './index.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
    const [users, setUsers] = useState([])
    const [autor, setAutor] = useState('')
    const [dataDodania, setDataDodania] = useState('')
    const [tresc, setTresc] = useState('')

    function fetchUsers() {
        axios.get('http://localhost:4200/').then((res) => {
            console.log(res.data)
            setUsers(res.data)
        })
    }

    function addUser() {
        const newUser = {
            autor: autor,
            data_dodania: dataDodania,
            tresc: tresc,
        }

        axios.post('http://localhost:4200/addUser', newUser).then((res) => {
            console.log(res.data)
            fetchUsers()
        })

        setAutor('')
        setDataDodania('')
        setTresc('')
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div className="container">
            <input type="text" placeholder="autor" onChange={(e) => setAutor(e.target.value)} value={autor} /> <br />
            <input
                type="text"
                placeholder="data dodania"
                onChange={(e) => setDataDodania(e.target.value)}
                value={dataDodania}
            />{' '}
            <br />
            <input type="text" placeholder="tresc" onChange={(e) => setTresc(e.target.value)} value={tresc} /> <br />
            <button onClick={addUser}>Dodaj</button>
            <table>
                <thead>
                    <tr>
                        <th>Autor</th>
                        <th>Data</th>
                        <th>Tresc</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, id) => (
                        <tr key={id}>
                            <td>{user.autor}</td>
                            <td>{user.data_dodania}</td>
                            <td>{user.tresc}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default App
