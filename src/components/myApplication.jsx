import Sidebar from "../Dashboard/sidebar"
import Header from "../Dashboard/header"
import MyApplicationArea from "../Dashboard/myApplicationArea"


const myApplication = () => {
  return (
    <div>
        <Sidebar />
        <Header />
        <MyApplicationArea />
    </div>
  )
}

export default myApplication