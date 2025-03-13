import React from 'react'

const Main = () => {
  return (
    <>
        <div className="container text-light text-center" style={{marginTop:'120px'}}>
            <div className="h1 text-align-center">
                ADVance-ing
            </div>
            <div className="container d-flex gap-5" style={{height:"600px"}}>
                <div className=" h-100 w-50 d-flex flex-column justify-content-around">
                    <div className="">
                        <div class="mb-3">
                            <label for="formFile" class="form-label fw-bold">Shop visit </label>
                            <input class="form-control" type="file" id="formFile"/>
                        </div>
                    </div>
                    <div className="">
                        <div class="mb-3">
                            <label for="formFile" class="form-label fw-bold">Contract </label>
                            <input class="form-control" type="file" id="formFile"/>
                        </div>
                    </div>
                    <div className="">
                        <div class="mb-3">
                            <label for="formFile" class="form-label fw-bold">SB </label>
                            <input class="form-control" type="file" id="formFile"/>
                        </div>
                    </div>
                    {/* <button className='btn btn-primary fs-4 fw-bold'>
                        Run
                    </button> */}
                </div>
                <div className=" h-100 w-50 d-flex flex-column justify-content-around">
                    <div className="">
                        <div class="mb-3 d-flex flex-column gap-1">
                            <label for="apiRoute" class="form-label fw-bold">Shop visit </label>
                            <input type="text" placeholder='API Route....' id="apiRoute"/>
                            <input type="text" placeholder='API KEY....' id="apiRoute"/>
                        </div>
                    </div>
                    <div className="">
                        <div class="mb-3 d-flex flex-column gap-1">
                            <label for="apiRoute" class="form-label fw-bold">Contract </label>
                            <input type="text" placeholder='API Route....' id="apiRoute"/>
                            <input type="text" placeholder='API KEY....' id="apiRoute"/>
                        </div>
                    </div>
                    <div className="">
                        <div class="mb-3 d-flex flex-column gap-1">
                            <label for="apiRoute" class="form-label fw-bold">SB </label>
                            <input type="text" placeholder='API Route....' id="apiRoute"/>
                            <input type="text" placeholder='API KEY....' id="apiRoute"/>
                        </div>
                    </div>
                    {/* <button className='btn btn-primary fs-4 fw-bold'>
                        Fetch
                    </button> */}
                </div>
            </div>
                <div className=" d-flex flex-grow-1 gap-2">
                    <button className='btn btn-primary fs-4 fw-bold w-50'>
                        Run
                    </button>
                    <button className='btn btn-primary fs-4 fw-bold w-50'>
                        Fetch
                    </button>
                </div>
        </div>
    </>    
)
}

export default Main