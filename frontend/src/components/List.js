
const List = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="card mb-3 card-body">
              <div className="row align-items-center">
                <div className="col-auto">
                  <a href="#!.html">
                    <img src="https://www.bootdey.com/image/280x280/FF00FF/000000" className="width-90 rounded-3" alt="" />
                  </a>
                </div>
                <div className="col">
                  <div className="overflow-hidden flex-nowrap">
                    <h6 className="mb-1">
                      <a href="#!" className="text-reset">CRM dashboard landing page</a>
                    </h6>
                    <span className="text-muted d-block mb-2 small">
                      Updated 2 Hours Ago
                    </span>
                    <div className="row align-items-center">
                      <div className="col-12">
                        <div className="row align-items-center g-0">
                          <div className="col-auto">
                            <small className="me-2">45%</small>
                          </div>
                          <div className="col">
                            {/* Progress bar */}
                            <div className="progress bg-tint-success" style={{ height: '4px' }}>
                              <div className="progress-bar bg-success" role="progressbar" style={{ width: '45%' }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 나머지 카드들도 동일하게 수정 */}
          
        </div>
      </div>
    );
  };
    

export default List;
