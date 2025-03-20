import './App.css'
import {Outlet} from "react-router";
import {ThemeProvider} from "@/components/theme-provider.tsx";

function App() {

    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <Outlet/>
            </ThemeProvider>
        </>
    )
}

export default App
