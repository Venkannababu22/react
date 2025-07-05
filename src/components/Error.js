import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div>
            <h1>{error?.error?.message}</h1>
        </div>
    )
}

export default Error;