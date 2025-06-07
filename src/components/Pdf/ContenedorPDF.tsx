
interface Props{
    fakePDFUrl: string
    isLoading: boolean
    setIsLoading: (loading: boolean) => void
}

export const ContenedorPDF = ({fakePDFUrl, isLoading, setIsLoading}:Props) => {
  return (
    <iframe
          src={fakePDFUrl}
          className={`w-full md:w-3/4 h-full mx-auto transition-opacity duration-500 p-3 mb-5 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          title={fakePDFUrl}
          style={{ border: "none" }}
          onLoad={() => setIsLoading(false)}
        ></iframe>
  )
}
