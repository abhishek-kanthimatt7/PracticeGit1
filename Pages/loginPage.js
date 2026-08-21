
module.exports=class loginPage{

    constructor(page){

        this.page=page;
        this.userName = page.getByPlaceholder("you@email.com");
        this.password = page.getByRole('textbox',{name:"Password"});
        this.signIn = page.getByRole("button",{name:"Sign In"});

    }

    async gotoURL(URL){
        await this.page.goto(URL);
    }

    async login(userName,password){
        await this.userName.fill(userName);
        await this.password.fill(password);
        await this.signIn.click();
    }

}