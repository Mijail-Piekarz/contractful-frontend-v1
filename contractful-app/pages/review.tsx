import type { NextPage } from "next"
import { useRouter } from 'next/router'

import { 
    CssBaseline, Container, Grid, Typography, Button, Stack, Divider
} from "@mui/material"

import WalletIcon from '@mui/icons-material/Wallet'
import BrushIcon from '@mui/icons-material/Brush'
import NotInterested from "@mui/icons-material/NotInterested"

import ContractfulHtmlHead from "../components/html-head"
import ContractfulHeader from "../components/header"
import ContractfulFooter from "../components/footer"
import StepNumberCircle from "../components/step-number-circle"
import ContractfulAgreementSummary from "../components/agreement-summary"

import TrafficLight from "../components/TrafficLight"

const ReviewHiringAgreement: NextPage = () => {

    const router = useRouter()
    const useCase = ("useCase" in router.query) ? 
        router.query['useCase']
        : "consent"

    const agreementData = {
      clientAddr: '0xF8215235b9526E22b3452e17b83Ae31B15357980',
      descriptionTxt: 'TODO description from IPFS ...\nFirst\nSecond\nThird\nFourth\Fifth\nSixth\nSeventh Sentence ...',
      engagementMonths: 3,
//      engagementStartDate: new Date(),
      engagementStartDate: 'TODO',
      workingCommitment: 'TODO workingCommitment',
      hourlyRate: 140.00,
      paymentTerms: 'TODO paymentTerms',
      resultingBudget: 11200.00
    }

    const nowTime = new Date()

    return (
        <>
            <ContractfulHtmlHead />
            <CssBaseline />
            <ContractfulHeader />

            DEBUG useCase = {useCase}

            <Container>
                <Grid container pt={8}>
                    <Grid item xs={1}>
                        <StepNumberCircle>
                            1
                        </StepNumberCircle>
                    </Grid>
                    <Grid item xs={7}>
                        <Typography variant="h6">
                            👋 Welcome
                        </Typography>
                        <Typography pt={1}>
                            Please connect your Wallet to review the Hiring Agreement that has been created for you.
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            startIcon={<WalletIcon />}
                            fullWidth
                            >
                            Connect Wallet
                        </Button>
                    </Grid>
                </Grid>
            </Container>

            <Container>
                <Grid container pt={4}>
                    <Grid item xs={1}>
                        <StepNumberCircle>
                            2
                        </StepNumberCircle>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="h6">
                            📝 Contract
                        </Typography>
                        <Stack direction="row" pt={1} sx={{
                          width:'100%'
                        }}>
                            <TrafficLight
                                RedOn
                                Horizontal="false"
                            />
                            <Typography
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    backgroundColor: '#D0021B',
                                    color: '#fff'
                                }}
                                mx={4}
                                px={2}
                                variant="button"
                            >
                                ACTION NEEDED
                            </Typography>
                            
                            <ul style={{
                                margin: '0',
                                padding: '0',
                                listStyleType: 'none'
                              }}
                            >
                              <li>✅ Funds have been committed to this Hiring Agreement.</li>
                              <li>❌ You have not consented to the Hiring Agreement yet.</li>
                            </ul>

                            <Divider orientation="vertical" flexItem sx={{
                                ml:4,
                                mr:4
                              }}
                            />

                            <Stack>
                                <Typography>🗓️ {nowTime.getUTCDay()}. {nowTime.toLocaleString('en-EN', { timeZone: 'UTC', month: 'long' })} {nowTime.getUTCFullYear()}</Typography>
                                <Typography>🕘 {String(nowTime.getUTCHours()).padStart(2, '0')}:{String(nowTime.getUTCMinutes()).padStart(2, '0')} (UTC)</Typography>
                            </Stack>

                        </Stack>
                        <Typography pt={1} pb={4}>
                            Please review all details of your Hiring Agreement carefully.
                        </Typography>

                        <ContractfulAgreementSummary data={agreementData} />
                    </Grid>
                </Grid>
            </Container>

            <Container>
                <Grid container pt={4}>
                    <Grid item xs={1}>
                        <StepNumberCircle>
                            3
                        </StepNumberCircle>
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs>
                        <Typography py={1} sx={{
                            textAlign: 'center'
                        }}>
                            Please review your contract carefully.<br />If all details are correct, please proceed to consent to the Agreement.
                        </Typography>
                        <Stack spacing={2}>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                startIcon={<BrushIcon />}
                                fullWidth
                                >
                                Consent to the Agreement
                            </Button>
                            <Button
                                variant="contained"
                                color="warning"
                                startIcon={<NotInterested />}
                                fullWidth
                                >
                                Decline Agreement
                            </Button>
                        </Stack>
                    </Grid>
                    <Grid item xs={3}></Grid>
                </Grid>
            </Container>

            <ContractfulFooter />
        </>
    )
}

export default ReviewHiringAgreement;
