import React from 'react';
import { Container } from 'react-bootstrap';
import { Header, Segment, Button, Icon, Grid, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const HomePageHeading = () => {
    return (
        <Container text>
            <Header
                as='h1'
                content='Focus on what’s important & spend less on rent'
                inverted
                style={{
                    fontSize: '4em',
                    fontWeight: 'normal',
                    marginBottom: 0,
                    marginTop: '1em',
                }}
            />
            <Header
                as='h2'
                content='Join to find your ideal flatmate'
                inverted
                style={{
                    fontSize: '1.7em',
                    fontWeight: 'normal',
                    marginTop: '1.5em',
                }}
            />

            <NavLink to='/login'>
                <Button primary size='huge'>
                    Get Started
                    <Icon name='right arrow' />
                </Button>
            </NavLink>

        </Container>
    )
}

function LandingPage() {
    const url = "https://global-uploads.webflow.com/5a148eb5829b4600018ead40/5e7be015afe4be7f1a5d43d0_community%20illustration.jpg"

    return (
        <>
            <Segment style={{ padding: '8em 0em' }} vertical>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column width={6}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                Pets
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                                Use search filters to find places and people that are pet friendly.
                              </p>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                Find a home
                           </Header>
                            <p style={{ fontSize: '1.33em' }}>
                                Search listings in 192 countries and 18 languages.
                              </p>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                Discover amazing people
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                                Connect with users using Roomster mailbox and Social connect.
                            </p>
                        </Grid.Column>
                        <Grid.Column floated='right' width={10}>
                            <Image size='massive' src={url} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column textAlign='center'>
                            <Button size='huge'>Check Them Out</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Segment
                inverted
                textAlign='center'
                style={{ minHeight: 550, padding: '1em 0em' }}
                vertical
            >
                <HomePageHeading />
            </Segment>



        </>
    )
}



export default LandingPage;