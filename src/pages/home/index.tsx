import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {GetListData} from "../../store/reducer/DataList/action.ts";
import {Container} from "@chakra-ui/react";


function Home() {
    const dispatch = useDispatch()
    const [stateValue, setStateValue] = useState({year: "2023", team: "races", person: "", result: "", isURL: ""})
    const {content} = useSelector((state: any) => state.ProductReducer.productList)
    useEffect(() => {
        dispatch(GetListData(stateValue))
    }, [stateValue,dispatch])

    useEffect(() => {
        handleGetValue()
    })

    const getContent = () => {
        return <Container maxW='container.xl' dangerouslySetInnerHTML={{__html: content}}/>
    }

    const handleGetValue = () => {
        const yearSelector = document.getElementsByClassName("resultsarchive-filter-form-select")[0]
        yearSelector?.addEventListener('change', function(e) {
            if (!e.target) return
            const yearValue = e.target.value
            setStateValue({
                year: yearValue, team: stateValue.team, person: stateValue.person,result: stateValue.result
            })
        });
        const teamSelector = document.getElementsByClassName("resultsarchive-filter-form-select")[1]
        teamSelector?.addEventListener('change', function(e) {
            if (!e.target) return
            const teamValue = e.target.value
            setStateValue({
                year: stateValue.year, team: teamValue, person: stateValue.person,result: stateValue.result
            })
        });
        const personSelector = document.getElementsByClassName("resultsarchive-filter-form-select")[2]
        personSelector?.addEventListener('change', function(e) {
            if (!e.target) return
            const personValue = e.target.value
            setStateValue({
                year: stateValue.year, team: stateValue.team, person: personValue,result: stateValue.result
            })
        });

        const tagResult = document.getElementsByClassName("side-nav-item-link")
        for(let i = 0; i < tagResult.length; i++) {
            tagResult[i].removeAttribute('href');
            tagResult[i].style.cursor = 'pointer'
            tagResult[i].addEventListener('click', function(e) {
                const resultValue = e.target.dataset.value
                setStateValue({
                    year: stateValue.year, team: stateValue.team, person: stateValue.person, result: resultValue
                })
            });
        }
    }

    return getContent()
}

export default Home
