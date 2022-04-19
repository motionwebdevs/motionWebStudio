import Header from "./Header/header";
import Footer from "./Footer/footer";

const HomeLayout = ({children}) => {
    return (
        <>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </>

    )
}

export default HomeLayout
