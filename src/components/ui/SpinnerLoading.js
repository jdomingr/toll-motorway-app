import React from 'react'

export const SpinnerLoading = () => {
    return (
       <div className="row justify-content-center">
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
       </div>
    )
}
