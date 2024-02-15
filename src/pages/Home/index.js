import { Header } from '../../components/header'
import { Card } from '../../components/card';
import { Body } from '../Details/styles';
import { ThemeContext } from '../../contexts/theme-context';
import { useContext } from 'react';

const Home = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <>
            <Body theme={theme}>
                <Header />
                <Card />
            </Body> 
        </>
    )
}

export { Home }