import { setText } from "src/utils/commands"

class FormPage {
    private get firstname() { return $("#firstName") }
    private get lastname() { return $("#lastName") }
    private get useremail() { return $("#userEmail") }
    private get mobile() { return $("#userNumber") }
    private get subject() { return $("#subjectsInput") }
    private get address() { return $("#currentAddress") }

    async setnames(fname:string, lname:string) {
       await setText(this.firstname, fname);
       await setText(this.lastname, lname);
    }

    async setEmail(email:string) {
        await setText(this.useremail, email)
    }

    async setSubject(subject:string) {
        await setText(this.subject, subject);
    }

    async setMobileNumber(mobnum:string) {
        await setText(this.mobile, mobnum);
    }
}
export default new FormPage()