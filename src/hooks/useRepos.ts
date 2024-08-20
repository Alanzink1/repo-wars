import { Dispatch, SetStateAction, useEffect, useState } from "react"

const fetchRepos = async (amount:number, setters: Dispatch<SetStateAction<any[]>>[]) => {
    const res = {data: ["repo1", "repo2"]}
    setters.forEach((setter )=> setter(res.data))
}

const useRepos = (amount: number) => {
    // cria um estado para todos os repositorios
    const [allRepos, setAllRepos] = useState<any>([])
    //cria um estado para os repositorios
    const [repositories, setRepositories] = useState<any>([])
    // um useEffect para recuperar os repositorios do GitHub
    useEffect(()=>{
        // executa função assíncrona
        fetchRepos(amount, [setAllRepos, setRepositories])
    },[])
    // retorna [repositorios, setRepositorios, allRepositorios]
    return [repositories, setRepositories, allRepos]
}

export default useRepos