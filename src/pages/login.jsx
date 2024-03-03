import TemplateForm from "../components/templates/templateForm"
import TemplateHome from "../components/templates/templateHome"
import FormLogin from "../components/fragments/LoginForm"
const Login = () =>{
    return(
        <TemplateHome>
            <TemplateForm>
            <FormLogin/>
            </TemplateForm>
        </TemplateHome>
    )
}
export default Login