export const TableItem = ({name, location}) => {
    return (
        <div className="row">
            <div className="col-md-3">
                <div className="card card-primary">
                    <div className="card-header">
                        <h3 className="card-title">{name}</h3>
                        <div className="card-tools">
                            <button type="button" className="btn btn-tool" data-card-widget="card-refresh"
                                    data-source="widgets.html" data-source-selector="#card-refresh-content">
                                <i className="fas fa-sync-alt"></i>
                            </button>
                        </div>
                    </div>
                    <div className="card-body">
                        {location}
                    </div>
                </div>
                <div className="d-none" id="card-refresh-content">
                    The body of the card after card refresh
                </div>
            </div>

        </div>

    )
}