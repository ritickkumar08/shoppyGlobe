import React from 'react'
import { ClimbingBoxLoader } from "react-spinners";

function Loader() {
    return (
        <div>
            <div className="flex h-screen items-center justify-center">
                <ClimbingBoxLoader size={35}  color="#FB7185" />
            </div>
        </div>
    )
}

export default Loader
