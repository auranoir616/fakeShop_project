import ConfirmModal from "../components/elements/Confirmpayment"
import TableInfo from "../components/elements/TableInfo"
import TableItems from "../components/elements/tableCart"
import { UseStateContext } from '../components/store/ContextProvider'

const Invoice =()=>{
    const {notification} = UseStateContext()

    return(
        <div className="w-full h-screen flex flex-col justify-start items-center mt-10">
                      <div className="h-10 w-1/2">
        {notification && <div className="h-full  bg-green-300 rounded-md text-center font-bold ">
                {notification}
                </div>
                
              }   
          </div>
            <TableInfo/>
            <TableItems/>
            <ConfirmModal/>
        </div>
    )
}
export default Invoice