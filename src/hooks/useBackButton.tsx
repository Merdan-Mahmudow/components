import { App } from "@capacitor/app"
import { useRouter } from "@tanstack/react-router"
import { useEffect } from "react"

export function useBackButton() {
    const router = useRouter()
    useEffect(() => {
        let listener: any;
      
        App.addListener("backButton", () => {
          const currentPath = router.state.location.pathname;
      
          if (currentPath !== "/") {
            router.history.back();
          } else {
            if (window.confirm("Выйти из приложения?")) {
              App.exitApp();
            }
          }
        }).then((l) => {
          listener = l;
        });
      
        return () => {
          if (listener) {
            listener.remove();
          }
        };
      }, [router]);
}