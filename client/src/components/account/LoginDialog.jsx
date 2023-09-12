import React, { useContext } from 'react'
import {Box,Dialog,Typography,List,ListItem} from '@mui/material'
import {qrCodeImage} from "../../constants/data"
import styled from '@emotion/styled'
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode"
import { AccountContext } from '../../context/AccountProvider';
import {addUser} from '../../service/api'

const Component = styled(Box)`
   display : flex;
`

const Container = styled(Box)`
padding : 56px 0 56px 56px;
`
const Qrcode = styled('img')({  //this is a html tag for for styling do this
    height : 264,
    width : 264,
    margin : "50px"
})

const StyledList = styled(List)`
    & > li{
        padding : 0,
        margin-top : 15px,
        font-size : 18px,
        line-height : 28px,
        color : #4A4A4A
    }
`

const Title = styled(Typography)`
   font-size : 26px;
   color : #525252;
   font-weight : 300;
   font-family : inherit;
   margin-bottom : 25px;
`

const dialogStyle = {
    height : "96%",
    marginTop : "12%",
    width : "60%",
    maxWidth : "100%",
    maxHeight : "100%",
    boxShadow : "none",
    overflow : "hidden"
}

const LoginDialog = () => {
    const {setAccount} = useContext(AccountContext)

    const onLoginSuccess = async(res)=>{
        const decoded = jwt_decode(res.credential);
        setAccount(decoded);
        await addUser(decoded)
    }

    const onLoginError = (res)=>{
        console.log("login failed")
    }

    return (
        <Dialog 
        open={true}
        PaperProps={{sx:dialogStyle}}
        hideBackdrop={true}
        >
            
            <Component>
                <Container>
                    <Title>To use Whatsapp on your computer:</Title>
                    <StyledList>
                        <ListItem>1. Open Whatsapp on your phone</ListItem>
                        <ListItem>2. Tap Menu Settings and select Linked devices</ListItem>
                        <ListItem>3. Point Your phone to this screen to capture the code</ListItem>
                    </StyledList>
                </Container>
                <Box style={{position : 'relative'}}>
                    <Qrcode src={qrCodeImage} alt="qr code" />
                    <Box style={{position: 'absolute', top:"50%",transform : " translatex(25%)"}}>
                        <GoogleLogin 
                        onSuccess={onLoginSuccess}
                        onError={onLoginError}
                        />
                    </Box>
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog