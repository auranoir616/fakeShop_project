import Button from "../elements/Button";
import ComponentsForm from "../elements/ComponentForm";
const ContactUsFrag = () => {
    return (
        <div className="h-full w-full p-5 flex flex-row justify-start items-center bg-white mt-2 rounded-md shadow-lg shadow-slate-500/40">
            <div className="w-1/2 pl-32 ">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1661.2571599073437!2d112.63192787165812!3d-7.982647751249455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd628181bac60c7%3A0xe71f0ef69b3810b4!2sAlun%20Alun%20Malang!5e0!3m2!1sen!2sid!4v1709272441931!5m2!1sen!2sid"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                ></iframe>
                </div>
            <div className="w-1/4">
            <p className="text-2xl font-bold">CONTACT US</p>
        <ComponentsForm label="name" id="name" type="text"/>
        <ComponentsForm label="phone" id="phone" type="number"/>
        <ComponentsForm label="email" id="email" type="email"/>
        <ComponentsForm label="messages" id="messages" type="text" height="h-40"/>
            <Button type="button" color="bg-green-400">Send</Button>
            </div>
        </div>
    );
};

export default ContactUsFrag;
