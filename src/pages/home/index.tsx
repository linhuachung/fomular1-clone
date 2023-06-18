import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {GetListData} from "../../store/reducer/DataList/action.ts";
import {Container} from "@chakra-ui/react";
import {Loading} from "../../components/Loading";
import {COLORS} from "../../theme/colors.ts";


function Home() {
    const dispatch = useDispatch()
    const [stateValue, setStateValue] = useState({year: "2023", team: "races", person: "", result: "", isURL: ""})
    const productStore = useSelector((state: any) => state.ProductReducer)
    console.log(productStore)
    useEffect(() => {
        dispatch(GetListData(stateValue))
    }, [stateValue,dispatch])

    useEffect(() => {
        handleGetValue()
    })

    const getContent = () => {
        return (<>
            {productStore.loadingProduct &&
                <Container  position='fixed' top={'0'} left={'0'} zIndex={'1000'} minWidth={'100vw'} minHeight={'100vh'} background={'white'} opacity={'0.9'} display={'flex'} justifyContent={'center'} alignItems={'center'} >
                    <Loading
                        thickness='2px'
                        speed='0.6s'
                        emptyColor={COLORS.BLUE50}
                        color={COLORS.BLUE900}
                        size='xl'
                    />
                </Container>
            }
            <Container maxW='container.xl' dangerouslySetInnerHTML={{__html: productStore.productList.content}}/>
        </> )
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
