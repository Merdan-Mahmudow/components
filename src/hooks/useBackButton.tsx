import { App } from "@capacitor/app"
import { useRouter } from "@tanstack/react-router"
import { useEffect } from "react"

export function useBackButton() {
    const router = useRouter()
    useEffect(() => {
        let listener: any;
        App.addListener("backButton", () => {
            if (router.history.length > 1) {
                router.history.back()
            } else {
                if (window.confirm("Выйти из приложения?")) {
                    App.exitApp()
                }
            }
        }).then((l) => {
            listener = l
        })
        return () => {
            if (listener) {
                listener.remove()
            }
        }
    }, [router])
}