import { expect } from "chai";

class AlertsDialogPage {
    // menu utama
    get Appmenu() { return $('~App'); }
    get allertDialogmenu() { return $('~Alert Dialogs'); }

    // locator menu
    get okCancelmsBtn() { return $('~OK Cancel dialog with a message'); }
    get listDialog() { return $('~List dialog'); }
    get singleChoice() { return $('~Single choice list'); }
    get textEntry() { return $('~Text Entry dialog'); }

    // locator button
    get btnOK() { return $('id:android:id/button1'); }
    get btnCancel() { return $('id:android:id/button2'); }

  // locator list dialog 
    get commandOne(){ return $$('id:android:id/text1')[0]; } 
    get commandTwo() { return $$('id:android:id/text1')[1]; } 
    get commandThree() { return $$('id:android:id/text1')[2]; } 
    get commandFour() { return $$('id:android:id/text1')[3]; } 
    
    get showMessage() { return $('id:android:id/message'); }

    // locator single choice 
    get map() { return $$('id:android:id/text1')[0]; }
    get satellite() { return $$('id:android:id/text1')[1]; }
    get traffic() { return $$('id:android:id/text1')[2]; }
    get streetView() { return $$('id:android:id/text1')[3]; }

    // locator text entry dialog
    get name() { return $('id:io.appium.android.apis:id/username_edit'); }
    get pass() { return $('id:io.appium.android.apis:id/password_edit'); }

    

    // ==== ACTION ====
    async openAlertDialog() {
        await this.Appmenu.click();
        await this.allertDialogmenu.click();
    }

    async openMenu(menuElement) {
        await menuElement.click();
    }

    async confirmDialog() {
        await this.btnOK.waitForDisplayed({timeout : 5000});
        expect (await this.btnOK.isDisplayed()).to.be.true; //validasi tombol ada
        await this.btnOK.click();
    }

    async cancelDialog() {
        await this.btnCancel.waitForDisplayed({timeout : 5000});
        expect (await this.btnCancel.isDisplayed()).to.be.true; //validasi tombol ada
        await this.btnCancel.click();
    }

    async enterText(nama, password, action = 'OK') {
        await this.name.setValue(nama);
        await this.pass.setValue(password);
        if (action === 'OK')
            await this.btnOK.click();
        else
            await this.btnCancel.click();
    }

   
    async cancelEmptynameAndPass(){
        await this.name.setValue('');
        await this.pass.setValue('');
        await this.btnCancel.click();
    }
    
    async resetApp(){
        await driver.terminateApp('io.appium.android.apis'); // close app
        await driver.activateApp('io.appium.android.apis');  // open lagi
        
    }
    async validateNameAndPass(){
        expect(await this.name.isDisplayed()).to.be.true;
        expect(await this.pass.isDisplayed()).to.be.true;
    }
    async reopenDialogAndGetValues() {
        await this.openMenu(this.textEntry); // buka lagi dialog
        const nameValue = await this.name.getText();
        const passValue = await this.pass.getText();
        console.log(`Nilai setelah reopen: name="${nameValue}", pass="${passValue}"`);
        return { nameValue, passValue };
    }
    async validateMessageDisplayed(){
        expect(await this.showMessage.isDisplayed()).to.be.true;
    }
    async closeMessage(){
        await driver.back();
        await this.showMessage.waitForDisplayed({ reverse: true, timeout: 5000 });
    }

    // HELPER
    async selectSingleChoice(choiceName, action='OK'){
        const choice = this[choiceName];
        await choice.waitForDisplayed({timeout : 5000});
        expect(await choice.isDisplayed()).to.be.true; //validasi tombol ada
        await choice.click();

        if (action ==='OK')   
            await this.confirmDialog();
        else 
            await this.cancelDialog();

    }

    async selectListChoice(choiceName){
        const choice = this[choiceName];
        await choice.waitForDisplayed({timeout : 5000});
        expect(await choice.isDisplayed()).to.be.true; //validasi tombol ada
        await choice.click();        
    }
    }



export default new AlertsDialogPage();
