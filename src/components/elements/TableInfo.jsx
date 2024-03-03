const TableInfo =()=>{
    const info = JSON.parse(localStorage.getItem("information"));
     // Check if info.firstname exists
  if (!info || !info.firstname) {
    return null; // If info.firstname is not available, return null to render nothing
  }

    return(
        <div className="flex flex-col justify-between items-center w-1/2">
            <div className="text-6xl mb-5">
                INVOICE
            </div>
        <div className="flex flex-row justify-between items-center w-full">
            <div className="flex flex-col">
            <p className="text-lg">Name: {info.firstname} {info.lastname}</p>
            <p className="text-lg">Email : {info.email}</p>
            <p className="text-lg">Phone : {info.phone}</p>
            <p className="text-lg">City : {info.city}</p>
            </div>
            <div className="flex flex-col">
            <p className="text-lg">State : {info.state}</p>
            <p className="text-lg">Address : {info.address} postCode: {info.postCode}</p>
            <p className="text-lg">Notes : {info.notes}</p>
            <p className="text-lg">payment Method : {info.payment.value}</p>
            </div>
        </div>
        </div>
    )
}
export default TableInfo