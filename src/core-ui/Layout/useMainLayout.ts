import { useState } from "react"

export const useMainLayout = () => {
    const [hideHeader, setHideHeader] = useState(false)
    const [hideStaff, setHideStaff] = useState(false)
    const [hideVisualizer, setHideVisualizer] = useState(false)
    const [hideFooter, setHideFooter] = useState(false)


    return [hideHeader, hideStaff, hideVisualizer, hideFooter]
}