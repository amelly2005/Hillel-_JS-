
//1)Створити набір тестових даних

// 2)Написати тест, використовуючи набір тестових даних

// Наприклад для https://lms.ithillel.ua/ використовуючи як приклад дані
import{ login_data } from "./loginPage.spec"

const { expect } = require('@playwright/test');

export {HomePage}
   
class HomePage{

    constructor(page){
        this.page = page
        this.email= page.locator(`//input[@type='email']`)
        this.password= page.locator(`//input[@type='password']`)
        this.message = page.locator(`//p[@class="page-login__actions-validation ng-star-inserted"]`)
        this.buttonSubmit = page.locator(`//button`)
        this.lectures = page.locator(`(//a[@class ="dashboard-card-course-navigation__link dashboard-card-course-navigation__link--lessons"])[2]`)
        this.lesson9 = page.locator(`(//li[@class ="lessons-timeline__item ng-star-inserted"])[9]`)
        this.titleLesson = page.locator(`//h2`)
        
    }
    async  doLogin(email, password, result, locator){
        await this.page.goto("https://lms.ithillel.ua")
        await this.email.fill(email)
        await this.password.fill(password)
        await this.buttonSubmit.click()
        await expect(this.page.locator(locator)).toHaveText(result)
    

    }
    
    async  goHomePage(email, password, result, locator){
        await this.page.goto("https://lms.ithillel.ua/")
        await this.email.fill(email)
        await this.password.fill(password)
        await this.buttonSubmit.click()
        expect(this.page.locator(locator))

    

}
}


