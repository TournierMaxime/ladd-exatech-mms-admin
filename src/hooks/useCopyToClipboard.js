// hooks/useClipboardToast.js
import { useRef } from "react"
import { ToastCopy } from "../components/Utils/Toast"

const useCopyToClipboard = () => {
  const toastCopy = useRef(null)

  const copyToClipboard = (data) => {
    navigator.clipboard.writeText(data)
    ToastCopy(toastCopy, "Contenu copié", false)
  }

  return {
    copyToClipboard,
    toastCopy,
  }
}

export default useCopyToClipboard
