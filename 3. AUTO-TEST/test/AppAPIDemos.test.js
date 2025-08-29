import { expect } from 'chai';
import AlertsDialogPage from '../Page_object/AlertDialogpage.js';
// ---POSITIVE CASE-----
describe('POSITIVE CASE - OK CANCEL DIALOG', () => {
    beforeEach(async () => {
        
        await AlertsDialogPage.openAlertDialog();
    });
    afterEach(async ()=>{
        await AlertsDialogPage.resetApp();
        
    });

    it('TC-MESS-001-OK -- CANCEL DIALOG WITH A MESSAGE', async () => {
        await AlertsDialogPage.openMenu(AlertsDialogPage.okCancelmsBtn);    
        await AlertsDialogPage.confirmDialog();  // klik OK untuk tutup pop up        
        expect(await AlertsDialogPage.okCancelmsBtn.isDisplayed()).to.be.true; // validasi menu tampil kembali

    });

    it('TC-MESS-001-CAN -- CANCEL DIALOG WITH A MESSAGE ', async ()=>{
        await AlertsDialogPage.openMenu(AlertsDialogPage.okCancelmsBtn);       
        await AlertsDialogPage.cancelDialog();  // klik cancel untuk menutup pop up       
        expect(await AlertsDialogPage.okCancelmsBtn.isDisplayed()).to.be.true;  // validasi menu tampil kembali

    });
});

describe('POSITIVE CASE - LIST DIALOG', ()=>{
    beforeEach(async () => {        
        await AlertsDialogPage.openAlertDialog();
    });

    afterEach(async ()=>{
        await AlertsDialogPage.resetApp();
    });

    it('TC-LIST-001-ONE -- LIST DIALOG', async () => {
         await AlertsDialogPage.openMenu(AlertsDialogPage.listDialog);        
         await AlertsDialogPage.selectListChoice('commandOne'); // pilih commandOne        
         await AlertsDialogPage.validateMessageDisplayed(); // validasi muncul pesan setelah memilih
         await AlertsDialogPage.closeMessage();
        
    }); 

    it('TC-LIST-002-TWO -- LIST DIALOG', async () => {
         await AlertsDialogPage.openMenu(AlertsDialogPage.listDialog);         
         await AlertsDialogPage.selectListChoice('commandTwo'); // pilih commandTwo
         await AlertsDialogPage.validateMessageDisplayed(); //validasi muncul pesan setelah memilih
         await AlertsDialogPage.closeMessage();
        
     });

    it('TC-LIST-003-THREE -- LIST DIALOG', async () => {
         await AlertsDialogPage.openMenu(AlertsDialogPage.listDialog);        
         await AlertsDialogPage.selectListChoice('commandThree'); // pilih commandThree        
         await AlertsDialogPage.validateMessageDisplayed(); //validasi muncul pesan setelah memilih
         await AlertsDialogPage.closeMessage();

     });

    it('TC-LIST-004-FOUR -- LIST DIALOG', async () => {
         await AlertsDialogPage.openMenu(AlertsDialogPage.listDialog);
         await AlertsDialogPage.selectListChoice('commandFour'); // pilih commandFour
         await AlertsDialogPage.validateMessageDisplayed(); //validasi muncul pesan setelah memilih
         await AlertsDialogPage.closeMessage();

     });

});

describe('POSITIVE CASE --SINGLE CHOICE LIST', ()=> {
    beforeEach(async () => {
        
        await AlertsDialogPage.openAlertDialog();
    });
    afterEach(async ()=>{
        await AlertsDialogPage.resetApp();
    });

    it('TC-SINGLE-001-MAP-OK  -- SINGLE CHOICE LIST', async () => {
        await AlertsDialogPage.openMenu(AlertsDialogPage.singleChoice);
        await AlertsDialogPage.selectSingleChoice('map','OK'); // pilih map
    });

    it('TC-SINGLE-001-MAP-CAN  -- SINGLE CHOICE LIST', async () => {
        await AlertsDialogPage.openMenu(AlertsDialogPage.singleChoice);      
        await AlertsDialogPage.selectSingleChoice('map','CANCEL');  // pilih map
       
    });

    it('TC-SINGLE-002-SAT-OK -- SINGLE CHOICE LIST', async () => {
        await AlertsDialogPage.openMenu(AlertsDialogPage.singleChoice); 
        await AlertsDialogPage.selectSingleChoice('satellite', 'OK'); // pilih satellite
    });

    it('TC-SINGLE-002-SAT-CAN -- SINGLE CHOICE LIST', async () => {
        await AlertsDialogPage.openMenu(AlertsDialogPage.singleChoice);    
        await AlertsDialogPage.selectSingleChoice('satellite','CANCEL'); // pilih satellite
        
    });

    it('TC-SINGLE-003-TRAF-OK -- SINGLE CHOICE LIST', async () => {
        await AlertsDialogPage.openMenu(AlertsDialogPage.singleChoice); 
        await AlertsDialogPage.selectSingleChoice('traffic', 'OK'); //pilih traffic

    });

    it('TC-SINGLE-003-TRAF-CAN -- SINGLE CHOICE LIST', async () => {
        await AlertsDialogPage.openMenu(AlertsDialogPage.singleChoice);       
        await AlertsDialogPage.selectSingleChoice('traffic', 'CANCEL'); // pilih traffic

    });
    it('TC-SINGLE-004-STREET-OK -- SINGLE CHOICE LIST', async () => {
        await AlertsDialogPage.openMenu(AlertsDialogPage.singleChoice);       
        await AlertsDialogPage.selectSingleChoice('streetView', 'OK'); // pilih streetView

    });

    it('TC-SINGLE-004-STREET-CAN -- SINGLE CHOICE LIST', async () => {
        await AlertsDialogPage.openMenu(AlertsDialogPage.singleChoice);      
        await AlertsDialogPage.selectSingleChoice('streetView','CANCEL');  // pilih streetView

    });
});

describe('POSITIVE CASE - TEXT ENTRY DIALOG', ()=>{
    beforeEach(async () => {
        
        await AlertsDialogPage.openAlertDialog();
    });
    afterEach(async ()=>{
        await AlertsDialogPage.resetApp();
        
    });
    it('TC-TXT-001-OK - TEXT ENTRY DIALOG', async () => {
        await AlertsDialogPage.openMenu(AlertsDialogPage.textEntry);        
        await AlertsDialogPage.validateNameAndPass();  // validasi field nama & password ada              
        await AlertsDialogPage.enterText('irma suryani', 'APPDemos22_', 'OK'); // isi field dan klik OK        
        const { nameValue } = await AlertsDialogPage.reopenDialogAndGetValues(); //validasi sistem menyimpen data
        expect(nameValue).to.equal('irma suryani');
      
    });

    it('TC-TXT-001-CAN - TEXT ENTRY DIALOG', async () => {
        await AlertsDialogPage.openMenu(AlertsDialogPage.textEntry);        
        await AlertsDialogPage.validateNameAndPass(); //validasi field nama & password ada       
        await AlertsDialogPage.enterText('irma suryani', 'APPDemos22_','CANCEL');  // isi field dan klik Cancel      
        const { nameValue , passValue } = await AlertsDialogPage.reopenDialogAndGetValues(); //validasi sistem tidak menyimpan data
        expect(nameValue).to.equal('');
        expect(passValue).to.equal('');
    });

    it('TC-TXT-002-CAN - TEXT ENTRY DIALOG', async () => {
        await AlertsDialogPage.openMenu(AlertsDialogPage.textEntry);        
        await AlertsDialogPage.validateNameAndPass(); // validasi field nama & password ada        
        await AlertsDialogPage.cancelEmptynameAndPass(); // kosong kan field dan klik Cancel
         
    });
});
   

// ----NEGATIVE CASE -----

describe('NEGATIVE CASE - TEXT ENTRY DIALOG', () => {
    beforeEach(async () => {
        await AlertsDialogPage.openAlertDialog();
    });
    it('TC-TXT-002-OK - TEXT ENTRY DIALOG', async () => {
        await AlertsDialogPage.openMenu(AlertsDialogPage.textEntry);        
        await AlertsDialogPage.validateNameAndPass(); // validasi field nama & password ada        
        expect(await AlertsDialogPage.btnOK.isEnabled()).to.be.false; //  validasi tombol OK tidak dapat di klik

        console.log('✅ NEGATIVE CASE: OK button disable saat field kosong, sesuai ekspektasi');
    });
   
});
