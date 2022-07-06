
export const PersonDataItem = () => {
    return(
        <div className="col-12">
            <form>
                <div className="form-group row">
                    <label htmlFor="name" className="col-sm-1 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="name"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="surname" className="col-sm-1 col-form-label">Surname</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="surname"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="email" className="col-sm-1 col-form-label">Mail</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="email"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="phone" className="col-sm-1 col-form-label">Phone</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="phone"/>
                    </div>
                </div>
                <button className="btn button" type="submit">Kaydet</button>
            </form>
        </div>
    );
}