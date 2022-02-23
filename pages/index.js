import Title from '../src/components/Title/index'
import ContainerGlass from '../src/components/ContainerGlass/index'
import DivForm from '../src/components/DivForm/index'
import Select from '../src/components/Select/index'
//import InputSearch from '../src/components/Input/index'
import React, { useState } from "react";
import Head from 'next/head';
import { IoSearchSharp } from "react-icons/io5";

function HomePage() {
    const text = "Quantas pessoas tem o mesmo nome que o seu?"
    const [value, setValue] = useState('')
    const [nome, setNome] = useState('')
    const [frequencia, setFrequencia] = useState('')

    var v = 0

    function APIFetch() {
        fetch(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/${value}`)
            .then((res) => {
                return res.json()
            })
            .then((resp) => {
                setNome(resp[0].nome)
                const p = resp[0].res
                p.map(({ periodo }) => {
                    if (periodo == "[2000,2010[") {
                        setFrequencia(resp[0].res[v].frequencia)
                        v++
                    }
                    else {
                        v++
                    }
                })
            })
            .catch((e) => { alert("Esse nome não está registrado no banco de dados do IBGE") })
    }

    return (
        <>
            <Head>
                <title>Search Name</title>

                <link rel="shortcut icon" href="http://cdn.onlinewebfonts.com/svg/img_491257.png" />
            </Head>
            <Title props={text} />
            <ContainerGlass >
                <p>Pesquise a frequência do seu nome</p>
                <DivForm>

                    <input
                        required
                        className="inputSearch"
                        value={value.toUpperCase()}
                        onChange={(e) => { setValue(e.target.value) }}
                    />
                    <span>Nome:</span>
                    <button
                        className="btn"
                        type="submit"
                        onClick={(event) => {
                            event.preventDefault()
                            APIFetch()
                        }}
                    ><IoSearchSharp style={{ fontSize: "25px" }} /></button>
                </DivForm>
                <Select disabled={true} title="Os períodos estão em desenvolvimento" onChange={(e) => { console.log(e.target.value) }}>
                    <option value="[2000,2010[">1950 - 1960</option>
                    <option value="[2000,2010[">1960 - 1970</option>
                    <option value="[2000,2010[">1970 - 1980</option>
                    <option value="[2000,2010[">1980 - 1990</option>
                    <option value="[2000,2010[">1990 - 2000</option>
                    <option value="[2000,2010[">2000 - 2010</option>
                </Select>
                <TextZone nome={nome} frequencia={frequencia} />

            </ContainerGlass>

        </>
    )
}

function TextZone(props) {
    // console.log(props)
    return (
        <ul>
            <li>
                {props.nome}
            </li>
            <li style={{ marginBottom: "0" }}>
                {props.frequencia}
            </li>
        </ul>
    )
}

export default HomePage