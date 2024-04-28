import { ClipLoader } from "react-spinners"
import "./Spinner.css"

type Props = {
  isLoading?: boolean
}

const Spinner = ({ isLoading = true }: Props) => {
  return (
    <>
      <div id="loading-spinner">
        <ClipLoader
          color="#8B0000"
          loading={isLoading}
          size={35}
          aria-label="Loading Spinner"
          data-testid="loader"
        ></ClipLoader>
      </div>
    </>
  )
}

export default Spinner
