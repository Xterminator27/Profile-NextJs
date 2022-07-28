// component folder is for all the pages that dont want to be routed with the child apis
// we use the _app.js to get a layout template for each of the pages and sets the pattern on how each page should look like
import styles from '../styles/Layout.module.css'
import Nav from './Nav'

// here children is the pageprops of each child page
const Layout = ({children}) => {
    return (
        <>
        <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    
            {/* if nav is here then the styles is also applied to this therefore put in top*/}
            {/* <Nav /> */}
            
            {/* <h1>This is going to be placed in each page</h1>
            <h1>This is because we wrap the _app.js return statement in </h1> */}
                    {children}
                </main>
            </div>

        
        </>

    )
}

export default Layout