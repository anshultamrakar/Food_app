
import { useRouteError } from "react-router-dom"

const Error = () => {
  const err = useRouteError();
    return(
        <div>
         <h1>Oops! Page not Found</h1>
         <h3>{err?.data}</h3>
        </div>
    )
}

export default Error
