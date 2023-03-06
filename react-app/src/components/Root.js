import { Outlet } from "react-router-dom"

const Root = () => {
    return (
        <>
            <header>Dokkan Tools</header>
            <div id="main-container">
                <div id="sidebar">

                </div>
                <div id="main-content">
                    <Outlet />
                </div>
            </div>
            <footer>made by newspaperhinson</footer>
        </>
    )
}

export default Root