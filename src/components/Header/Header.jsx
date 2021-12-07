import React from 'react'
import styled from 'styled-components'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

function Header() {
    return (
        <Wrapper>
            <Paper elevation={3}>
                <ContainerOne>
                    <div>
                        <figure >
                            <img src="/images/shopify.png"/>
                        </figure>
                    </div>
                    <div>
                        <hgroup>
                            <span>
                                <h4>Start</h4>
                                <KeyboardArrowDownIcon />
                            </span>
                            <span>
                                <h4>Sell</h4>
                                <KeyboardArrowDownIcon />
                            </span>
                            <span>
                                <h4>Market</h4>
                                <KeyboardArrowDownIcon />
                            </span>
                            <span>
                                <h4>Manage</h4>
                                <KeyboardArrowDownIcon />
                            </span>
                        </hgroup>
                    </div>

                </ContainerOne>
                <ContainerTwo>
                    <div>
                        <hgroup>
                            <span>
                                <h4>Pricing</h4>
                            </span>
                            <span>
                                <h4>Learn</h4>
                            </span>
                            <span>
                                <h4>Login</h4>
                            </span>
                        </hgroup>
                        <Button variant="contained">Start Free Trial</Button>
                    </div>
                </ContainerTwo>
            </Paper>
        </Wrapper>
    )
}

export default Header

const Wrapper = styled.div`
    width: 100%;
	font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color:#CCCDD7;
`
const ContainerOne = styled.div`
    width: 50%;
    display:flex;
    &>div:nth-child(1){

        &>figure>img{
            height: 40px;
            width: 40px;
        }
    }

    &>div:nth-child(2){

        &>hgroup{
            display:flex;

            &>span{
                display: flex;
            }
        }
    }
	
`
const ContainerTwo = styled.div`
	width: 50%;
    display: flex;
    
	
`