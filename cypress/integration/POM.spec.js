
export class General{
    static getMenu(){
        return cy.get('#topnav > .form-control')
    }
    static continue(){
        return cy.get('.col-md-12 > .btn-orange')
    }
    static getAlert(){
        return cy.get('.alert')
    }
    static getUrl(){
        return cy.url()
    }
}

export class Login{

    static getLoginPage() {
        return cy.get('a[href*="/index.php?rt=account/login"]')
    }

    static getLoginName() {
        return cy.get('input[name="loginname"]')
    }

    static getPassword() {
        return cy.get('input[name="password"]')
    }

    static getSubmitButton(){
        return cy.get('button[type="submit"][title="Login"]')
    }

    static selectHomeButton(){
        return cy.get('#categorymenu')
    }
    static getBody(){
        return cy.get('body')
    }
}

export class Register{
    static getContinueButton(){
        return cy.get('#accountFrm > fieldset > .btn')
    }

    static getFirstName(){
        return cy.get('input[name="firstname"]')
    }

    static getLastName(){
        return cy.get('input[name="lastname"]')
    }

    static getEmail() {
        return cy.get('[id="AccountFrm_email"]')
    }

    static getTelephone(){
        return cy.get('input[name="telephone"]')
    }

    static getAddress() {
        return cy.get('input[name="address_1"]')
    }

    static getCity(){
        return cy.get('input[name="city"]')
    }

    static getZoneId(){
        return cy.get('select[name="zone_id"]')
    }

    static getPostcode(){
        return cy.get('input[name="postcode"]')
    }

    static getCountryId(){
        return cy.get('select[name="country_id"]')
    }

    static getLoginName() {
        return cy.get('input[name="loginname"]')
    }

    static getConfPass() {
        return cy.get('input[name="confirm"]')
    }

    static getRadioB() {
        return cy.get('[type="radio"]')
    }

    static getCheckBox(){
        return cy.get('[type="checkbox"]')
    }

    static continue(){
        return cy.contains('Continue')
    }

    static getConfBox(){
        return cy.get('.maintext')
    }
}

export class Specials{
    static getSort(){
        return cy.get('#sort')
    }

    static getFirstProd(){
        return cy.get(':nth-child(1) > .thumbnail > :nth-child(2) > img')
    }

    static getStars(){
        return cy.get('.rate > :nth-child(4)')
    }

    static getProdOption(){
        return cy.get('#option306')
    }

    static addToCart(){
        return cy.get('.cart')
    }

    static getSecondProd(){
        return cy.get(':nth-child(2) > .thumbnail > :nth-child(2) > img')
    }

    static getColCart(){
        return cy.get('.table > tbody > :nth-child(2) > :nth-child(2) > a')
    }

    static getCartProd(){
        return cy.get('tbody > :nth-child(3) > :nth-child(2) > a')
    }
}

export class Contact{
    static getContact(){
        return cy.get('.info_links_footer > :nth-child(5) > a')
    }
    static getFName(){
        return cy.get('#ContactUsFrm_first_name')
    }

    static getEmail(){
        return cy.get('#ContactUsFrm_email')
    }
    static getBox(){
        return cy.get('#ContactUsFrm_enquiry')
    }
    static getSubmit(){
        return cy.get('.col-md-6 > .btn')
    }
    static getConfirm(){
        return cy.get('.mb40 > :nth-child(3)')
    }
}
export class Notification{
    static getNotif(){
        return cy.get('.side_account_list > :nth-child(9) > a')
    }
    static getCheck(){
        return cy.get('#imFrm_settingsnewsletteremail')
    }
}

export class Password{
    static getChangePass(){
        return cy.get('#maincontainer > div > div.column_right.col-md-3.col-xs-12.mt20 > div.sidewidt > div > ul > li:nth-child(4) > a > i')
    }
    static getActualPass(){
        return cy.get('#PasswordFrm_current_password')
    }
    static getNewPass(){
        return cy.get('#PasswordFrm_password')
    }
    static getPassConfirm(){
        return cy.get('#PasswordFrm_confirm')
    }
}